package security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import entity.User;
import exception.NotFoundException;
import lombok.RequiredArgsConstructor;
import repository.UserRepo;

@Service
@RequiredArgsConstructor
public class CustomerUserDetailsService implements UserDetailsService{
	 private final UserRepo userRepo;
	    @Override
	    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

	        User user = userRepo.findByEmail(username)
	                .orElseThrow(()-> new NotFoundException("User/ Email Not found"));

	        return AuthUser.builder()
	                .user(user)
	                .build();
	    }
}
