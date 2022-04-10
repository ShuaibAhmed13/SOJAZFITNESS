package edu.ben.SOJAZBackend.service;

import edu.ben.SOJAZBackend.model.*;
import edu.ben.SOJAZBackend.repository.ExerciseRepository;
import edu.ben.SOJAZBackend.repository.UserExerciseRepository;
import edu.ben.SOJAZBackend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class UserExerciseService {
    UserExerciseRepository userExerciseRepository;
    UserRepository userRepository;
    ExerciseRepository exerciseRepository;

    public void addWeightExerciseToDiary(Long exerciseId, Long userId, String timeOfDay, int sets, int reps) {
        Exercise exercise = exerciseRepository.findExerciseById(exerciseId);
        user user = userRepository.findById(userId).get();
        UserExercise userExercise = new UserExercise(exercise, user, timeOfDay, reps, sets);
        userExerciseRepository.save(userExercise);
    }

    public void addCardioExerciseToDiary(Long exerciseId, Long userId, String timeOfDay, double noOfMinutes) {
//        Exercise exercise = exerciseRepository.findById(exerciseId).get();
        Exercise exercise = exerciseRepository.findExerciseById(exerciseId);
//        System.out.println(exerciseRepository.getById(exerciseId));
        user user = userRepository.findById(userId).get();
        double caloriesBurned = exercise.getCaloriesBurned() * noOfMinutes;
        UserExercise userExercise = new UserExercise(exercise, user, timeOfDay, noOfMinutes, caloriesBurned);
        userExerciseRepository.save(userExercise);
    }
}
