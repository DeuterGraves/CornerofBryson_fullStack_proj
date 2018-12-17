package com.example.brysonservice.Repositories.UserRepository;

import com.example.brysonservice.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>, UserRepositoryCustom {
}
