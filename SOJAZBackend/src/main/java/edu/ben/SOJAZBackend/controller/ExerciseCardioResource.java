//package edu.ben.SOJAZBackend.controller;
//
//import edu.ben.SOJAZBackend.model.dto.ExerciseCardioDTO;
//import edu.ben.SOJAZBackend.model.dto.ExerciseWeightDTO;
//import edu.ben.SOJAZBackend.service.ExerciseCardioService;
//import edu.ben.SOJAZBackend.service.ExerciseWeightService;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping(value = "api/exercisecardio", produces = "application/json")
//public class ExerciseCardioResource {
//
//    private final ExerciseCardioService exerciseCardioService;
//
//    ExerciseCardioResource(ExerciseCardioService exerciseCardioService) {
//        this.exerciseCardioService = exerciseCardioService;
//    }
//
//    @PostMapping("/createcardio")
//    public void createWorkout(@RequestBody ExerciseCardioDTO exerciseCardioDTO) {
//        this.exerciseCardioService.exerciseCardioSave(exerciseCardioDTO);
//    }
//}
