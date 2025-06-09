package com.example.demo.service.interf;



import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.Response;
import com.example.demo.dto.UserDto;
import com.example.demo.entity.User;



public interface UserService {
    Response registerUser(UserDto registrationRequest);
    Response loginUser(LoginRequest loginRequest);
    Response getAllUsers();
    User getLoginUser();
    Response getUserInfoAndOrderHistory();
}