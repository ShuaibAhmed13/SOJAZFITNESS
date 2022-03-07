//package edu.ben.SOJAZBackend.service;
//
//import edu.ben.SOJAZBackend.model.ExerciseWeight;
//import edu.ben.SOJAZBackend.model.ExerciseCardio;
//import edu.ben.SOJAZBackend.model.dto.ExerciseCardioDTO;
//import edu.ben.SOJAZBackend.model.dto.ExerciseWeightDTO;
//import edu.ben.SOJAZBackend.repository.ExerciseCardioRepository;
//import edu.ben.SOJAZBackend.repository.ExerciseWeightRepository;
//import org.springframework.stereotype.Service;
//
//@Service
//public class ExerciseCardioService {
//
//    ExerciseCardioRepository exerciseCardioRepository;
//
//    public ExerciseCardioService(ExerciseCardioRepository exerciseCardioRepository) {
//        this.exerciseCardioRepository = exerciseCardioRepository;
//    }
//
//    public void exerciseCardioSave(ExerciseCardioDTO exerciseCardioDTO) {
//        exerciseCardioRepository.save(new ExerciseCardio(exerciseCardioDTO.getTime(), exerciseCardioDTO.getIntensity()));
//    }
//}
