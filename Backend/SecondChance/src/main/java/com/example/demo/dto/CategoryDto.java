// src/main/java/com/example/demo/dto/CategoryDto.java
package com.example.demo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class CategoryDto {
    @JsonProperty("categoryId")
    private Long categoryId;

    private String name;

    private List<SubcategoryDto> subcategories;
}
