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

import com.savings.bachat.entity.Income;
import com.savings.bachat.enums.IncomeSource;
import com.savings.bachat.request.DateRangeSearchCriteria;
import com.savings.bachat.response.IncomeGroupingResponse;
import com.savings.bachat.service.IncomeServiceI;

@RestController
@RequestMapping("/income")
public class IncomeController {
	private IncomeServiceI incomeService;

	public IncomeController(IncomeServiceI incomeService) {
		this.incomeService = incomeService;
	}

	@PostMapping("/")
	public ResponseEntity<Income> income(@RequestBody Income data) {
		Income income1 = incomeService.income(data);
		return ResponseEntity.status(HttpStatus.CREATED).body(income1);
	}

	@PostMapping("/listIncome")
	public ResponseEntity<List<Income>> income(@RequestBody DateRangeSearchCriteria dateRange) {
		List<Income> listOfIncome = incomeService.getIncomeBetweenDateRange(dateRange);
		return ResponseEntity.status(HttpStatus.OK).body(listOfIncome);
	}

	@PostMapping("/groupBySourceIncome")
	public ResponseEntity<List<IncomeGroupingResponse>> groupedIncomeBySourceIncome(
			@RequestBody DateRangeSearchCriteria dataRange) {
		List<IncomeGroupingResponse> groupedList = new ArrayList<>();
		List<Income> listOfIncome = incomeService.getIncomeBetweenDateRange(dataRange);
		Map<IncomeSource, List<Income>> incomePerType = listOfIncome.stream()
				.collect(Collectors.groupingBy(Income::getSourceIncome));
		for (Map.Entry<IncomeSource, List<Income>> entry : incomePerType.entrySet()) {
			IncomeGroupingResponse incomeResponse = new IncomeGroupingResponse();
			incomeResponse.setSourceIncome(entry.getKey());
			incomeResponse.setGroupedSum(
					entry.getValue().stream().map(e -> e.getIncome()).reduce(BigDecimal.ZERO, (a, b) -> a.add(b)));
			groupedList.add(incomeResponse);
		}
		if (!groupedList.isEmpty()) {
			groupedList.get(groupedList.size() - 1).setTotalSum(
					listOfIncome.stream().map(e -> e.getIncome()).reduce(BigDecimal.ZERO, (a, b) -> a.add(b)));
		}
		return ResponseEntity.status(HttpStatus.OK).body(groupedList);

	}

}
