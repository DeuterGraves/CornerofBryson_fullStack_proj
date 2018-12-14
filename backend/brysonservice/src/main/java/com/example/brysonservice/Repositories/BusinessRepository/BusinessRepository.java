package com.example.brysonservice.Repositories.BusinessRepository;

import com.example.brysonservice.Models.Business;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusinessRepository extends JpaRepository<Business, Long>, BusinessRepositoryCustom {
}
