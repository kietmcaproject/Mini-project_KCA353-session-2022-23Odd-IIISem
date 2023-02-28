package com.savings.bachat.entity;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import com.savings.bachat.enums.ExpenseCategory;

@Entity
@Table(name = "EXPENSE_DETAILS")
public class Expenses {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Enumerated(EnumType.STRING)
	@Column(name = "CATEGORY", nullable = false)
	private ExpenseCategory category;

	@Column(name = "AMOUNT", nullable = false, precision = 8, scale = 2)
	private BigDecimal amount;

	@Column(name = "EXPENSE_DATE", nullable = false)
	@Temporal(TemporalType.DATE)
	private Date expenseDate;

	@Column(name = "timestamp")
	@CreationTimestamp
	private Date timestamp;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public ExpenseCategory getCategory() {
		return category;
	}

	public void setCategory(ExpenseCategory category) {
		this.category = category;
	}

	public BigDecimal getAmount() {
		return amount;
	}	

	
	public Date getExpenseDate() {
		return expenseDate;
	}

	public void setExpenseDate(Date expenseDate) {
		this.expenseDate = expenseDate;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public Date getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}

}
