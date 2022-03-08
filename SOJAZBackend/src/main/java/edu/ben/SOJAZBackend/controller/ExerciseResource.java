package edu.ben.SOJAZBackend.controller;

import edu.ben.SOJAZBackend.model.Exercise;
import edu.ben.SOJAZBackend.model.Muscle;
import edu.ben.SOJAZBackend.model.dto.ExerciseDTO;
import edu.ben.SOJAZBackend.model.dto.ExerciseWeightDTO;
import edu.ben.SOJAZBackend.model.dto.MuscleDTO;
import edu.ben.SOJAZBackend.service.ExerciseWeightService;
import edu.ben.SOJAZBackend.service.MuscleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/exercise", produces = "application/json")
public class ExerciseResource {

    @Autowired
    private final ExerciseWeightService exerciseWeightService;;

    ExerciseResource(ExerciseWeightService exerciseWeightService) {
        this.exerciseWeightService = exerciseWeightService;
    }

    @PostMapping("/create")
    public void createWorkout(@RequestBody ExerciseDTO exerciseDTO) {
        this.exerciseWeightService.exerciseSave(exerciseDTO);
    }

    @GetMapping("/getExercises")
    public List<ExerciseDTO> getExercises() {
        return exerciseWeightService.getTheExerciseList();
    }

    @GetMapping("/getExercises/{exercise}")
    public List<ExerciseDTO> getFilteredExercises(@PathVariable String name) {
        return this.exerciseWeightService.getFilteredName(name);
    }

}
