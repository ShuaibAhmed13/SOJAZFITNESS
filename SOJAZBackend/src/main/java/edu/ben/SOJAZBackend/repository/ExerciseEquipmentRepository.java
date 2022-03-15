package edu.ben.SOJAZBackend.repository;

import edu.ben.SOJAZBackend.model.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExerciseEquipmentRepository extends JpaRepository <Equipment, Long> {
    List<Equipment> findAll();
}
