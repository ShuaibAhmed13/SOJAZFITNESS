//package edu.ben.SOJAZBackend.service;
//
//import edu.ben.SOJAZBackend.model.Exercise;
//import edu.ben.SOJAZBackend.model.ExerciseMuscle;
//import edu.ben.SOJAZBackend.model.Muscle;
//import edu.ben.SOJAZBackend.model.dto.ExerciseDTO;
//import edu.ben.SOJAZBackend.model.dto.MuscleDTO;
//import edu.ben.SOJAZBackend.repository.ExerciseMuscleRepository;
//import edu.ben.SOJAZBackend.repository.ExerciseRepository;
//import edu.ben.SOJAZBackend.repository.MuscleRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Service
//public class MuscleService {
//
//    @Autowired
//    MuscleRepository muscleRepository;
//    ExerciseMuscleRepository exerciseMuscleRepository;
//    ExerciseRepository exerciseRepository;
//
//    public MuscleService(MuscleRepository muscleRepository, ExerciseMuscleRepository exerciseMuscleRepository, ExerciseRepository exerciseRepository) {
//        this.muscleRepository = muscleRepository;
//        this.exerciseMuscleRepository = exerciseMuscleRepository;
//        this.exerciseRepository = exerciseRepository;
//    }
//
//
//    public List<Muscle> getAllMuscles() { return muscleRepository.findAll(); }
//
//    public List<MuscleDTO> getMuscleList() {
//        List<ExerciseMuscle> matched = exerciseMuscleRepository.findExerciseMuscleByMuscleID(1L);
//        List<MuscleDTO> answ = new ArrayList();
//        for (ExerciseMuscle exerciseMuscle: matched) {
//                Muscle muscle = muscleRepository.getById(exerciseMuscle.getMuscleID());
//            answ.add(new MuscleDTO(muscle.getId(), muscle.getMuscleName(), muscle.getMuscleGroup()));
//        }
//        return answ;
//    }
//
//    public List<MuscleDTO> getFilteredData(String muscle) {
//        List<Muscle> muscleFiltered= muscleRepository.findAllByMuscleName(muscle);
//        List<MuscleDTO> answer = new ArrayList<>();
//        List<Muscle> allMuscles = muscleRepository.findAll();
//        List<Exercise> allExercises = exerciseRepository.findAll();
//        List<ExerciseMuscle> listExercise = exerciseMuscleRepository.findExerciseMuscleByWeightworkoutID(1L);
//        List<ExerciseMuscle> listMuscle = exerciseMuscleRepository.findExerciseMuscleByMuscleID(1L);
//
//        for (Muscle muscle1: muscleFiltered) {
//            for(Exercise exercise: allExercises) {
//                for(Muscle muscles: allMuscles) {
//                    if (isMatchExercise(exercise, listExercise) && isMatchMuscle(muscles, listMuscle)) {
//                        answer.add(new MuscleDTO(muscle1.getId(), muscle1.getMuscleName(), muscle1.getMuscleGroup()));
//                    }
//                }
//            }
//        }
//        return answer;
//    }
//
//    public List<MuscleDTO> getTheMuscleList() {
//        List<ExerciseMuscle> listExercise = exerciseMuscleRepository.findExerciseMuscleByWeightworkoutID(1L);
//        List<ExerciseMuscle> listMuscle = exerciseMuscleRepository.findExerciseMuscleByMuscleID(1L);
//        List<Exercise> allExercises = exerciseRepository.findAll();
//        List<Muscle> allMuscles = muscleRepository.findAll();
//        List<MuscleDTO> matched = new ArrayList();
//
//        for (Exercise exercise: allExercises) {
//            for (Muscle muscle: allMuscles) {
//                if (isMatchExercise(exercise, listExercise) && isMatchMuscle(muscle, listMuscle)) {
//                    matched.add(new MuscleDTO(muscle.getId(), muscle.getMuscleName(), muscle.getMuscleGroup()));
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
//}
