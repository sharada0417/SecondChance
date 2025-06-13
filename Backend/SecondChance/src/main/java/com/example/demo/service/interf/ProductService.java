// src/main/java/com/example/demo/service/interf/ProductService.java
package com.example.demo.service.interf;

import com.example.demo.dto.Response;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.time.LocalDate;

public interface ProductService {
    Response createProduct(
            Long categoryId,
            Long subid,
            MultipartFile image,
            String name,
            String description,
            BigDecimal price,
            LocalDate recycleDate
    );

    Response updateProduct(
            Long productId,
            Long categoryId,
            Long subid,
            MultipartFile image,
            String name,
            String description,
            BigDecimal price
    );

    Response deleteProduct(Long productId);

    Response getProductById(Long productId);

    Response getAllProducts();

    Response getProductsByCategory(Long categoryId);

    Response getProductsBySubcategory(Long categoryId, Long subid);

    Response searchProduct(String searchValue);
}
