package edu.ben.SOJAZBackend.model.dto;

import edu.ben.SOJAZBackend.model.Exercise;
import edu.ben.SOJAZBackend.model.user;
import lombok.Data;

@Data
public class UserExerciseDTO {
    Long id;
    user user;
    Exercise exercise;
    String timeOfDay;
    double noOfMinutes;
    int sets;
    int reps;
    int totalCaloriesBurned;

    public UserExerciseDTO(String timeOfDay, double noOfMinutes) {
        this.timeOfDay = timeOfDay;
        this.noOfMinutes = noOfMinutes;
    }

    public UserExerciseDTO(String timeOfDay, int sets, int reps) {
        this.timeOfDay = timeOfDay;
        this.sets = sets;
        this.reps = reps;
    }

}
