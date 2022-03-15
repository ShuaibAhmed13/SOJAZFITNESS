package edu.ben.SOJAZBackend.controller;
import edu.ben.SOJAZBackend.model.Exercise;
import edu.ben.SOJAZBackend.model.Muscle;
import edu.ben.SOJAZBackend.model.dto.MuscleDTO;
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

    @GetMapping(value = "/getall")
    public List<Muscle> getAllMuscles() {
        return muscleService.getAllMuscles();
    }

    @GetMapping(value = "/findall")
    public List<Object> findAllMuscles() {
        return muscleService.findAllMuscles();
    }

    @GetMapping(value = "/getMuscles/{muscleName}")
    public List<Object> getAllExercisesByMuscleName(@PathVariable String muscleName) {
        return muscleService.findAllByMuscleName(muscleName);
    }
}
