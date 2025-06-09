// src/main/java/com/example/demo/service/impl/CategoryServiceImpl.java
package com.example.demo.service.impl;

import com.example.demo.dto.CategoryCreateRequest;
import com.example.demo.dto.CategoryDto;
import com.example.demo.dto.Response;
import com.example.demo.dto.SubcategoryDto;
import com.example.demo.entity.Category;
import com.example.demo.exception.NotFoundException;
import com.example.demo.repository.CategoryRepo;
import com.example.demo.service.interf.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepo categoryRepo;

    @Override
    public Response createCategory(CategoryCreateRequest req) {
        String mainCategoryName = req.getCategory();
        String subCategoryName = req.getSubcategory();

        if (mainCategoryName == null || mainCategoryName.trim().isEmpty()) {
            throw new IllegalArgumentException("Category name cannot be empty");
        }

        Category mainCategory = categoryRepo.findByNameAndParentIsNull(mainCategoryName.trim())
            .orElseGet(() -> {
                Category newMain = new Category();
                newMain.setName(mainCategoryName.trim());
                newMain.setParent(null);
                return categoryRepo.save(newMain);
            });

        if (subCategoryName != null && !subCategoryName.trim().isEmpty()) {
            if (categoryRepo.existsByName(subCategoryName.trim())) {
                throw new IllegalArgumentException("Subcategory name already exists");
            }
            Category subCategory = new Category();
            subCategory.setName(subCategoryName.trim());
            subCategory.setParent(mainCategory);
            categoryRepo.save(subCategory);
        }

        return Response.builder()
                .status(200)
                .message("Category created successfully")
                .build();
    }

    @Override
    public Response updateCategory(Long id, CategoryDto req) {
        Category cat = categoryRepo.findById(id)
            .orElseThrow(() -> new NotFoundException("Category not found"));
        cat.setName(req.getName());

        if (req.getCategoryId() != null) {
            Category parent = categoryRepo.findById(req.getCategoryId())
                .orElseThrow(() -> new NotFoundException("Parent category not found"));
            cat.setParent(parent);
        } else {
            cat.setParent(null);
        }
        categoryRepo.save(cat);

        return Response.builder()
                .status(200)
                .message("Category updated successfully")
                .build();
    }

    @Override
    public Response getAllCategories() {
        List<Category> mains = categoryRepo.findAll()
            .stream()
            .filter(c -> c.getParent() == null)
            .collect(Collectors.toList());

        List<CategoryDto> dtos = new ArrayList<>();

        for (Category main : mains) {
            CategoryDto mainDto = new CategoryDto();
            mainDto.setCategoryId(main.getId()); // Use actual database ID
            mainDto.setName(main.getName());

            List<SubcategoryDto> subDtos = new ArrayList<>();
            if (main.getSubcategories() != null) {
                int subIndex = 1; // Keep subid as 1-based index
                for (Category sub : main.getSubcategories()) {
                    SubcategoryDto s = new SubcategoryDto();
                    s.setSubid((long) subIndex);
                    s.setName(sub.getName());
                    subDtos.add(s);
                    subIndex++;
                }
            }

            mainDto.setSubcategories(subDtos);
            dtos.add(mainDto);
        }

        return Response.builder()
            .status(200)
            .categoryList(dtos)
            .build();
    }

    @Override
    public Response getCategoryById(Long parentId, Long subid) {
        Category parent = categoryRepo.findById(parentId)
            .orElseThrow(() -> new NotFoundException("Parent category not found"));

        if (subid == null || subid == 0) {
            CategoryDto dto = new CategoryDto();
            dto.setCategoryId(parent.getId());
            dto.setName(parent.getName());
            List<SubcategoryDto> subDtos = parent.getSubcategories()
                .stream()
                .map(sub -> {
                    SubcategoryDto s = new SubcategoryDto();
                    long index = parent.getSubcategories().indexOf(sub) + 1;
                    s.setSubid(index);
                    s.setName(sub.getName());
                    return s;
                })
                .collect(Collectors.toList());
            dto.setSubcategories(subDtos);

            return Response.builder()
                    .status(200)
                    .category(dto)
                    .build();
        }

        List<Category> children = parent.getSubcategories();
        if (children == null || subid < 1 || subid > children.size()) {
            throw new NotFoundException("Subcategory does not belong to given parent");
        }
        Category child = children.get((int)(subid - 1));

        SubcategoryDto subDto = new SubcategoryDto();
        subDto.setSubid(subid);
        subDto.setName(child.getName());

        CategoryDto dto = new CategoryDto();
        dto.setCategoryId(parent.getId());
        dto.setName(parent.getName());
        dto.setSubcategories(List.of(subDto));

        return Response.builder()
            .status(200)
            .category(dto)
            .build();
    }

    @Override
    public Response deleteCategory(Long id) {
        Category cat = categoryRepo.findById(id)
            .orElseThrow(() -> new NotFoundException("Category not found"));
        categoryRepo.delete(cat);
        return Response.builder()
            .status(200)
            .message("Category deleted successfully")
            .build();
    }
}