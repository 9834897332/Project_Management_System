package com.kartik.service;

import com.kartik.model.PlanType;
import com.kartik.model.Subscription;
import com.kartik.model.User;

public interface SubscriptionService {
 
	Subscription  createSubscription(User user);
	Subscription getUsersSubscription(Long userId) throws Exception;
	Subscription upgradeSubscription(Long userId, PlanType planType);
	
	boolean isValid(Subscription subscription);
}
