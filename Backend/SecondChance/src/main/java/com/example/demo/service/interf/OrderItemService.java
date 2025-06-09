package com.example.demo.service.interf;

import java.time.LocalDateTime;

import org.springframework.data.domain.Pageable;

import com.example.demo.dto.OrderRequest;
import com.example.demo.dto.Response;
import com.example.demo.enums.OrderStatus;

public interface OrderItemService {
    Response placeOrder(OrderRequest orderRequest);
    Response updateOrderItemStatus(Long orderItemId, String status);
    Response filterOrderItems(OrderStatus status, LocalDateTime startDate, LocalDateTime endDate, Long itemId, Pageable pageable);
}
