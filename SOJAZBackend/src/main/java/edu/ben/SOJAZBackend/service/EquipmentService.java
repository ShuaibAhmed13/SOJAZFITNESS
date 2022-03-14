package edu.ben.SOJAZBackend.service;

import edu.ben.SOJAZBackend.model.Equipment;
import edu.ben.SOJAZBackend.repository.EquipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipmentService {

    @Autowired
    EquipmentRepository equipmentRepository;

    public List<Equipment> getAllEquipment(){
        return equipmentRepository.findAll();
    }

    public Equipment getEquipmentById(Long equipment_id) {
        return equipmentRepository.getById(equipment_id);
    }

    public Equipment getEquipmentByName(String equipment_name) {
        return equipmentRepository.getEquipmentByName(equipment_name);
    }

    public String createEquipment(Equipment equipment) {
        try {
            equipmentRepository.save(equipment);
            return "Equipment successfully added to the database.";
        }catch (Exception ex) {
            return "Equipment could not be added to the database.";
        }
    }

    public String updateEquipment(Equipment equipment, Long equipment_id) {
        try {
            equipment.setId(equipment_id);
            equipmentRepository.save(equipment);
            return "Equipment successfully updated.";
        } catch (Exception ex) {
            return "Equipment could not be updated.";
        }
    }

    public String deleteEquipment(Long equipment_id) {
        try {
            equipmentRepository.deleteById(equipment_id);
            return "Equipment successfully deleted.";
        } catch (Exception ex) {
            return "Equipment could not be deleted.";
        }
    }

    public List <Object>findAllExercisesByEquipmentName(String equipmentName){
        return equipmentRepository.findAllExercisesByEquipmentName(equipmentName);
    }

}
