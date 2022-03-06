package edu.ben.SOJAZBackend.controller;

import edu.ben.SOJAZBackend.model.Muscle;
import edu.ben.SOJAZBackend.model.dto.MuscleDTO;
import edu.ben.SOJAZBackend.service.ExerciseWeightService;
import edu.ben.SOJAZBackend.service.MuscleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "api/muscle", produces = "application/json")
public class MuscleResource {

    @Autowired
    private final MuscleService muscleService;

    MuscleResource(MuscleService muscleService) {
        this.muscleService = muscleService;
    }

    @GetMapping("/getMuscles")
    public List<Muscle> getMuscles() {
        return muscleService.getAllMuscles();
    }

    @GetMapping("/getMuscles/{muscle}")
    public List<MuscleDTO> getFilteredMuscles(@PathVariable String muscle) {
        return this.muscleService.getFilteredData(muscle);
    }
}
