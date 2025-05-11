package service.interf;

import java.awt.print.Pageable;
import java.time.LocalDateTime;

import dto.OrderRequest;
import dto.Response;
import enums.OrderStatus;

public interface OrderItemService {
	 Response placeOrder(OrderRequest orderRequest);
	    Response updateOrderItemStatus(Long orderItemId, String status);
	    Response filterOrderItems(OrderStatus status, LocalDateTime startDate, LocalDateTime endDate, Long itemId, Pageable pageable);
}
