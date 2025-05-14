package com.example.demo.service.interf;

import com.example.demo.dto.CategoryDto;
import com.example.demo.dto.Response;

public interface CategoryService {
	Response createCategory(CategoryDto categoryRequest);
    Response updateCategory(Long categoryId, CategoryDto categoryRequest);
    Response getAllCategories();
    Response getCategoryById(Long categoryId);
    Response deleteCategory(Long categoryId);
}
