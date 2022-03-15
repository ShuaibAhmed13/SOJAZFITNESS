package edu.ben.SOJAZBackend.controller;
import edu.ben.SOJAZBackend.model.userProfileModel;
import edu.ben.SOJAZBackend.service.userProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/userProfile")
public class userProfileResource {

    @Autowired
    userProfileService userProfileService;

    @GetMapping("/getalluserprofile")
    public List<userProfileModel> getAllUserProfile() {return userProfileService.getAllUserProfile();}

    @GetMapping("/getuserprofileid")
    public userProfileModel getUserProfileId(@PathVariable Long userProfile_Id) {
        return userProfileService.getUserProfileById(userProfile_Id);
    }

    @GetMapping("/getuserprofilebyname/{userprofile_name}")
    public userProfileModel getUserProfileByName(@PathVariable String userProfile_name) {
        return userProfileService.getUserProfileByName(userProfile_name);
    }

    //ADMIN
    @PostMapping("/crud/createuserprofile")
    public ResponseEntity<String> createUserProfile(@RequestBody userProfileModel userProfile) {
        return new ResponseEntity<>(userProfileService.addUserProfile(userProfile), HttpStatus.CREATED);
    }

    //Update
    @PutMapping("/updateUserProfile/{user_id}")
    public ResponseEntity<String> updateUserProfile(@PathVariable Long user_id, @RequestBody userProfileModel userProfile) {
        return new ResponseEntity<>(userProfileService.updateUserProfile(userProfile, user_id), HttpStatus.OK);
    }

    @DeleteMapping("/crud/deleteuserprofile/{user_id}")
    public ResponseEntity<String> deleteUserProfile(@PathVariable Long user_id) {
        return new ResponseEntity<>(userProfileService.deleteUserProfile(user_id), HttpStatus.OK);
    }
}
