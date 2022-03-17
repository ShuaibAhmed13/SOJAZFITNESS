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

    @GetMapping("/getAllUserProfile")
    public List<userProfileModel> getAllUserProfile() {return userProfileService.getAllUserProfile();}

    @GetMapping("/getuserprofilebyid/{userProfile_Id}")
    public userProfileModel getUserProfileById(@PathVariable Long userProfile_Id) {
        return userProfileService.findUserProfileById(userProfile_Id);
    }


    @GetMapping("/getuserprofilebyuserid/{user_id}")
    public userProfileModel finduserProfileModelByUserId(@PathVariable Long user_id) {
        return userProfileService.finduserProfileModelByUserId(user_id);
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
