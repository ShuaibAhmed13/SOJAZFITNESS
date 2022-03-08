package edu.ben.SOJAZBackend.repository;

import edu.ben.SOJAZBackend.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FoodRepository extends JpaRepository <Food, Long> {
    List<Food> findAll();
    Food getFoodByFoodName(String food_name);

}
