package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import entity.OrderItem;

public interface OrderItemRepo extends JpaRepository<OrderItem, Long> , JpaSpecificationExecutor<OrderItem>{

}
