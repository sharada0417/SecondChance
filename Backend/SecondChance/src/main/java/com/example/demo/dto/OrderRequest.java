package com.example.demo.dto;

import java.math.BigDecimal;
import java.util.List;

import com.example.demo.entity.payment;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class OrderRequest {

    private BigDecimal totalPrice;
    private List<OrderItemRequest> items;
    private payment paymentInfo;
}