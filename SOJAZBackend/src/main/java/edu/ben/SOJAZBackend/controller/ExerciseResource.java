package edu.ben.SOJAZBackend.controller;

import edu.ben.SOJAZBackend.model.dto.ExerciseDTO;
import edu.ben.SOJAZBackend.service.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "api/exercise", produces = "application/json")
public class ExerciseResource {

    @Autowired
    private final ExerciseService exerciseService;


    ExerciseResource(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }

    @PostMapping("/create")
    public void createWorkout(@RequestBody ExerciseDTO exerciseDTO) {
        this.exerciseService.exerciseSave(exerciseDTO);
    }

}
