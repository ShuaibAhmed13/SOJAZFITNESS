package edu.ben.SOJAZBackend.service;

import edu.ben.SOJAZBackend.model.Exercise;
import edu.ben.SOJAZBackend.model.ExerciseCardio;
import edu.ben.SOJAZBackend.model.dto.ExerciseCardioDTO;
import edu.ben.SOJAZBackend.model.dto.ExerciseDTO;
import edu.ben.SOJAZBackend.repository.ExerciseCardioRepository;
import edu.ben.SOJAZBackend.repository.ExerciseRepository;
import org.springframework.stereotype.Service;

@Service
public class ExerciseCardioService {

    ExerciseCardioRepository exerciseCardioRepository;

    public ExerciseCardioService(ExerciseCardioRepository exerciseCardioRepository) {
        this.exerciseCardioRepository = exerciseCardioRepository;
    }

    public void exerciseCardioSave(ExerciseCardioDTO exerciseCardioDTO) {
        exerciseCardioRepository.save(new ExerciseCardio(exerciseCardioDTO.getWorkoutCardio(), exerciseCardioDTO.getLength(), exerciseCardioDTO.getIntensity()));
    }
}
