package com.example.brysonservice.Controllers;

import com.example.brysonservice.Models.Business;
import com.example.brysonservice.Repositories.BusinessRepository.BusinessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/businesses")
public class BusinessController {

    @Autowired
    BusinessRepository businessRepository;

    @GetMapping(value = "/tag/{tag}")
    public List<Business> getBusinessByTag(@PathVariable String tag){
        return businessRepository.getBusinessByTag(tag);
    }

    @GetMapping(value = "/host/{id}")
    public List<Business> getBusinessByHost(@PathVariable Long id){
        return businessRepository.getBusinessByHost(id);
    }


}
