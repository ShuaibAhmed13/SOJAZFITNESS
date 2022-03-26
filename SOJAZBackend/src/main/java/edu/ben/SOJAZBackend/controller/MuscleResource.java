package edu.ben.SOJAZBackend.controller;
import edu.ben.SOJAZBackend.model.Exercise;
import edu.ben.SOJAZBackend.model.Muscle;
import edu.ben.SOJAZBackend.model.dto.MuscleDTO;
import edu.ben.SOJAZBackend.service.MuscleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    // admin privileges
    @PostMapping(value = "/crud/createmuscle")
    public ResponseEntity<String> createMuscle(@RequestBody Muscle muscle) {
        return new ResponseEntity<String>(muscleService.createMuscle(muscle), HttpStatus.CREATED);
    }

    @PutMapping(value = "/crud/updatemuscle/{muscleId}")
    public ResponseEntity<String> updateMuscle(@PathVariable Long muscleId, @RequestBody Muscle muscle) {
        return new ResponseEntity<String>(muscleService.updateMuscle(muscleId, muscle), HttpStatus.OK);
    }

    @DeleteMapping(value = "/crud/deletemuscle/{muscleId}")
    public ResponseEntity<String> deleteMuscle(@PathVariable Long muscleId) {
        return new ResponseEntity<String>(muscleService.deleteMuscle(muscleId), HttpStatus.OK);
    }
}
