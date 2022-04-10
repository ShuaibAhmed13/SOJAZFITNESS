package edu.ben.SOJAZBackend.controller;

import edu.ben.SOJAZBackend.model.User_Food;
import edu.ben.SOJAZBackend.model.dto.UserFoodDTO;
import edu.ben.SOJAZBackend.service.UserFoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(value = "api/userfood")
public class UserFoodResource {

    @Autowired
    private final UserFoodService userFoodService;

    UserFoodResource(UserFoodService userFoodService) {
        this.userFoodService = userFoodService;
    }

    @GetMapping("/getusersfoods/{user_id}")
    public List<User_Food> getUsersFoods(@PathVariable Long user_id) {
         return userFoodService.getAllUserFoodByUserId(user_id);
    }

    @GetMapping("/getusersfoodsbydate/{user_id}/{date}")
    public List<User_Food> getUsersFoodsByDate(@PathVariable Long user_id, @PathVariable String date) throws ParseException {
        return userFoodService.getAllUserFoodByUserIdAndDate(user_id, date);
    }

    @GetMapping("/getpastweekcalories/{user_id}")
    public List<UserFoodDTO> getPastWeekCalories(@PathVariable Long user_id) throws ParseException {
        return userFoodService.getPastWeekCaloriesConsumed(user_id);
    }

    @GetMapping("/getall")
    public List<User_Food> getAll() {
        return userFoodService.getAll();
    }

//    @GetMapping("/getallfoodsbyuser/{food_id}")
//    public List<User_Food> getFoodsUsers(@PathVariable Long food_id) {
//        return userFoodService.getAllUsersByFoodId(food_id);
//    }

    @PostMapping("/addfoodconsumedbyuser/{user_id}/{food_id}")
    public void addusersfood(@RequestBody User_Food user_food, @PathVariable Long user_id, @PathVariable Long food_id) {
        userFoodService.addFoodToUserDiary(user_food, user_id, food_id);
    }

    @PostMapping("/addtofooddiary/{food_id}/{user_id}")
    public void addToFoodDiary(@RequestBody UserFoodDTO userFoodDTO, @PathVariable Long food_id, @PathVariable Long user_id) {
        System.out.println("The food id is " + food_id + "The user id is " + user_id + " The serv is " + userFoodDTO.getNoOfServings() + " The meal is " + userFoodDTO.getMeal());
        userFoodService.addFoodToDiary(food_id, user_id, userFoodDTO.getNoOfServings(), userFoodDTO.getMeal());
    }

    @DeleteMapping("/deletefromfooddiary/{id}")
    public void deleteFromFoodDiary(@PathVariable Long id) {
        userFoodService.deleteFromFoodDiary(id);
    }


}
