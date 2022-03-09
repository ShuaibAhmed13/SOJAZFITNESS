package edu.ben.SOJAZBackend.repository;

import edu.ben.SOJAZBackend.model.Exercise;
import edu.ben.SOJAZBackend.model.Muscle;
import edu.ben.SOJAZBackend.model.dto.ExerciseMuscleDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise, Long> {
    public List<Exercise> findByName(String name);
    public List<Exercise> findAll();

//    @Query(value = "select new edu.ben.SOJAZBackend.model.dto.ExerciseMuscleDTO(exercise.name as exercise_name, exercise.description as description, exercise.type as type, muscles.name as muscle_name, muscles.musclegroup as musclegroup)\n" +
//            "            FROM sojazdummyschema.exercise , sojazdummyschema.muscles, sojazdummyschema.exercise_muscles\n" +
//            "            where exercise.id = exercise_muscles.exercise_id \n" +
//            "            and exercise_muscles.muscles_id = muscles.id \n" +
//            "            and exercise_id = ?", nativeQuery = true)
//    public List<Object> findAllExercisesAndMusclesByExerciseId(Long exercise_id);
//
//    @Query(value = "select exercise.name as exercise_name, exercise.description, exercise.type, muscles.name as muscle_name, muscles.musclegroup\n" +
//            "            FROM sojazdummyschema.exercise , sojazdummyschema.muscles, sojazdummyschema.exercise_muscles\n" +
//            "            where exercise.id = exercise_muscles.exercise_id \n" +
//            "            and exercise_muscles.muscles_id = muscles.id \n" +
//            "            and muscles_id = ?;", nativeQuery = true)
//    public List<Object> findAllExercisesAndMusclesByMuscleId(Long muscle_id);




    //Find exercises that workout the provided muscle name
    public List<Exercise> findByMusclesMuscleName(String muscle_name);

    //Find exercises that workout a muscle by muscle id
    public List<Exercise> findByMusclesId(Long muscle_id);

    //Find exercises by equipment name
    public List<Exercise> findByEquipmentsName(String equipment_name);

    //Find exercises by equipment id
    public List<Exercise> findByEquipmentsId(Long equipment_id);
}
