package com.example.brysonservice.Repositories.ReviewRepository;

import com.example.brysonservice.Enums.BusinessTag;
import com.example.brysonservice.Models.Review;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

public class ReviewRepositoryImpl {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Review> getReviewByTag(BusinessTag tag){
        List<Review> results = null;
        Session session = entityManager.unwrap(Session.class);
        try{
            Criteria criteria = session.createCriteria(Review.class);
            criteria.add(Restrictions.eq("tag", tag));
            criteria.addOrder(Order.desc("createDateTime"));
            results = criteria.list();
        } catch(HibernateException ex){
            ex.printStackTrace();
        } finally {
            session.close();
        }
        return results;
    }

    @Transactional
    public List<Review> getReviewByHost(Long id) {
        List<Review> results = null;
        Session session = entityManager.unwrap(Session.class);
        try {
            Criteria criteria = session.createCriteria(Review.class);
            criteria.createAlias("user", "user");
            criteria.add(Restrictions.eq("user.id", id));
            criteria.addOrder(Order.desc("createDateTime"));
            results = criteria.list();
        } catch (HibernateException ex) {
            ex.printStackTrace();
        } finally {
            session.close();
        }
        return results;
    }

    @Transactional
    public List<Review> getReviewByType(String type){
        List<Review> results = null;
        Session session = entityManager.unwrap(Session.class);
        try{
            Criteria criteria = session.createCriteria(Review.class);
            criteria.add(Restrictions.ilike("type", type));
            criteria.addOrder(Order.desc("createDateTime"));
            results = criteria.list();
        } catch (HibernateException ex) {
            ex.printStackTrace();
        } finally {
            session.close();
        }
        return results;

    }

    @Transactional
    public List<Review> getAllReviews(){
        List<Review> results = null;
        Session session = entityManager.unwrap(Session.class);
        try{
            Criteria criteria = session.createCriteria(Review.class);
            criteria.addOrder(Order.desc("createDateTime"));
            results = criteria.list();
        } catch (HibernateException ex) {
            ex.printStackTrace();
        } finally {
            session.close();
        }
        return results;
    }


}
