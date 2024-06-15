package com.kartik.service;

import com.kartik.model.User;

public interface UserService {
 
	User findUserProfileByJwt(String jwt)throws Exception;
	
	User findUserByEmail(String email)throws Exception;
	
	User findUserById(Long userId)throws Exception;
	
	User updateUserProjectSize(User user, int number);
}
