package service.interf;



import dto.LoginRequest;
import dto.Response;
import dto.UserDto;
import entity.User;



public interface UserService  {
	 Response registerUser(UserDto registrationRequest);
	    Response loginUser(LoginRequest loginRequest);
	    Response getAllUsers();
	    User getLoginUser();
	    Response getUserInfoAndOrderHistory();
}
