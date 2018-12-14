package com.example.brysonservice.Repositories.BusinessRepository;

import com.example.brysonservice.Models.Business;
import com.example.brysonservice.Projections.UserProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = UserProjection.class)
public interface BusinessRepository extends JpaRepository<Business, Long>, BusinessRepositoryCustom {
}
