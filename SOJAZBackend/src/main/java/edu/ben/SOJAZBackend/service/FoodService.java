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
}
