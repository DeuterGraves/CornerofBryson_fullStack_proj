package com.example.brysonservice.Projections;

import com.example.brysonservice.Models.Business;
import com.example.brysonservice.Models.User;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name="embedUser", types = Business.class)
public interface UserProjection {
    long getID();
    String getTitle();
    String getSummary();
    String getTag();
    User getUser();
}
