package com.savings.bachat.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.savings.bachat.entity.User;
import com.savings.bachat.service.UserServiceI;

@RestController
@RequestMapping("/user")
public class UserController {

	private UserServiceI userService;

	public UserController(UserServiceI userService) {
		this.userService = userService;
	}

	@PostMapping("/login")
	public ResponseEntity<User> login(@RequestBody User user) {
		User user1 = userService.login(user);
		if (user1 != null) {
			return ResponseEntity.ok().body(user1);
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(user1);
		}

	}

	@PostMapping("/signup")
	public ResponseEntity<User> signup(@RequestBody User user) {
		User user1 = userService.signup(user);
		return ResponseEntity.status(HttpStatus.CREATED).body(user1);

	}

}
