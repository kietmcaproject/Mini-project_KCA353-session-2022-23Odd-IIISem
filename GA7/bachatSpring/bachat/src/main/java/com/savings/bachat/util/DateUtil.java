package com.savings.bachat.util;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Calendar;
import java.util.Date;

import org.joda.time.DateMidnight;

@SuppressWarnings("deprecation")
public class DateUtil {

	public static LocalDate getLocaleDate(Date date) {
		return date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
	}

	public static Date getStartOfMonth(Date date) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.set(Calendar.DAY_OF_MONTH, 1);
		return getTrueDate(calendar.getTime());
	}

	public static Date getEndOfMonth(Date date) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.set(Calendar.DAY_OF_MONTH, 1);
		calendar.set(Calendar.MONTH, 1);
		calendar.add(Calendar.DAY_OF_YEAR, -1);
		return getTrueDate(calendar.getTime());
	}

	public static Date getTrueDate(Date date) {
		DateMidnight midn = new DateMidnight(date);
		return midn.toDate();
	}

}
