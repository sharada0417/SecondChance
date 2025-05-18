package com.example.demo.service.impl;

import com.example.demo.dto.CategoryCreateRequest;
import com.example.demo.dto.CategoryDto;
import com.example.demo.dto.Response;
import com.example.demo.entity.Category;
import com.example.demo.exception.NotFoundException;
import com.example.demo.mapper.EntityDtoMapper;
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
    private final EntityDtoMapper mapper;

    @Override
    public Response createCategory(CategoryCreateRequest req) {
        String mainCategoryName = req.getCategory();
        String subCategoryName = req.getSubcategory();

        // Validate main category name
        if (mainCategoryName == null || mainCategoryName.trim().isEmpty()) {
            throw new IllegalArgumentException("Category name cannot be empty");
        }

        // Find or create the main category (top-level)
        Category mainCategory = categoryRepo.findByNameAndParentIsNull(mainCategoryName.trim())
            .orElseGet(() -> {
                Category newMain = new Category();
                newMain.setName(mainCategoryName.trim());
                newMain.setParent(null);
                return categoryRepo.save(newMain);
            });

        // Handle subcategory if provided
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
        if (req.getParentId() != null) {
            Category parent = categoryRepo.findById(req.getParentId())
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
        // Fetch all main categories (parent is null)
        List<Category> mains = categoryRepo.findAll().stream()
            .filter(c -> c.getParent() == null)
            .collect(Collectors.toList());
        
        // Map to DTOs with sequential IDs
        List<CategoryDto> dtos = new ArrayList<>();
        long mainIndex = 1; // Start main category IDs from 1
        
        for (Category main : mains) {
            CategoryDto mainDto = new CategoryDto();
            mainDto.setId(mainIndex); // Assign sequential ID to main category
            mainDto.setName(main.getName());
            mainDto.setParentId(null); // Main categories have no parent
            
            // Map subcategories with sequential IDs
            List<CategoryDto> subDtos = new ArrayList<>();
            long subIndex = 1; // Start subcategory IDs from 1 for each main category
            for (Category sub : main.getSubcategories()) {
                CategoryDto subDto = new CategoryDto();
                subDto.setId(subIndex); // Assign sequential ID to subcategory
                subDto.setName(sub.getName());
                subDto.setParentId(mainIndex); // Use the new sequential main category ID
                subDto.setSubcategories(null); // No further nesting needed
                subDtos.add(subDto);
                subIndex++;
            }
            mainDto.setSubcategories(subDtos);
            dtos.add(mainDto);
            mainIndex++;
        }
        
        return Response.builder()
                .status(200)
                .categoryList(dtos)
                .build();
    }

    @Override
    public Response getCategoryById(Long id) {
        Category cat = categoryRepo.findById(id)
            .orElseThrow(() -> new NotFoundException("Category not found"));
        CategoryDto dto = mapper.mapCategoryToDtoWithSubcategories(cat);
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