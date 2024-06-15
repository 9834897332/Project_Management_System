package com.kartik.request;

import java.time.LocalDate;

import lombok.Data;

@Data
public class IssueRequest {

	
    private String title;
	
	private String descrption;
	
	private String status;
	
	private Long projectId;
	
	private String priority;
	
	private LocalDate dueDate;
}
