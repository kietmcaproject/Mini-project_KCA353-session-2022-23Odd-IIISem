package com.savings.bachat.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.savings.bachat.entity.Income;
import com.savings.bachat.repository.IncomeRepository;
import com.savings.bachat.request.DateRangeSearchCriteria;


@Service
public class IncomeService implements IncomeServiceI{
	private IncomeRepository incomeRepository;
	public IncomeService(IncomeRepository incomeRepository) {
		this.incomeRepository=incomeRepository;
	}

	@Override
	public Income income(Income data) {
		// TODO Auto-generated method stub
		return incomeRepository.save(data);
	}

	@Override
	public List<Income> getIncomeBetweenDateRange(DateRangeSearchCriteria dateRange) {
		// TODO Auto-generated method stub
		return incomeRepository.findAllByIncomeDateGreaterThanEqualAndIncomeDateLessThanEqual(dateRange.getFromDate(),dateRange.getToDate());
	}

    



	

}
