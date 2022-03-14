package edu.ben.SOJAZBackend.service;

import edu.ben.SOJAZBackend.model.Muscle;
import edu.ben.SOJAZBackend.repository.MuscleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MuscleService {

   @Autowired
   MuscleRepository muscleRepository;

   public MuscleService(MuscleRepository muscleRepository) {
        this.muscleRepository = muscleRepository;
    }

    public List<Muscle> getAllMuscles() {
        return muscleRepository.findAll();
    }

    public List<Object> findAllMuscles() {
        return muscleRepository.findAllMuscles();
    }

    public List<Object> findAllByMuscleName(String muscleName) {
        return muscleRepository.findAllExercisesByMuscleName(muscleName);
    }
}
