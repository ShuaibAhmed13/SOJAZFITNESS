package edu.ben.SOJAZBackend.service;

import edu.ben.SOJAZBackend.model.User_Food;
import edu.ben.SOJAZBackend.repository.UserFoodRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserFoodService {

    @Autowired
    UserFoodRepository userFoodRepository;

    public List<User_Food> getAllFoodsConsumedByUser(Long user_id) {
        return userFoodRepository.findUser_FoodsByUserUserId(user_id);
    }

    public List<User_Food> getAll() {
        return userFoodRepository.findAll();
    }

    public List<User_Food> getAllUsersByFoodId(Long food_id) {
        return userFoodRepository.findUser_FoodsByFoodId(food_id);
    }
}
