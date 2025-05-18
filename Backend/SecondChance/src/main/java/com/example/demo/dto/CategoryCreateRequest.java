package com.example.demo.dto;

import lombok.Data;

@Data
public class CategoryCreateRequest {
    private String category;
    private String subcategory;
}