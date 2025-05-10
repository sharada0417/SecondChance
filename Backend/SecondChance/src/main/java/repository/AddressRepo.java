package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.Address;

public interface AddressRepo extends JpaRepository<Address, Long> {

}
