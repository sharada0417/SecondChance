// src/main/java/com/example/demo/service/impl/ProductServiceImpl.java
package com.example.demo.service.impl;

import com.example.demo.dto.ProductDto;
import com.example.demo.dto.Response;
import com.example.demo.entity.Category;
import com.example.demo.entity.Product;
import com.example.demo.exception.NotFoundException;
import com.example.demo.mapper.EntityDtoMapper;
import com.example.demo.repository.CategoryRepo;
import com.example.demo.repository.ProductRepo;
import com.example.demo.service.AwsS3Service;
import com.example.demo.service.interf.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepo productRepo;
    private final CategoryRepo categoryRepo;
    private final EntityDtoMapper entityDtoMapper;
    private final AwsS3Service awsS3Service;

    @Override
    public Response createProduct(
            Long categoryId,
            Long subid,
            MultipartFile image,
            String name,
            String description,
            BigDecimal price,
            LocalDate recycleDate
    ) {
        Category parent = categoryRepo.findById(categoryId)
                .orElseThrow(() -> new NotFoundException("Parent category not found"));

        List<Category> children = parent.getSubcategories();
        if (children == null || subid < 1 || subid > children.size()) {
            throw new NotFoundException("Subcategory does not belong to given parent");
        }
        Category child = children.get(subid.intValue() - 1);

        String productImageUrl = awsS3Service.saveImageToS3(image);

        Product product = new Product();
        product.setCategory(child);
        product.setPrice(price);
        product.setName(name);
        product.setDescription(description);
        product.setImageUrl(productImageUrl);
        product.setRecycleDate(recycleDate);

        productRepo.save(product);

        return Response.builder()
                .status(200)
                .message("Product successfully created")
                .build();
    }

    @Override
    public Response updateProduct(
            Long productId,
            Long categoryId,
            Long subid,
            MultipartFile image,
            String name,
            String description,
            BigDecimal price
    ) {
        Product product = productRepo.findById(productId)
                .orElseThrow(() -> new NotFoundException("Product not found"));

        if (categoryId != null && subid != null) {
            Category parent = categoryRepo.findById(categoryId)
                    .orElseThrow(() -> new NotFoundException("Parent category not found"));
            List<Category> children = parent.getSubcategories();
            if (children == null || subid < 1 || subid > children.size()) {
                throw new NotFoundException("Subcategory does not belong to given parent");
            }
            product.setCategory(children.get(subid.intValue() - 1));
        }

        if (image != null && !image.isEmpty()) {
            product.setImageUrl(awsS3Service.saveImageToS3(image));
        }
        if (name != null) {
            product.setName(name);
        }
        if (price != null) {
            product.setPrice(price);
        }
        if (description != null) {
            product.setDescription(description);
        }

        productRepo.save(product);

        return Response.builder()
                .status(200)
                .message("Product updated successfully")
                .build();
    }

    @Override
    public Response deleteProduct(Long productId) {
        Product product = productRepo.findById(productId)
                .orElseThrow(() -> new NotFoundException("Product not found"));
        productRepo.delete(product);
        return Response.builder()
                .status(200)
                .message("Product deleted successfully")
                .build();
    }

    @Override
    public Response getProductById(Long productId) {
        Product product = productRepo.findById(productId)
                .orElseThrow(() -> new NotFoundException("Product not found"));
        ProductDto productDto = entityDtoMapper.mapProductToDtoBasic(product);
        return Response.builder()
                .status(200)
                .product(productDto)
                .build();
    }

    @Override
    public Response getAllProducts() {
        List<ProductDto> productList = productRepo.findAll(Sort.by(Sort.Direction.DESC, "id"))
                .stream()
                .map(entityDtoMapper::mapProductToDtoBasic)
                .collect(Collectors.toList());
        return Response.builder()
                .status(200)
                .productList(productList)
                .build();
    }

    @Override
    public Response getProductsByCategory(Long categoryId) {
        List<Product> products = productRepo.findByCategoryId(categoryId);
        if (products.isEmpty()) {
            throw new NotFoundException("No products found for this category");
        }
        List<ProductDto> productDtoList = products.stream()
                .map(entityDtoMapper::mapProductToDtoBasic)
                .collect(Collectors.toList());
        return Response.builder()
                .status(200)
                .productList(productDtoList)
                .build();
    }

    @Override
    public Response getProductsBySubcategory(Long categoryId, Long subid) {
        Category parent = categoryRepo.findById(categoryId)
                .orElseThrow(() -> new NotFoundException("Parent category not found"));
        List<Category> children = parent.getSubcategories();
        if (children == null || subid < 1 || subid > children.size()) {
            throw new NotFoundException("Subcategory does not belong to given parent");
        }
        List<Product> products = productRepo.findByCategoryId(children.get(subid.intValue() - 1).getId());
        if (products.isEmpty()) {
            throw new NotFoundException("No products found in this subcategory");
        }
        List<ProductDto> productDtoList = products.stream()
                .map(entityDtoMapper::mapProductToDtoBasic)
                .collect(Collectors.toList());
        return Response.builder()
            .status(200)
            .productList(productDtoList)
            .build();
    }

    @Override
    public Response searchProduct(String searchValue) {
        List<Product> products = productRepo.findByNameContainingOrDescriptionContaining(searchValue, searchValue);
        if (products.isEmpty()) {
            throw new NotFoundException("No products found");
        }
        List<ProductDto> productDtoList = products.stream()
                .map(entityDtoMapper::mapProductToDtoBasic)
                .collect(Collectors.toList());
        return Response.builder()
                .status(200)
                .productList(productDtoList)
                .build();
    }
}
