package repository;



import org.springframework.data.jpa.repository.JpaRepository;

import entity.Category;

public interface CategoryRepo extends JpaRepository<Category, Long> {
}
