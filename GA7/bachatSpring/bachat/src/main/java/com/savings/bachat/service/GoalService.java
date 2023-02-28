package com.savings.bachat.service;

import java.time.Month;

import org.springframework.stereotype.Service;

import com.savings.bachat.entity.Goal;
import com.savings.bachat.repository.GoalRepository;

@Service
public class GoalService implements GoalServiceI {
	private GoalRepository goalRepository;

	@Override
	public Goal saveGoal(Goal goal) {
		return goalRepository.save(goal);
	}


	public GoalService(GoalRepository goalRepository) {
		this.goalRepository = goalRepository;
	}


	@Override
	public Goal getGoalByMonthandYear(Month month, String year) {
		return goalRepository.findByGoalMonthAndGoalYear(month, year);
	}

}
