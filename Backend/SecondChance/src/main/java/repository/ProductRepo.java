package repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.Product;

public interface ProductRepo extends JpaRepository<Product, Long>{
	List<Product> findCategoryId(Long categoryId);
	
	List<Product> findByNameContainingDrDesriptionContaining(String name, String description);
}
