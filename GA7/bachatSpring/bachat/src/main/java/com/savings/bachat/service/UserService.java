package com.savings.bachat.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.savings.bachat.entity.User;
import com.savings.bachat.repository.UserRepository;

@Service
public class UserService implements UserServiceI {

	private UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Override
	public User login(User user) {
		Optional<User> dbUser = userRepository.findById(user.getEmailId());
		if (dbUser.isPresent()) {
			if (dbUser.get().getPassword().compareTo(user.getPassword()) == 0) {
               return dbUser.get();
			}
		}
		return null;
	}

	@Override
	public User signup(User user) {
		return userRepository.save(user);
	}

}
