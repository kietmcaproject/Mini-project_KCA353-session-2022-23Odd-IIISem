package com.savings.bachat.service;

import com.savings.bachat.entity.User;

public interface UserServiceI {
	
	User login(User user);
	
	User signup(User user);

}
