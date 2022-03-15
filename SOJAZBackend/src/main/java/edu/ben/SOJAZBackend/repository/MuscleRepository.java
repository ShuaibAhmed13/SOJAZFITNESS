package edu.ben.SOJAZBackend.repository;

import edu.ben.SOJAZBackend.model.Muscle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public interface MuscleRepository extends JpaRepository<Muscle, Long> {
    public Optional<Muscle> findById(Long id);

    @Query(value = "select exercise from Exercise exercise " +
            "inner join exercise.muscles muscles " +
            "where muscles.muscleName = :muscleName")
    public List<Object> findAllExercisesByMuscleName(String muscleName);


    @Query(value = "select muscle from Muscle muscle")
    public List<Object> findAllMuscles();
}
