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

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
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

//    public List<User_Food> getAllFoodsConsumedByUser(Long user_id) {
//        return userFoodRepository.findUser_FoodsByUserUserId(user_id);
//    }

    public List<User_Food> getAll() {
        return userFoodRepository.findAll();
    }

    public List<User_Food> getAllUserFoodByUserId(Long user_id) {
        return userFoodRepository.getAllByUserId(user_id);
    }

    public List<User_Food> getAllUserFoodByUserIdAndDate(Long user_id, String date) throws ParseException {
//        LocalDate date1 = LocalDate.parse(date);
//        System.out.println("The localdate is: " + date1);
        //Date date2 = new SimpleDateFormat("yyyy-MM-dd").parse(date);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate date1 = LocalDate.parse(date, formatter);
        System.out.println("The simpledate is: " + date1);
        return userFoodRepository.getAllByUserIdAndDate(user_id, date1);
    }
//    public List<User_Food> getAllUsersByFoodId(Long food_id) {
//        return userFoodRepository.findUser_FoodsByFoodId(food_id);
//    }

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
        //Date date = new Date();
        LocalDate date = LocalDate.now();
        System.out.println("The time set to 0");
        System.out.println(date);
        User_Food user_food = new User_Food(id, food, user, meal, date, food.getCalories() * noServ, food.getTotalFat() * noServ,
                food.getTotalCarbs() * noServ, food.getProtein() * noServ, food.getSodium() * noServ, food.getSugar() * noServ, noServ);
        userFoodRepository.save(user_food);
    }

    public void deleteFromFoodDiary(Long id) {
        this.userFoodRepository.deleteById(id);
    }

}
