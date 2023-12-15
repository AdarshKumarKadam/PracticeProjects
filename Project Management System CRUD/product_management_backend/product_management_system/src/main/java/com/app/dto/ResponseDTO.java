package com.app.dto;

import java.time.LocalDateTime;

public class ResponseDTO {

	private LocalDateTime timeStamp;
	private String message;
	public ResponseDTO(String message) {
		super();
		this.message = message;
		this.timeStamp=LocalDateTime.now();
	}
	
}
