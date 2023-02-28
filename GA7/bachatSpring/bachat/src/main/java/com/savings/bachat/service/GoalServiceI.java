package com.savings.bachat.service;

import java.time.Month;

import com.savings.bachat.entity.Goal;

public interface GoalServiceI {
	
	Goal saveGoal(Goal goal);

	Goal getGoalByMonthandYear(Month string, String year);
}
