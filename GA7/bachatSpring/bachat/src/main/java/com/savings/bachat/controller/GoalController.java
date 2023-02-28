package com.savings.bachat.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.savings.bachat.entity.Goal;
import com.savings.bachat.service.GoalServiceI;

@RestController
@RequestMapping("/setGoals")
public class GoalController {
	private GoalServiceI setGoalServiceI;

	public GoalController(GoalServiceI setGoalServiceI) {
		this.setGoalServiceI = setGoalServiceI;
	}

	@PostMapping("/")
	public ResponseEntity<Goal> setGoal(@RequestBody Goal data) {
		Goal setGoal1 = setGoalServiceI.saveGoal(data);
		return ResponseEntity.status(HttpStatus.CREATED).body(setGoal1);
	}

}
