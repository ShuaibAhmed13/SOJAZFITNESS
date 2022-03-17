package edu.ben.SOJAZBackend.service;

import edu.ben.SOJAZBackend.model.dto.userProfileDTO;
import edu.ben.SOJAZBackend.model.userProfileModel;
import edu.ben.SOJAZBackend.repository.userProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class userProfileService {
    @Autowired
    userProfileRepository userProfileRepository;

    public List<userProfileModel> getAllUserProfile() {return userProfileRepository.findAll();}

    public userProfileModel getUserProfileById(Long userProfile_id) {return userProfileRepository.getById(userProfile_id);}



    public userProfileModel getUserProfileByName(String userProfile_name) {
        return userProfileRepository.getUserProfileByName(userProfile_name);
    }

    //Update
    public String updateUserProfile (userProfileModel userProfile , Long userProfile_id){
        try{
            userProfile.setId(userProfile_id);
            userProfileRepository.save(userProfile);
            return "Current Weight Succesfully Changed!";
        }catch (Exception ex) {
            return "Current Weight could not be changed.";
        }
    }

    public String deleteUserProfile(Long userprofileId) {
        try{
            userProfileRepository.deleteById(userprofileId);
            return "User Profile Successfully Deleted";
        } catch(Exception ex) {
            return "User Profile could not be deleted";
        }
    }

    public String addUserProfile(userProfileModel userProfile) {
        try {
            userProfileRepository.save(userProfile);
            return "User Profile Successfully added";
        } catch (Exception ex) {
            return "User Profile could not be added to the database";
        }
    }



 /*   public userProfileModel updateUserProfile(Long userP_id, userProfileModel userProf) {
        userProf.setId(userP_id);
        return userProfileRepository.save(userProf);
    }

    public List<userProfileDTO> getAllUserProfiles() {
        List<userProfileModel> userProfs = userProfileRepository.findAll();
        List<userProfileDTO> newUserProfs = new ArrayList<>();
        for(userProfileModel up: userProfs) {
            newUserProfs.add(new userProfileDTO(up.getId(), up.getCurrentWeight(), up.getGoalWeight(), up.getLifestyle(), up.getHeight(), up.getUser()));
        }
        return newUserProfs;
    }*/
}
