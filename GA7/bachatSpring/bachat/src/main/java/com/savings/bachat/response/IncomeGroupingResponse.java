package com.savings.bachat.response;

import java.math.BigDecimal;

import com.savings.bachat.enums.IncomeSource;

public class IncomeGroupingResponse {
   private IncomeSource sourceIncome;
   
   private BigDecimal groupedSum;
   
   private BigDecimal totalSum;

public IncomeSource getSourceIncome() {
	return sourceIncome;
}

public void setSourceIncome(IncomeSource sourceIncome) {
	this.sourceIncome = sourceIncome;
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
