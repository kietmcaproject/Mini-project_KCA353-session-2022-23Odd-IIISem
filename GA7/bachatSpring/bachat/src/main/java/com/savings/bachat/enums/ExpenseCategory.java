package com.savings.bachat.enums;

public enum ExpenseCategory {

	CLOTHES("Clothes"), FOOD("Food"), FUEL("Fuel"), SHOPPING("Shopping"), TRAVEL("Travel"),MEDICINE("medicine"),SCHOOLFEES("fees"),OTHERS("Others");

	private String category;

	private ExpenseCategory(String category) {
			this.category = category;
		}

	public String getCategory() {
		return this.category;
	}

}
