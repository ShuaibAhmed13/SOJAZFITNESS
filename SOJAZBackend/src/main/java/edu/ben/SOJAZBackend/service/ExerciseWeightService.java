package edu.ben.SOJAZBackend.service;
import edu.ben.SOJAZBackend.model.Exercise;
import edu.ben.SOJAZBackend.model.ExerciseMuscle;
import edu.ben.SOJAZBackend.model.ExerciseWeight;
import edu.ben.SOJAZBackend.model.Muscle;
import edu.ben.SOJAZBackend.model.dto.ExerciseDTO;
import edu.ben.SOJAZBackend.model.dto.ExerciseWeightDTO;
import edu.ben.SOJAZBackend.model.dto.MuscleDTO;
import edu.ben.SOJAZBackend.repository.ExerciseMuscleRepository;
import edu.ben.SOJAZBackend.repository.ExerciseRepository;
import edu.ben.SOJAZBackend.repository.ExerciseWeightRepository;
import edu.ben.SOJAZBackend.repository.MuscleRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ExerciseWeightService {

    ExerciseRepository exerciseRepository;
    ExerciseWeightRepository exerciseWeightRepository;
    ExerciseMuscleRepository exerciseMuscleRepository;
    ExerciseDTO exercises;
    MuscleDTO muscleDTO;

    public ExerciseWeightService(ExerciseRepository exerciseRepository, ExerciseWeightRepository exerciseWeightRepository) {
        this.exerciseRepository = exerciseRepository;
        this.exerciseWeightRepository = exerciseWeightRepository;
    }

    public List<ExerciseDTO> getFilteredName(String name) {
        List<Exercise> nameFiltered= exerciseRepository.findAllByName(name);
        List<ExerciseDTO> answer = new ArrayList<>();
        for (Exercise exercise: nameFiltered) {
            answer.add(new ExerciseDTO(exercise.getId(), exercise.getName(), exercise.getDescription()));
        }
        return answer;
    }

    public void exerciseSave(ExerciseDTO exerciseDTO, ExerciseWeightDTO exerciseWeightDTO) {
        exerciseRepository.save(new Exercise(exerciseDTO.getName(), exerciseDTO.getDescription()));
        exerciseWeightRepository.save(new ExerciseWeight(exerciseWeightDTO.getSets(), exerciseWeightDTO.getReps()));
    }

    public List<ExerciseDTO> getExerciseList() {
        List<ExerciseMuscle> list = exerciseMuscleRepository.findExerciseMuscleByWeightworkoutID(4L);
        List<Exercise> allExercises = exerciseRepository.findAll();
        List<ExerciseDTO> exercises = new ArrayList();

        for (Exercise exercise: allExercises) {
            if (isMatch(exercise, list)) {
                exercises.add(new ExerciseDTO(exercise.getId(), exercise.getName(), exercise.getDescription()));
            }
        }
        return exercises;
    }

    public List<ExerciseWeight> getAllExerciseWeight() {
        return exerciseWeightRepository.findAll();
    }

    public List<Exercise> getAllExercises() {
        return exerciseRepository.findAll();
    }

    private boolean isMatch(Exercise exercise, List<ExerciseMuscle> match) {
        for (ExerciseMuscle exerciseMuscle: match) {
            if (exercise.getId() == exerciseMuscle.getWeightworkoutID()) {
                return true;
            }
        }
        return false;
    }

    public ExerciseDTO getExercise() {
        System.out.println(exercises);
        return exercises;
    }

    public MuscleDTO getMuscle() {
        return muscleDTO;
    }

}
