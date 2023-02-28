package com.savings.bachat.entity;

import java.math.BigDecimal;
import java.time.Month;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "GOALS")
public class Goal {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Enumerated(EnumType.STRING)
	@Column(name = "goalMonth", nullable = false)
	private Month goalMonth;
	
	@Column(name = "goalYear", nullable = false)
	private String goalYear;

	@Column(name = "target", nullable = false, precision = 8, scale = 2)
	private BigDecimal target;

	
	public Month getGoalMonth() {
		return goalMonth;
	}

	public void setGoalMonth(Month goalMonth) {
		this.goalMonth = goalMonth;
	}
	
	public String getGoalYear() {
		return goalYear;
	}

	public void setGoalYear(String goalYear) {
		this.goalYear = goalYear;
	}

	public BigDecimal getTarget() {
		return target;
	}

	public void setTarget(BigDecimal target) {
		this.target = target;
	}
}
