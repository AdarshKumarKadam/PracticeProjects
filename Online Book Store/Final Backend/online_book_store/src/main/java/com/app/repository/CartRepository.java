package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.Cart;

public interface CartRepository extends JpaRepository<Cart, Long> {
	 @Query("SELECT c FROM Cart c WHERE c.user.id = :userId")
	    Optional<Cart> findByUserId(@Param("userId") Long userId);

  }
