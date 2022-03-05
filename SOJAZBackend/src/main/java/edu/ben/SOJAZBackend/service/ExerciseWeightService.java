//package edu.ben.SOJAZBackend.service;
//import edu.ben.SOJAZBackend.model.Exercise;
//import edu.ben.SOJAZBackend.model.ExerciseWeight;
//import edu.ben.SOJAZBackend.model.dto.ExerciseDTO;
//import edu.ben.SOJAZBackend.model.dto.ExerciseWeightDTO;
//import edu.ben.SOJAZBackend.repository.ExerciseRepository;
//import edu.ben.SOJAZBackend.repository.ExerciseWeightRepository;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Service
//public class ExerciseWeightService {
//
//    ExerciseRepository exerciseRepository;
//    ExerciseWeightRepository exerciseWeightRepository;
//
//    public ExerciseWeightService(ExerciseRepository exerciseRepository, ExerciseWeightRepository exerciseWeightRepository) {
//        this.exerciseRepository = exerciseRepository;
//        this.exerciseWeightRepository = exerciseWeightRepository;
//    }
//
//    public void exerciseSave(ExerciseDTO exerciseDTO, ExerciseWeightDTO exerciseWeightDTO) {
//        exerciseRepository.save(new Exercise(exerciseDTO.getName(), exerciseDTO.getDescription()));
//        exerciseWeightRepository.save(new ExerciseWeight(exerciseWeightDTO.getSets(), exerciseWeightDTO.getReps()));
//    }
//
//    public List<ExerciseWeight> getAllExerciseWeight() {
//        return exerciseWeightRepository.findAll();
//    }
//
//    public List<Exercise> getAllExercise() {
//        return exerciseRepository.findAll();
//    }
//
//    public List<ExerciseWeightDTO> getFilteredData(String muscle) {
//        List<ExerciseWeight> muscleFiltered= exerciseWeightRepository.findByMuscle(muscle);
//        List<ExerciseWeightDTO> answer = new ArrayList<>();
//        for (ExerciseWeight exerciseWeight: muscleFiltered) {
//            answer.add(new ExerciseWeightDTO(exerciseWeight.getId(), exerciseWeight.getReps(), exerciseWeight.getSets(), exerciseWeight.getMuscle(), exerciseWeight.getEquipment(), exerciseWeight.getUser()));
//        }
//        return answer;
//    }
//}
