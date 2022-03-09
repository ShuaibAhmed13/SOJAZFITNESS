package edu.ben.SOJAZBackend.service;

import edu.ben.SOJAZBackend.model.Exercise;
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

    public Exercise getExerciseById(Long exercise_id) {
        return exerciseRepository.getById(exercise_id);
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

//    public List<Object> findAllByExerciseId(Long exercise_id) {
//        return exerciseRepository.findAllExercisesAndMusclesByExerciseId(exercise_id);
//    }
//    public List<Object> findAllByMuscleId(Long muscle_id) {
//        return exerciseRepository.findAllExercisesAndMusclesByExerciseId(muscle_id);
//    }

    public List<Exercise> findByMuscleId(Long muscle_id) {
        return exerciseRepository.findByMusclesId(muscle_id);
    }

    public List<Exercise> findByMuscleName(String muscle_name) {
        return exerciseRepository.findByMusclesMuscleName(muscle_name);
    }

    public List<Exercise> findByEquipmentName(String equipment_name) {
        return exerciseRepository.findByEquipmentsName(equipment_name);
    }
    public List<Exercise> findByEquipmentId(Long equipment_id) {
        return exerciseRepository.findByEquipmentsId(equipment_id);
    }
}
