package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.Order;

public interface OrderRepo extends JpaRepository<Order, Long>{

}
