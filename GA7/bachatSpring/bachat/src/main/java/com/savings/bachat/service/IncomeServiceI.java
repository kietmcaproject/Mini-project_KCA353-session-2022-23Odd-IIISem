package com.savings.bachat.service;

import java.util.List;

import com.savings.bachat.entity.Income;
import com.savings.bachat.request.DateRangeSearchCriteria;

public interface IncomeServiceI {
    Income income(Income data);

	List<Income> getIncomeBetweenDateRange(DateRangeSearchCriteria dateRange);
}
