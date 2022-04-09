package edu.ben.SOJAZBackend.controller;

import edu.ben.SOJAZBackend.model.UserExercise;
import edu.ben.SOJAZBackend.model.User_Food;
import edu.ben.SOJAZBackend.model.dto.UserExerciseDTO;
import edu.ben.SOJAZBackend.model.dto.UserFoodDTO;
import edu.ben.SOJAZBackend.service.UserExerciseService;
import edu.ben.SOJAZBackend.service.UserFoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/userexercise")
public class UserExerciseResource {

    @Autowired
    private final UserExerciseService userExerciseService;

    UserExerciseResource(UserExerciseService userExerciseService) {
        this.userExerciseService = userExerciseService;
    }

    @PostMapping("/addtocardiotexercisediary/{exerciseId}/{userId}/{timeOfDay}/{noOfMinutes}")
    public void addToCardioExerciseDiary(@PathVariable Long exerciseId, @PathVariable Long userId, @PathVariable String timeOfDay, @PathVariable double noOfMinutes) {
        userExerciseService.addCardioExerciseToDiary(exerciseId, userId, timeOfDay, noOfMinutes);
    }

    @PostMapping("/addtoweightexercisediary/{exerciseId}/{userId}")
    public void addToWeightExerciseDiary(@RequestBody UserExerciseDTO userExerciseDTO, @PathVariable Long exerciseId, @PathVariable Long userId) {
        userExerciseService.addWeightExerciseToDiary(exerciseId, userId, userExerciseDTO.getTimeOfDay(), userExerciseDTO.getSets(), userExerciseDTO.getReps());
    }
}
