package edu.ben.SOJAZBackend.controller;
import edu.ben.SOJAZBackend.model.UserProfileModel;
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
    public List<UserProfileModel> getAllUserProfile() {return userProfileService.getAllUserProfile();}

    @GetMapping("/getuserprofilebyid/{userProfile_Id}")
    public UserProfileModel getUserProfileById(@PathVariable Long userProfile_Id) {
        return userProfileService.FindUserProfileById(userProfile_Id);
    }


    @GetMapping("/getuserprofilebyuserid/{user_id}")
    public UserProfileModel FindUserProfileModelByUserId(@PathVariable Long user_id) {
        return userProfileService.FindUserProfileModelByUserId(user_id);
    }

    //ADMIN
    @PostMapping("/crud/createuserprofile")
    public ResponseEntity<String> CreateUserProfile(@RequestBody UserProfileModel userProfile) {
        return new ResponseEntity<>(userProfileService.AddUserProfile(userProfile), HttpStatus.CREATED);
    }

    //Update
    @PutMapping("/updateUserProfile/{user_id}")
    public ResponseEntity<String> UpdateUserProfile(@PathVariable Long user_id, @RequestBody UserProfileModel userProfile) {
        return new ResponseEntity<>(userProfileService.UpdateUserProfile(userProfile, user_id), HttpStatus.OK);
    }

    @DeleteMapping("/crud/deleteuserprofile/{user_id}")
    public ResponseEntity<String> DeleteUserProfile(@PathVariable Long user_id) {
        return new ResponseEntity<>(userProfileService.DeleteUserProfile(user_id), HttpStatus.OK);
    }
}
