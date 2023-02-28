package com.savings.bachat.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.savings.bachat.entity.Expenses;

@Repository
public interface ExpenseRepository extends JpaRepository<Expenses, String> {

	List<Expenses> findAllByExpenseDateGreaterThanEqualAndExpenseDateLessThanEqual(Date fromDate, Date toDate);
    

}
