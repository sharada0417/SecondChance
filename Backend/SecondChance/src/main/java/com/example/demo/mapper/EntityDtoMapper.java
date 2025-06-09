// src/main/java/com/example/demo/mapper/EntityDtoMapper.java
package com.example.demo.mapper;

import org.springframework.stereotype.Component;
import com.example.demo.dto.AddressDto;
import com.example.demo.dto.CategoryDto;
import com.example.demo.dto.SubcategoryDto;
import com.example.demo.dto.OrderItemDto;
import com.example.demo.dto.ProductDto;
import com.example.demo.dto.UserDto;
import com.example.demo.entity.Address;
import com.example.demo.entity.Category;
import com.example.demo.entity.OrderItem;
import com.example.demo.entity.Product;
import com.example.demo.entity.User;

import java.util.stream.Collectors;

@Component
public class EntityDtoMapper {

    public UserDto mapUserToDtoBasic(User user) {
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setPhoneNumber(user.getPhoneNumber());
        userDto.setEmail(user.getEmail());
        userDto.setRole(user.getRole().name());
        userDto.setName(user.getName());
        return userDto;
    }

    public AddressDto mapAddressToDtoBasic(Address address) {
        AddressDto addressDto = new AddressDto();
        addressDto.setId(address.getId());
        addressDto.setCity(address.getCity());
        addressDto.setStreet(address.getStreet());
        addressDto.setState(address.getState());
        addressDto.setCountry(address.getCountry());
        addressDto.setZipCode(address.getZipCode());
        return addressDto;
    }

    public CategoryDto mapCategoryToDtoBasic(Category category) {
        CategoryDto categoryDto = new CategoryDto();
        categoryDto.setCategoryId(category.getId());
        categoryDto.setName(category.getName());
        return categoryDto;
    }

    public CategoryDto mapCategoryToDtoWithSubcategories(Category category) {
        CategoryDto categoryDto = mapCategoryToDtoBasic(category);
        if (category.getSubcategories() != null && !category.getSubcategories().isEmpty()) {
            categoryDto.setSubcategories(
                category.getSubcategories().stream()
                    .map(sub -> {
                        SubcategoryDto s = new SubcategoryDto();
                        s.setSubid(sub.getId());
                        s.setName(sub.getName());
                        return s;
                    })
                    .collect(Collectors.toList())
            );
        }
        return categoryDto;
    }

    public OrderItemDto mapOrderItemToDtoBasic(OrderItem orderItem) {
        OrderItemDto orderItemDto = new OrderItemDto();
        orderItemDto.setId(orderItem.getId());
        orderItemDto.setQuantity(orderItem.getQuantity());
        orderItemDto.setPrice(orderItem.getPrice());
        orderItemDto.setStatus(orderItem.getStatus().name());
        orderItemDto.setCreatedAt(orderItem.getCreatedAt());
        return orderItemDto;
    }

    public ProductDto mapProductToDtoBasic(Product product) {
        ProductDto productDto = new ProductDto();
        productDto.setId(product.getId());
        productDto.setName(product.getName());
        productDto.setDescription(product.getDescription());
        productDto.setPrice(product.getPrice());
        productDto.setImageUrl(product.getImageUrl());
        productDto.setRecycleDate(product.getRecycleDate()); // Added mapping
        return productDto;
    }

    public UserDto mapUserToDtoPlusAddress(User user) {
        System.out.println("mapUserToDtoPlusAddress is called");
        UserDto userDto = mapUserToDtoBasic(user);
        if (user.getAddress() != null) {
            AddressDto addressDto = mapAddressToDtoBasic(user.getAddress());
            userDto.setAddress(addressDto);
        }
        return userDto;
    }

    public OrderItemDto mapOrderItemToDtoPlusProduct(OrderItem orderItem) {
        OrderItemDto orderItemDto = mapOrderItemToDtoBasic(orderItem);
        if (orderItem.getProduct() != null) {
            ProductDto productDto = mapProductToDtoBasic(orderItem.getProduct());
            orderItemDto.setProduct(productDto);
        }
        return orderItemDto;
    }

    public OrderItemDto mapOrderItemToDtoPlusProductAndUser(OrderItem orderItem) {
        OrderItemDto orderItemDto = mapOrderItemToDtoPlusProduct(orderItem);
        if (orderItem.getUser() != null) {
            UserDto userDto = mapUserToDtoPlusAddress(orderItem.getUser());
            orderItemDto.setUser(userDto);
        }
        return orderItemDto;
    }

    public UserDto mapUserToDtoPlusAddressAndOrderHistory(User user) {
        UserDto userDto = mapUserToDtoPlusAddress(user);
        if (user.getOrderItemList() != null && !user.getOrderItemList().isEmpty()) {
            userDto.setOrderItemList(user.getOrderItemList()
                    .stream()
                    .map(this::mapOrderItemToDtoPlusProduct)
                    .collect(Collectors.toList()));
        }
        return userDto;
    }
}