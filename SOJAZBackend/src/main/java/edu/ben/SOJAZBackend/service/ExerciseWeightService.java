package edu.ben.SOJAZBackend.service;
import edu.ben.SOJAZBackend.model.ExerciseWeight;
import edu.ben.SOJAZBackend.model.dto.ExerciseWeightDTO;
import edu.ben.SOJAZBackend.repository.ExerciseWeightRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ExerciseWeightService {

    ExerciseWeightRepository exerciseWeightRepository;

    public ExerciseWeightService(ExerciseWeightRepository exerciseRepository) {
        this.exerciseWeightRepository = exerciseRepository;
    }

    public void exerciseSave(ExerciseWeightDTO exerciseDTO) {
        exerciseWeightRepository.save(new ExerciseWeight(exerciseDTO.getSets(), exerciseDTO.getReps()));
    }

    public List<ExerciseWeightDTO> getFilteredData(String muscle) {
        List<ExerciseWeight> muscleFiltered= exerciseWeightRepository.findByMuscle(muscle);
        List<ExerciseWeightDTO> answer = new ArrayList<>();
        for (ExerciseWeight exerciseWeight: muscleFiltered) {
            answer.add(new ExerciseWeightDTO(exerciseWeight.getId(), exerciseWeight.getReps(), exerciseWeight.getSets(), exerciseWeight.getMuscleID()));
        }
        return answer;
    }
}
