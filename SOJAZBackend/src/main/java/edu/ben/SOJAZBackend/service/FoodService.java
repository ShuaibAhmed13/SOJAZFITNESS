package edu.ben.SOJAZBackend.service;

import edu.ben.SOJAZBackend.model.Food;
import edu.ben.SOJAZBackend.model.dto.FoodDTO;
import edu.ben.SOJAZBackend.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FoodService {

    @Autowired
    FoodRepository foodRepository;

    public FoodService(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    public List<Food> getAllFoods() {
        return foodRepository.findAll();
    }

    public Food getFoodById(Long food_id) { return foodRepository.findById(food_id).get();}

    public Food getFoodByName(String food_name) {
        return foodRepository.getFoodByFoodName(food_name);
    }

    public String createFood(Food food){
        try {
            foodRepository.save(food);
            return "Food successfully added to the database.";
        } catch (Exception e) {
            return "Food could not be added to the database.";
        }
    }

    public String updateFood(Food food, Long food_id){
        Food newFood = food;
        newFood.setId(food_id);
        try {
            foodRepository.save(newFood);
            return "Food successfully updated";
        } catch (Exception exception) {
            return "Food could not be updated";
        }
    }

    public String deleteFood(Long food_id) {
        try {
            foodRepository.deleteById(food_id);
            return "Food was successfully deleted.";
        } catch (Exception exception) {
            return "Food could not be deleted.";
        }
    }
}
