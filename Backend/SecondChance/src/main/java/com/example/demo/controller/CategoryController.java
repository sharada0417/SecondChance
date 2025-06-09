// src/main/java/com/example/demo/controller/CategoryController.java
package com.example.demo.controller;

import com.example.demo.dto.CategoryCreateRequest;
import com.example.demo.dto.CategoryDto;
import com.example.demo.dto.Response;
import com.example.demo.entity.Category;
import com.example.demo.exception.NotFoundException;
import com.example.demo.repository.CategoryRepo;
import com.example.demo.service.interf.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;
    private final CategoryRepo categoryRepo;  // Added to resolve subcategory IDs

    @PostMapping("/create")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Response> create(@RequestBody CategoryCreateRequest request) {
        return ResponseEntity.ok(categoryService.createCategory(request));
    }

    /**
     * Now accepts two path variables: parent categoryId and subid.
     * If subid is 0, update applies to the parent category; 
     * otherwise it applies to the subcategory under that parent.
     */
    @PutMapping("/update/{categoryId}/{subid}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Response> update(
            @PathVariable Long categoryId,
            @PathVariable Long subid,
            @RequestBody CategoryDto dto) {

        // If subid == 0, update the parent; else update the subcategory:
        Long targetId = (subid == null || subid == 0) ? categoryId : subid;
        return ResponseEntity.ok(categoryService.updateCategory(targetId, dto));
    }

    @GetMapping("/get-all")
    public ResponseEntity<Response> getAll() {
        return ResponseEntity.ok(categoryService.getAllCategories());
    }

    /**
     * Now accepts two path variables: parent categoryId and subid.
     * If subid is 0, it returns the parent with all its subcategories.
     * Otherwise it returns only that one subcategory wrapped under the parent.
     */
    @GetMapping("/get-category-by-id/{categoryId}/{subid}")
    public ResponseEntity<Response> getOne(
            @PathVariable Long categoryId,
            @PathVariable Long subid
    ) {
        return ResponseEntity.ok(categoryService.getCategoryById(categoryId, subid));
    }

    /**
     * Now accepts two path variables: parent categoryId and subid.
     * If subid is 0, delete removes the parent (and by cascade all its subcategories).
     * Otherwise it removes only that one subcategory under the parent.
     */
    @DeleteMapping("/delete/{categoryId}/{subid}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Response> delete(
            @PathVariable Long categoryId,
            @PathVariable Long subid) {

        Long targetId;
        if (subid == null || subid == 0) {
            // Delete the parent category directly
            targetId = categoryId;
        } else {
            // Find the parent and locate the child by 1-based index (subid)
            Category parent = categoryRepo.findById(categoryId)
                .orElseThrow(() -> new NotFoundException("Parent category not found"));

            List<Category> children = parent.getSubcategories();
            if (children == null || subid < 1 || subid > children.size()) {
                throw new NotFoundException("Subcategory does not belong to given parent");
            }
            // Map subid (1-based) to the actual child's ID
            targetId = children.get((int)(subid - 1)).getId();
        }

        return ResponseEntity.ok(categoryService.deleteCategory(targetId));
    }
}
