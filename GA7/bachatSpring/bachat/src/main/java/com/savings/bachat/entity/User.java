package com.savings.bachat.entity;

//import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
//import javax.validation.constraints.Email;
//import javax.validation.constraints.NotBlank;
//import javax.validation.constraints.Pattern;
//import javax.validation.constraints.Size;

@Entity
@Table(name = "USER_ACCOUNT")
public class User {

	@Id
	@Column(name = "EMAIL_ID" , nullable=false)
	//@NotBlank(message = "Email is required")
	//@Email(message = "Email should be valid")
	private String emailId;

	@Column(name = "FIRST_NAME" , nullable=false)
	//@NotBlank(message = "First_Name is required")
	//@Pattern(regexp = "[A-Za-z]", message = "Should contain only alphabets")
	private String firstName;

	@Column(name = "LAST_NAME" , nullable=false)
	//@NotBlank(message = "Last_Name is required")
	//@Pattern(regexp = "[A-Za-z]", message = "Should contain only alphabets")
	private String lastName;

	@Column(name = "PHONE_NUM" , nullable=false)
	//@NotBlank(message = "Phone_num is required")
	//@Size(min = 10, max = 10, message = "Phone Number should be of 10 Digits")
	//@Pattern(regexp = "[^0-9]", message = "Should contain only numbers")
	private String mobileNum;

	@Column(name = "PASSWORD" , nullable=false)
	//@NotBlank(message = "Password is required")
	//@Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*)(?=.*[@$!%*?&])[A-Za-z@$!%*?&]{8,10}$", message = "Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character")
	private String password;

	@Transient
	//@NotBlank(message = "Confirm your password")
	//@Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*)(?=.*[@$!%*?&])[A-Za-z@$!%*?&]{8,10}$", message = "Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character")
	private String confirmPassword;

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getMobileNum() {
		return mobileNum;
	}

	public void setMobileNum(String mobileNum) {
		this.mobileNum = mobileNum;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

//	@Override
//	public int hashCode() {
//		return Objects.hash(emailId);
//	}

//	@Override
//	public boolean equals(Object obj) {
//		if (this == obj)
//			return true;
//		if (obj == null)
//			return false;
//		if (getClass() != obj.getClass())
//			return false;
//		User other = (User) obj;
//		return Objects.equals(emailId, other.emailId);
//	}

}
