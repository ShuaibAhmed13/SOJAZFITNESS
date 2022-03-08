//package edu.ben.SOJAZBackend.controller;
//
//import edu.ben.SOJAZBackend.model.ExerciseMuscle;
//import edu.ben.SOJAZBackend.service.ExerciseMuscleService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//
//@RestController
//@RequestMapping(value = "api/exercisemuscle", produces = "application/json")
//public class ExerciseMuscleResource {
//
//    @Autowired
//    private final ExerciseMuscleService exerciseMuscleService;
//
//
//    ExerciseMuscleResource(ExerciseMuscleService exerciseMuscleService) {
//        this.exerciseMuscleService = exerciseMuscleService;
//    }
//
//    @GetMapping("/getExerciseMuscles")
//    public List<ExerciseMuscle> getExerciseMuscle() {
//        return exerciseMuscleService.getAllExerciseMuscles();
//    }
//}
