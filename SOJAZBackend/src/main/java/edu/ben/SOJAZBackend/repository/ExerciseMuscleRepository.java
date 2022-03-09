//package edu.ben.SOJAZBackend.repository;
//
//import edu.ben.SOJAZBackend.model.ExerciseMuscle;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//
//@Repository
//public interface ExerciseMuscleRepository extends JpaRepository<ExerciseMuscle, Long> {
//    ExerciseMuscle findExerciseMuscleByWeightworkoutIDAndMuscleID(Long weighworkoutID, Long muscleID);
//    List<ExerciseMuscle> findExerciseMuscleByWeightworkoutID(Long id);
//    List<ExerciseMuscle> findExerciseMuscleByMuscleID(Long id);
//    public boolean existsByWeightworkoutID(Long id);
//}
