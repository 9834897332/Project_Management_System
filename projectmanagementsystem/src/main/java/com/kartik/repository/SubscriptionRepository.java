package com.kartik.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kartik.model.Subscription;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
 
	Subscription findByUserId(Long userId);
}
