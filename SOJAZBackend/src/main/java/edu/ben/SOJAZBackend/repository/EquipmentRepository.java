package edu.ben.SOJAZBackend.repository;

import edu.ben.SOJAZBackend.model.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EquipmentRepository extends JpaRepository<Equipment, Long> {
    public Equipment getEquipmentByName(String equipment_name);
    @Query(value = "select exercise from Exercise exercise " +
            "inner join exercise.equipments equipments " +
            "where equipments.name = :equipmentName")
    public List<Object> findAllExercisesByEquipmentName(String equipmentName);
}
