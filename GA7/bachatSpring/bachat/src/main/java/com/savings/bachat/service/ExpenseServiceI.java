package com.savings.bachat.service;

import java.util.List;

import com.savings.bachat.entity.Expenses;
import com.savings.bachat.request.DateRangeSearchCriteria;

public interface ExpenseServiceI {

	Expenses saveExpense(Expenses data);

	List<Expenses> getExpensesBetweenDateRange(DateRangeSearchCriteria dateRange);

}