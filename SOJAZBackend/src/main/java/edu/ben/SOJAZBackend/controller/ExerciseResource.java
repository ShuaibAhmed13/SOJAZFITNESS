package edu.ben.SOJAZBackend.controller;

import edu.ben.SOJAZBackend.model.ExerciseWeight;
import edu.ben.SOJAZBackend.model.dto.ExerciseWeightDTO;
import edu.ben.SOJAZBackend.service.ExerciseWeightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/exercise", produces = "application/json")
public class ExerciseResource {

    @Autowired
    private final ExerciseWeightService exerciseWeightService;


    ExerciseResource(ExerciseWeightService exerciseWeightService) {
        this.exerciseWeightService = exerciseWeightService;
    }

    @PostMapping("/create")
    public void createWorkout(@RequestBody ExerciseWeightDTO exerciseWeightDTO) {
        this.exerciseWeightService.exerciseSave(exerciseWeightDTO);
    }

    @GetMapping("/exercise/{muscle}")
    public List<ExerciseWeightDTO> getFilteredAchievements(@PathVariable String muscle) {
        return this.exerciseWeightService.getFilteredData(muscle);
    }

}
