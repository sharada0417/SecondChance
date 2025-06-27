package com.example.demo.service.interf;

import com.example.demo.dto.CategoryCreateRequest;
import com.example.demo.dto.CategoryDto;
import com.example.demo.dto.Response;

public interface CategoryService {
    Response createCategory(CategoryCreateRequest categoryRequest);
    Response updateCategory(Long categoryId, CategoryDto categoryRequest);
    Response getAllCategories();
    Response getCategoryById(Long parentId, Long subid);
    Response deleteCategory(Long categoryId);
}
