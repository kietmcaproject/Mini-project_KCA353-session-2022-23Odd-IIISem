package com.savings.bachat.repository;

import java.time.Month;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.savings.bachat.entity.Goal;

@Repository
public interface GoalRepository extends JpaRepository<Goal, String> {

	Goal findByGoalMonthAndGoalYear(Month month, String year);

}
