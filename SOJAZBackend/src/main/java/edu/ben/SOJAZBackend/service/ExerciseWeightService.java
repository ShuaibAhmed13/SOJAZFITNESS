//package edu.ben.SOJAZBackend.service;
//import edu.ben.SOJAZBackend.model.Exercise;
//import edu.ben.SOJAZBackend.model.ExerciseMuscle;
//import edu.ben.SOJAZBackend.model.Muscle;
//import edu.ben.SOJAZBackend.model.dto.ExerciseDTO;
//import edu.ben.SOJAZBackend.model.dto.ExerciseWeightDTO;
//import edu.ben.SOJAZBackend.model.dto.MuscleDTO;
//import edu.ben.SOJAZBackend.repository.ExerciseMuscleRepository;
//import edu.ben.SOJAZBackend.repository.ExerciseRepository;
//import edu.ben.SOJAZBackend.repository.MuscleRepository;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class ExerciseWeightService {
//
//    ExerciseRepository exerciseRepository;
//    ExerciseMuscleRepository exerciseMuscleRepository;
//    MuscleRepository muscleRepository;
//    ExerciseDTO exercises;
//    MuscleDTO muscles;
//
//
//    public ExerciseWeightService(ExerciseRepository exerciseRepository, ExerciseMuscleRepository exerciseMuscleRepository, MuscleRepository muscleRepository) {
//        this.exerciseRepository = exerciseRepository;
//        this.exerciseMuscleRepository = exerciseMuscleRepository;
//        this.muscleRepository = muscleRepository;
//    }
//
//    public List<ExerciseDTO> getFilteredName(String name) {
//        List<Exercise> nameFiltered= exerciseRepository.findByName(name);
//        List<ExerciseDTO> answer = new ArrayList<>();
//        for (Exercise exercise: nameFiltered) {
//            answer.add(new ExerciseDTO(exercise.getId(), exercise.getName(), exercise.getDescription(), exercise.getType()));
//        }
//        return answer;
//    }
//
//    public void exerciseSave(ExerciseDTO exerciseDTO) {
//        exerciseRepository.save(new Exercise(exerciseDTO.getName(), exerciseDTO.getDescription(),exerciseDTO.getType()));
//    }
//
//    /*public List<ExerciseDTO> getExerciseList() {
//        List<ExerciseMuscle> matchedExercise = exerciseMuscleRepository.findExerciseMuscleByWeightworkoutID(1l);
//        List<ExerciseDTO> answ = new ArrayList();
//        for (ExerciseMuscle exerciseMuscle: matchedExercise) {
//            Exercise exercise = exerciseRepository.getById(exerciseMuscle.getWeightworkoutID());
//            answ.add(new ExerciseDTO(exercise.getId(), exercise.getName(), exercise.getDescription()));
//        }
//        return answ;
//    }*/
//
//
//    public List<Exercise> getAllExercises() {
//        return exerciseRepository.findAll();
//    }
//
//    public List<ExerciseDTO> getTheExerciseList() {
//        List<ExerciseMuscle> listExercise = exerciseMuscleRepository.findExerciseMuscleByWeightworkoutID(getExercise().getId());
//        List<ExerciseMuscle> listMuscle = exerciseMuscleRepository.findExerciseMuscleByMuscleID(getMuscle().getId());
//        List<Exercise> allExercises = exerciseRepository.findAll();
//        List<Muscle> allMuscles = muscleRepository.findAll();
//        List<ExerciseDTO> matched = new ArrayList();
//
//        for (Exercise exercise: allExercises) {
//            for (Muscle muscle: allMuscles) {
//                if (isMatchExercise(exercise, listExercise) && isMatchMuscle(muscle, listMuscle)) {
//                    matched.add(new ExerciseDTO(exercise.getId(), exercise.getName(), exercise.getDescription(), exercise.getType()));
//                }
//            }
//        }
//        return matched;
//    }
//
//    private boolean isMatchExercise(Exercise exercise, List<ExerciseMuscle> match) {
//        for (ExerciseMuscle exerciseMuscle: match) {
//            if (exercise.getId() == exerciseMuscle.getWeightworkoutID()) {
//                return true;
//            }
//        }
//        return false;
//    }
//
//    private boolean isMatchMuscle(Muscle muscle, List<ExerciseMuscle> match) {
//        for (ExerciseMuscle exerciseMuscle: match) {
//            if (exerciseMuscle.getMuscleID() == muscle.getId()) {
//                return true;
//            }
//        }
//        return false;
//    }
//
//    public ExerciseDTO getExercise() {
//        return exercises;
//    }
//
//    public MuscleDTO getMuscle() {
//        return muscles;
//    }
//
//}
