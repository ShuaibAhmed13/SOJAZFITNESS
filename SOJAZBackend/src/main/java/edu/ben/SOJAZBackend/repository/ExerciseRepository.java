package edu.ben.SOJAZBackend.repository;

import edu.ben.SOJAZBackend.model.Exercise;
import edu.ben.SOJAZBackend.model.dto.ExerciseMuscleDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise, Long> {
    public List<Exercise> findByName(String name);
    public List<Exercise> findAll();

    @Query(value = "select exercise from Exercise exercise " +
            "inner join exercise.muscles")
    public List<Object> findAllExercises();


    @Query(value = "select exercise from Exercise exercise " +
            "inner join exercise.muscles muscles " +
            "where muscles.id = :muscleId")
    public List<Exercise> findAllExercisesByMuscleId(Long muscleId);


}
