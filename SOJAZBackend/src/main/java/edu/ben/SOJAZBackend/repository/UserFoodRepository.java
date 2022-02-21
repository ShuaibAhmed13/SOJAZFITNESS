package edu.ben.SOJAZBackend.repository;

import edu.ben.SOJAZBackend.model.User_Food;
import edu.ben.SOJAZBackend.model.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserFoodRepository extends JpaRepository<User_Food, Long> {
    //Get all foods consumed by the specified user
    @Query(value = "SELECT * FROM user_food where user_id = ?;", nativeQuery = true)
    public List<User_Food> findUser_FoodsByUserUserId(Long user_id);


    @Query(value = "select * from sojazdummyschema.user_food;", nativeQuery = true)
    List<User_Food> getAll();

    List<User_Food> findUser_FoodsByFoodId(Long food);

}
