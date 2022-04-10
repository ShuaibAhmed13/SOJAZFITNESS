package edu.ben.SOJAZBackend.controller;

import edu.ben.SOJAZBackend.model.UserExercise;
import edu.ben.SOJAZBackend.model.User_Food;
import edu.ben.SOJAZBackend.model.dto.UserExerciseDTO;
import edu.ben.SOJAZBackend.model.dto.UserFoodDTO;
import edu.ben.SOJAZBackend.service.UserExerciseService;
import edu.ben.SOJAZBackend.service.UserFoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/userexercise")
public class UserExerciseResource {

    @Autowired
    private final UserExerciseService userExerciseService;

    UserExerciseResource(UserExerciseService userExerciseService) {
        this.userExerciseService = userExerciseService;
    }

    @PostMapping("/addtocardioexercisediary/{exerciseId}/{userId}")
    public void addToCardioExerciseDiary(@PathVariable Long exerciseId, @PathVariable Long userId, @RequestBody CardioInfo cardioInfo) {
        userExerciseService.addCardioExerciseToDiary(exerciseId, userId, cardioInfo.timeOfDay, cardioInfo.noOfMinutes);
    }

    @PostMapping("/addtoweightexercisediary/{exerciseId}/{userId}")
    public void addToWeightExerciseDiary(@RequestBody WeightInfo weightInfo, @PathVariable Long exerciseId, @PathVariable Long userId) {
        userExerciseService.addWeightExerciseToDiary(exerciseId, userId, weightInfo.timeOfDay, weightInfo.sets, weightInfo.reps);
    }

    @GetMapping("/getusersexercises/{user_id}")
    public List<UserExercise> getUsersExercises(@PathVariable Long user_id) {
        return userExerciseService.getUserExercises(user_id);
    }
    @PutMapping("/edituserexercise/{userexercise_id}")
    public void editUserExercise(@PathVariable Long userexercise_id, @RequestBody UserExercise userExercise) {
        userExerciseService.editUserExercise(userexercise_id, userExercise);
    }
    @DeleteMapping("/deleteuserexercise/{userexercise_id}")
    public void deleteUserExercise(@PathVariable Long userexercise_id) {
        userExerciseService.deleteUserExercise(userexercise_id);
    }
}
class CardioInfo {
    String timeOfDay;
    double noOfMinutes;
    public CardioInfo(String timeOfDay, double noOfMinutes) {
        this.timeOfDay = timeOfDay;
        this.noOfMinutes = noOfMinutes;
    }
}

class WeightInfo {
    String timeOfDay;
    int sets;
    int reps;
    public WeightInfo(String timeOfDay, int sets, int reps) {
        this.timeOfDay = timeOfDay;
        this.sets = sets;
        this.reps = reps;
    }
}