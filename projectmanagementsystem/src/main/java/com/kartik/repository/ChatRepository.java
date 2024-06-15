package com.kartik.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kartik.model.Chat;

public interface ChatRepository extends JpaRepository<Chat, Long> {

}
