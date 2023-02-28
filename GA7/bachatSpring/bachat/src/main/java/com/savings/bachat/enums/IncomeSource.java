package com.savings.bachat.enums;

public enum IncomeSource {

	SALARY("Salary"), INTEREST("Interest"), RENTAL("Rental"), STOCK("Dividend/Capital Gains"), BUSINESS("Business"),
	OTHERS("Others");

	private String source;

	private IncomeSource(String source) {
		this.source = source;
	}

	public String getSource() {
		return this.source;
	}

}
