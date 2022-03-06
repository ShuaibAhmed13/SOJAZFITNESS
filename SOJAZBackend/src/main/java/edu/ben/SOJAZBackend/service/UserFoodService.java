package edu.ben.SOJAZBackend.service;
import edu.ben.SOJAZBackend.model.Food;
import edu.ben.SOJAZBackend.model.User_Food;
import edu.ben.SOJAZBackend.model.user;
import edu.ben.SOJAZBackend.repository.FoodRepository;
import edu.ben.SOJAZBackend.repository.UserFoodRepository;
import edu.ben.SOJAZBackend.repository.UserRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class UserFoodService {

    @Autowired
    UserFoodRepository userFoodRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    FoodRepository foodRepository;

    public List<User_Food> getAllFoodsConsumedByUser(Long user_id) {
        return userFoodRepository.findUser_FoodsByUserUserId(user_id);
    }

    public List<User_Food> getAll() {
        return userFoodRepository.findAll();
    }

    public List<User_Food> getAllUsersByFoodId(Long food_id) {
        return userFoodRepository.findUser_FoodsByFoodId(food_id);
    }

    public void addFoodToUserDiary(User_Food user_food, Long user_id, Long food_id) {

        user user = userRepository.getById(user_id);
        Food food = foodRepository.getById(food_id);
        user_food.setUser(user);
        user_food.setFood(food);
        userFoodRepository.save(user_food);
    }

    public void addFoodToDiary(Long food_id, Long user_id, double noServ, String meal) {
        Long id = userFoodRepository.count() + 1;
        Food food = foodRepository.findById(food_id).get();
        user user = userRepository.findById(user_id).get();
        Date date = new Date();
        User_Food user_food = new User_Food(id, food, user, meal, date, food.getCalories() * noServ, food.getTotalFat() * noServ,
                food.getTotalCarbs() * noServ, food.getProtein() * noServ, food.getSodium() * noServ, food.getSugar() * noServ, noServ);
        userFoodRepository.save(user_food);

    }
}
