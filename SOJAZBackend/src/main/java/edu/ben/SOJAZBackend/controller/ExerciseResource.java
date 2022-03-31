package edu.ben.SOJAZBackend.controller;

import edu.ben.SOJAZBackend.model.Exercise;
import edu.ben.SOJAZBackend.model.Muscle;
import edu.ben.SOJAZBackend.model.dto.ExerciseDTO;
import edu.ben.SOJAZBackend.model.dto.ExerciseMuscleDTO;
import edu.ben.SOJAZBackend.model.dto.ExerciseWeightDTO;
import edu.ben.SOJAZBackend.model.dto.MuscleDTO;

import edu.ben.SOJAZBackend.service.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/exercises", produces = "application/json")
public class ExerciseResource {

    @Autowired
    ExerciseService exerciseService;

    @GetMapping(value = "/getall")
    public List<Exercise> getAllExercises() {
        return exerciseService.getAllExercises();
    }

    @GetMapping(value = "/findall")
    public List<Object> findAllExercises() {
        return exerciseService.findAllExercises();
    }

    @GetMapping(value = "/getexercisebyid/{exercise_id}")
    public Exercise getExerciseById(@PathVariable Long exercise_id) {
        return exerciseService.getExerciseById(exercise_id);
    }

    @PostMapping("/create")
    public void createWorkout(@RequestBody ExerciseDTO exerciseDTO) {
       this.exerciseService.exerciseSave(exerciseDTO);
    }

    //Admin privileges
    @PostMapping(value = "/crud/createexercise")
    public ResponseEntity<String> createExercise(@RequestBody Exercise exercise) {
        return new ResponseEntity<String>(exerciseService.createExercise(exercise), HttpStatus.CREATED);
    }

    @PutMapping(value = "/crud/updateexercise/{exercise_id}")
    public ResponseEntity<String> updateExercise(@PathVariable Long exercise_id, @RequestBody Exercise exercise) {
        return new ResponseEntity<String>(exerciseService.updateExercise(exercise_id, exercise), HttpStatus.OK);
    }

    @DeleteMapping(value = "/crud/deleteexercise/{exercise_id}")
    public ResponseEntity<String> deleteExercise(@PathVariable Long exercise_id) {
        return new ResponseEntity<String>(exerciseService.deleteExercise(exercise_id), HttpStatus.OK);
    }

    @GetMapping(value = "/crud/getallbyexerciseid/{muscleId}")
    public List<Exercise> getExercisesAndMusclesByExerciseId(@PathVariable Long muscleId) {
        return exerciseService.findAllByMuscleId(muscleId);
    }
}
