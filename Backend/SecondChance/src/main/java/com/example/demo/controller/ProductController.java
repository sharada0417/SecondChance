// src/main/java/com/example/demo/controller/ProductController.java
package com.example.demo.controller;

import com.example.demo.dto.Response;
import com.example.demo.exception.InvalidCredentialsException;
import com.example.demo.service.interf.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @PostMapping("/create")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Response> createProduct(
    	    @RequestParam Long categoryId,
    	    @RequestParam Long subid,
    	    @RequestParam MultipartFile image,
    	    @RequestParam String name,
    	    @RequestParam String description,
    	    @RequestParam BigDecimal price,
    	    @RequestParam String recycledate
    	) {
        if (categoryId == null || subid == null ||
            image.isEmpty() || name.isEmpty() || description.isEmpty() || price == null || recycledate.isEmpty()) {
            throw new InvalidCredentialsException("All fields are required");
        }
        // Parse the recycledate string (expected format: "yyyy-MM-dd")
        LocalDate recycleDate = LocalDate.parse(recycledate, DateTimeFormatter.ISO_LOCAL_DATE);
        return ResponseEntity.ok(
                productService.createProduct(categoryId, subid, image, name, description, price, recycleDate)
        );
    }

    @PutMapping("/update/{productId}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Response> updateProduct(
            @PathVariable Long productId,
            @RequestParam(required = false) Long categoryId,
            @RequestParam(required = false) Long subid,
            @RequestParam(required = false) MultipartFile image,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String description,
            @RequestParam(required = false) BigDecimal price
    ) {
        return ResponseEntity.ok(
                productService.updateProduct(productId, categoryId, subid, image, name, description, price)
        );
    }

    @DeleteMapping("/delete/{productId}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Response> deleteProduct(@PathVariable Long productId) {
        return ResponseEntity.ok(productService.deleteProduct(productId));
    }

    @GetMapping("/get-by-product-id/{productId}")
    public ResponseEntity<Response> getProductById(@PathVariable Long productId) {
        return ResponseEntity.ok(productService.getProductById(productId));
    }

    @GetMapping("/get-all")
    public ResponseEntity<Response> getAllProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }

    @GetMapping("/get-by-category-id/{categoryId}/{subid}")
    public ResponseEntity<Response> getProductsBySubcategory(
            @PathVariable Long categoryId,
            @PathVariable Long subid
    ) {
        return ResponseEntity.ok(productService.getProductsBySubcategory(categoryId, subid));
    }

    @GetMapping("/search")
    public ResponseEntity<Response> searchForProduct(@RequestParam String searchValue) {
        return ResponseEntity.ok(productService.searchProduct(searchValue));
    }
}