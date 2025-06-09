// src/main/java/com/example/demo/dto/CategoryCreateRequest.java
package com.example.demo.dto;

import lombok.Data;

@Data
public class CategoryCreateRequest {
    private String category;
    private String subcategory;
}
