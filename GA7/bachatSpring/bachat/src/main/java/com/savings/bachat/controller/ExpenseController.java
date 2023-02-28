package com.savings.bachat.controller;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.savings.bachat.entity.Expenses;
import com.savings.bachat.enums.ExpenseCategory;
import com.savings.bachat.request.DateRangeSearchCriteria;
import com.savings.bachat.response.ExpenseGroupingResponse;
import com.savings.bachat.service.ExpenseServiceI;

@RestController
@RequestMapping("/expense")
public class ExpenseController {

	private ExpenseServiceI expenseService;

	public ExpenseController(ExpenseServiceI expenseService) {
		this.expenseService = expenseService;
	}

	@PostMapping("/")
	public ResponseEntity<Expenses> expense(@RequestBody Expenses data) {
		Expenses expense1 = expenseService.saveExpense(data);
		if(expense1 == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(expense1);
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(expense1);
	}

	@PostMapping("/list")
	public ResponseEntity<List<Expenses>> expense(@RequestBody DateRangeSearchCriteria dateRange) {
		List<Expenses> listOfExpenses = expenseService.getExpensesBetweenDateRange(dateRange);
		return ResponseEntity.status(HttpStatus.OK).body(listOfExpenses);
	}

	@PostMapping("/groupByCategory")
	public ResponseEntity<List<ExpenseGroupingResponse>> groupedExpensesByCategory(
			@RequestBody DateRangeSearchCriteria dateRange) {
		List<ExpenseGroupingResponse> groupedList = new ArrayList<>();
		List<Expenses> listOfExpenses = expenseService.getExpensesBetweenDateRange(dateRange);
		Map<ExpenseCategory, List<Expenses>> expensePerType = listOfExpenses.stream()
				.collect(Collectors.groupingBy(Expenses::getCategory));
		for (Map.Entry<ExpenseCategory, List<Expenses>> entry : expensePerType.entrySet()) {
			ExpenseGroupingResponse expenseResponse = new ExpenseGroupingResponse();
			expenseResponse.setCategory(entry.getKey());
			expenseResponse.setGroupedSum(
					entry.getValue().stream().map(e -> e.getAmount()).reduce(BigDecimal.ZERO, (a, b) -> a.add(b)));
			groupedList.add(expenseResponse);
		}
		if (!groupedList.isEmpty()) {
			groupedList.get(groupedList.size() - 1).setTotalSum(
					listOfExpenses.stream().map(e -> e.getAmount()).reduce(BigDecimal.ZERO, (a, b) -> a.add(b)));
		}
		return ResponseEntity.status(HttpStatus.OK).body(groupedList);
	}

}
