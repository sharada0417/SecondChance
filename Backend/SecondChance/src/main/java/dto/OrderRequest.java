package dto;

import java.math.BigDecimal;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import entity.payment;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class OrderRequest {
	private BigDecimal totalPrice;
	private List<OrderItemRequest> items;
	private payment paymentInfo;
}
