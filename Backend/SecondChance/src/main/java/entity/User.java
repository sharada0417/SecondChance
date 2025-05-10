package entity;

import java.util.List;

import org.joda.time.LocalDateTime;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name="users")
@AllArgsConstructor
@NoArgsConstructor
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	@Column(unique = true)
	@NotBlank(message = "Email is required!")
	private String email;
	
	@NotBlank(message = "Password is required")
	private String password;
	
	
	@Column(name = "phone_number")
	@NotBlank(message = "Phone number is required")
	private String phoneNumber;

	private UserRole role;
	
	@OneToMany(mappedBy = "user" , fetch=FetchType.LAZY, cascade=CascadeType.ALL)
	private List<OrderItem> orderItemList;
	
	@OneToMany(fetch=FetchType.LAZY, cascade = CascadeType.ALL)
	private Address address;
	
	@Column(name="created_at")
	private final LocalDateTime createAt = LocalDateTime.now();
	
	
}
