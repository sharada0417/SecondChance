package com.example.demo.entity;

   import lombok.Data;
   import lombok.NoArgsConstructor;
   import lombok.AllArgsConstructor;
   import lombok.Builder;
   import jakarta.persistence.*;
   import java.math.BigDecimal;
   import java.util.List;

   @Entity
   @Table(name = "orders")
   @Data
   @NoArgsConstructor
   @AllArgsConstructor
   @Builder
   public class Order {

       @Id
       @GeneratedValue(strategy = GenerationType.IDENTITY)
       private Long id;

       @ManyToOne(fetch = FetchType.LAZY)
       @JoinColumn(name = "user_id", nullable = false)
       private User user;

       private BigDecimal totalPrice;

       @OneToMany(mappedBy = "order", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
       private List<OrderItem> orderItemList;
   }