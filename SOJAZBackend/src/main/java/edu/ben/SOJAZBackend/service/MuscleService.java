package edu.ben.SOJAZBackend.service;

import edu.ben.SOJAZBackend.model.Exercise;
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

    public String createMuscle(Muscle muscle) {
        try {
            muscleRepository.save(muscle);
            return "Muscle successfully created.";
        } catch (Exception ex) {
            return "Muscle could not be created.";
        }
    }

    public String updateMuscle(Long muscleId, Muscle muscle) {
        try {
            muscle.setId(muscleId);
            muscleRepository.save(muscle);
            return "Muscle successfully updated.";
        } catch (Exception ex) {
            return "Muscle could not be updated.";
        }
    }

    public String deleteMuscle(Long muscleId) {
        try {
            muscleRepository.deleteById(muscleId);
            return "Muscle successfully deleted.";
        } catch (Exception ex) {
            return "Muscle could not be deleted.";
        }
    }
}
