package com.savings.bachat.response;

import java.math.BigDecimal;

import com.savings.bachat.enums.ExpenseCategory;

public class ExpenseGroupingResponse {
	
	private ExpenseCategory category;
	
	private BigDecimal groupedSum;
	
	private BigDecimal totalSum;

	public ExpenseCategory getCategory() {
		return category;
	}

	public void setCategory(ExpenseCategory category) {
		this.category = category;
	}

	public BigDecimal getGroupedSum() {
		return groupedSum;
	}

	public void setGroupedSum(BigDecimal groupedSum) {
		this.groupedSum = groupedSum;
	}

	public BigDecimal getTotalSum() {
		return totalSum;
	}

	public void setTotalSum(BigDecimal totalSum) {
		this.totalSum = totalSum;
	}
	
}
