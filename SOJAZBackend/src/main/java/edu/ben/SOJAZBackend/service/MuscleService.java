package edu.ben.SOJAZBackend.service;

import edu.ben.SOJAZBackend.model.Muscle;
import edu.ben.SOJAZBackend.model.dto.ExerciseDTO;
import edu.ben.SOJAZBackend.model.dto.MuscleDTO;
import edu.ben.SOJAZBackend.repository.ExerciseRepository;
import edu.ben.SOJAZBackend.repository.MuscleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MuscleService {

    @Autowired
    MuscleRepository muscleRepository;

    public MuscleService(MuscleRepository muscleRepository) {
        this.muscleRepository = muscleRepository;
    }


    public List<Muscle> getAllMuscles() { return muscleRepository.findAll(); }

    public List<MuscleDTO> getFilteredData(String muscle) {
        List<Muscle> muscleFiltered= muscleRepository.findAllByMuscleName(muscle);
        List<MuscleDTO> answer = new ArrayList<>();
        for (Muscle muscle1: muscleFiltered) {
            answer.add(new MuscleDTO(muscle1.getId(), muscle1.getMuscleName(), muscle1.getMuscleGroup()));
        }
        return answer;
    }
}
