package edu.ben.SOJAZBackend.service;

import edu.ben.SOJAZBackend.model.*;
import edu.ben.SOJAZBackend.repository.ExerciseRepository;
import edu.ben.SOJAZBackend.repository.UserExerciseRepository;
import edu.ben.SOJAZBackend.repository.UserRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class UserExerciseService {
    @Autowired
    UserExerciseRepository userExerciseRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    ExerciseRepository exerciseRepository;

    public void addWeightExerciseToDiary(Long exerciseId, Long userId, String timeOfDay, int sets, int reps) {
        Exercise exercise = exerciseRepository.getById(exerciseId);
        user user = userRepository.findById(userId).get();
        UserExercise userExercise = new UserExercise(exercise, user, timeOfDay, reps, sets);
        userExerciseRepository.save(userExercise);
    }

    public void addCardioExerciseToDiary(Long exerciseId, Long userId, String timeOfDay, double noOfMinutes) {
//        Exercise exercise = exerciseRepository.findById(exerciseId).get();
        Exercise exercise = exerciseRepository.getById(exerciseId);
//        System.out.println(exerciseRepository.getById(exerciseId));
        user user = userRepository.findById(userId).get();
        double caloriesBurned = exercise.getCaloriesBurned() * noOfMinutes;
        UserExercise userExercise = new UserExercise(exercise, user, timeOfDay, noOfMinutes, caloriesBurned);
        userExerciseRepository.save(userExercise);
    }

    public List<UserExercise> getUserExercises(Long user_id) {
        return userExerciseRepository.findAllByUserId(user_id);
    }

    public void editUserExercise(Long userexerciseid, UserExercise userExercise) {
        UserExercise oldUserExercise = userExerciseRepository.getById(userexerciseid);
        oldUserExercise.setNoOfMinutes(userExercise.getNoOfMinutes());
        oldUserExercise.setReps(userExercise.getReps());
        oldUserExercise.setSets(userExercise.getSets());
        oldUserExercise.setTimeOfDay(userExercise.getTimeOfDay());
        Exercise exercise = oldUserExercise.getExercise();
        System.out.println(exercise.toString());
        if(exercise.getType().equalsIgnoreCase("cardio")) {
            System.out.println("INSIDE THE IF STATEMENT");
            oldUserExercise.setTotalCaloriesBurned(userExercise.getNoOfMinutes() * exercise.getCaloriesBurned());
        }
        userExerciseRepository.save(oldUserExercise);
    }

    public void deleteUserExercise(Long userexerciseid) {
        userExerciseRepository.deleteById(userexerciseid);
    }
}
