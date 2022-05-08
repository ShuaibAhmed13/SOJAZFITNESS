package edu.ben.SOJAZBackend.service;

import edu.ben.SOJAZBackend.model.UserProfileModel;
import edu.ben.SOJAZBackend.repository.userProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class userProfileService {
    @Autowired
    userProfileRepository userProfileRepository;

    public List<UserProfileModel> getAllUserProfile() {
        return userProfileRepository.findAll();
    }

    public UserProfileModel FindUserProfileById(Long userProfId) {
        return userProfileRepository.findByUserId(userProfId);
    }


    public UserProfileModel FindUserProfileModelByUserId(Long user_id) {
        return userProfileRepository.findUserProfileModelByUserId(user_id);
    }
    //Update
    public String UpdateUserProfile(UserProfileModel userProfile, Long userProfile_id) {
        try {
            userProfile.setId(userProfile_id);
            userProfileRepository.save(userProfile);
            return "Current Profile Succesfully Changed!";
        } catch (Exception ex) {
            return "Current Profile could not be changed.";
        }
    }

    public String DeleteUserProfile(Long userprofileId) {
        try {
            userProfileRepository.deleteById(userprofileId);
            return "User Profile Successfully Deleted";
        } catch (Exception ex) {
            return "User Profile could not be deleted";
        }
    }

    public String AddUserProfile(UserProfileModel userProfile) {
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
