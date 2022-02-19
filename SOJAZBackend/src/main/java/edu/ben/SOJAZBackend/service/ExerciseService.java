package edu.ben.SOJAZBackend.service;

import edu.ben.SOJAZBackend.model.Exercise;
import edu.ben.SOJAZBackend.model.dto.ExerciseDTO;
import edu.ben.SOJAZBackend.repository.ExerciseRepository;
import org.springframework.stereotype.Service;

@Service
public class ExerciseService {

    ExerciseRepository exerciseRepository;

    public ExerciseService(ExerciseRepository exerciseRepository) {
        this.exerciseRepository = exerciseRepository;
    }

    public void exerciseSave(ExerciseDTO exerciseDTO) {

        exerciseRepository.save(new Exercise(exerciseDTO.getWorkout(), exerciseDTO.getWorkoutType(), exerciseDTO.getSets(), exerciseDTO.getReps(), exerciseDTO.getIntensity()));
    }
}
