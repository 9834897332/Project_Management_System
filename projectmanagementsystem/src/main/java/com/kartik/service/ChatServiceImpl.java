package com.kartik.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kartik.model.Chat;
import com.kartik.repository.ChatRepository;

@Service
public class ChatServiceImpl implements ChatService {
     
	@Autowired
	private ChatRepository chatRepository;
	@Override
	public Chat createChat(Chat chat) {
		return chatRepository.save(chat);
	}

}
