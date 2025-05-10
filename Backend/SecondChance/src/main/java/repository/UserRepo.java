package repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.User;

public interface UserRepo extends JpaRepository<User, Long>{
	Optional <User> findByEmail(String email);
}
