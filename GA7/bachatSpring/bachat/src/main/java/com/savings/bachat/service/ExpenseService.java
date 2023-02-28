package com.savings.bachat.service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.Month;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Required;
import org.springframework.stereotype.Service;

import com.savings.bachat.entity.Expenses;
import com.savings.bachat.entity.Goal;
import com.savings.bachat.repository.ExpenseRepository;
import com.savings.bachat.request.DateRangeSearchCriteria;
import com.savings.bachat.util.DateUtil;

@Service
public class ExpenseService implements ExpenseServiceI {

	private ExpenseRepository expenseRepository;

	private GoalServiceI goalService;

	public ExpenseService(ExpenseRepository expenseRepository, GoalServiceI goalService) {
		this.expenseRepository = expenseRepository;
		this.goalService = goalService;
	}

	@Override
	public Expenses saveExpense(Expenses data) {
		BigDecimal currentMonthGoal = getCurrentMonthGoal(data.getExpenseDate());
		BigDecimal currentMonthExpense = getCurrentMonthExpense(data.getExpenseDate());
		BigDecimal totalExpense = currentMonthExpense.add(data.getAmount());
		if (currentMonthGoal.subtract(totalExpense).compareTo(BigDecimal.ZERO) < 0) {
			return null;
		}
		return expenseRepository.save(data);
	}

	@Override
	public List<Expenses> getExpensesBetweenDateRange(DateRangeSearchCriteria dateRange) {
		return expenseRepository.findAllByExpenseDateGreaterThanEqualAndExpenseDateLessThanEqual(
				dateRange.getFromDate(), dateRange.getToDate());
	}

	private BigDecimal getCurrentMonthExpense(Date date) {
		List<Expenses> expenses = expenseRepository.findAllByExpenseDateGreaterThanEqualAndExpenseDateLessThanEqual(
				DateUtil.getStartOfMonth(date), DateUtil.getEndOfMonth(date));
		if (expenses != null && !expenses.isEmpty()) {
			return expenses.stream().map(e -> e.getAmount()).reduce(BigDecimal.ZERO, BigDecimal::add);
		} else {
			return BigDecimal.ZERO;
		}
	}

	private BigDecimal getCurrentMonthGoal(Date date) {
		LocalDate currentDate = DateUtil.getLocaleDate(date);
		Month month = currentDate.getMonth();
		int year = currentDate.getYear();
		Goal goalByMonthandYear = goalService.getGoalByMonthandYear(month, String.valueOf(year));
		if (goalByMonthandYear != null) {
			return goalByMonthandYear.getTarget();
		} else {
			return BigDecimal.ZERO;
		}
	}

}
