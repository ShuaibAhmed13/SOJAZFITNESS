package edu.ben.SOJAZBackend.service;

import edu.ben.SOJAZBackend.model.Exercise;
import edu.ben.SOJAZBackend.model.dto.ExerciseDTO;
import edu.ben.SOJAZBackend.model.dto.ExerciseMuscleDTO;
import edu.ben.SOJAZBackend.repository.ExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExerciseService {

    @Autowired
    ExerciseRepository exerciseRepository;

    public ExerciseService () {}

    public List<Exercise> getAllExercises() {
        return exerciseRepository.findAll();
    }

    public List<Object> findAllExercises() {
        return exerciseRepository.findAllExercises();
    }

    public Exercise getExerciseById(Long exercise_id) {
        return exerciseRepository.getById(exercise_id);
    }

    public void exerciseSave(ExerciseDTO exerciseDTO) {
        exerciseRepository.save(new Exercise(exerciseDTO.getName(), exerciseDTO.getDescription(), exerciseDTO.getType(), exerciseDTO.getCaloriesBurned()));
    }

    public String createExercise(Exercise exercise) {
        try {
            exerciseRepository.save(exercise);
            return "Exercise successfully created.";
        } catch (Exception ex) {
            return "Exercise could not be created.";
        }
    }

    public String updateExercise(Long exercise_id, Exercise exercise) {
        try {
            exercise.setId(exercise_id);
            exerciseRepository.save(exercise);
            return "Exercise successfully updated.";
        } catch (Exception ex) {
            return "Exercise could not be updated.";
        }
    }

    public String deleteExercise(Long exercise_id) {
        try {
            exerciseRepository.deleteById(exercise_id);
            return "Exercise successfully deleted.";
        } catch (Exception ex) {
            return "Exercise could not be deleted.";
        }
    }

    public List<Exercise> findAllByMuscleId(Long muscleId) {
        return exerciseRepository.findAllExercisesByMuscleId(muscleId);
    }
}
