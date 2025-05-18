package com.example.demo.dto;

import lombok.Data;

import java.util.List;

@Data
public class CategoryDto {
    private Long id;
    private String name;
    private Long parentId;
    private List<CategoryDto> subcategories;
}