package com.example.demo.entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Table(name="payments")
public class payment {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    private BigDecimal amount;
	    private String method;
	    private String status;
	    @OneToOne(fetch = FetchType.LAZY)
	    @JoinColumn(name = "order_id")
	    private  Order order;
	    @Column(name = "created_at")
	    private final LocalDateTime createdAt = LocalDateTime.now();
}
