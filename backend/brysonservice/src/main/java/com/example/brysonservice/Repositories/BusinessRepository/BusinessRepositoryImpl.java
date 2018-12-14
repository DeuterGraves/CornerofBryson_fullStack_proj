package com.example.brysonservice.Repositories.BusinessRepository;

import com.example.brysonservice.Models.Business;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

public class BusinessRepositoryImpl {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Business> getBusinessByTag(String tag){

        List<Business> results = null;

        Session session = entityManager.unwrap(Session.class);
        try{
            Criteria criteria = session.createCriteria(Business.class);
            criteria.add(Restrictions.eq("tag", tag));
            results = criteria.list();
        } catch(HibernateException ex){
            ex.printStackTrace();
        } finally {
            session.close();
        }
        return results;
    }

}
