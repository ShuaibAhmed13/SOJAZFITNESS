package edu.ben.SOJAZBackend.controller;

import edu.ben.SOJAZBackend.model.Muscle;
import edu.ben.SOJAZBackend.model.dto.userDTO;
import edu.ben.SOJAZBackend.model.user;
import edu.ben.SOJAZBackend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/users", produces = "application/json")
public class UserResource {

    private final UserService userService;

    UserResource(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/login")
    public String login() {

        return "Login Successful";
    }

    @GetMapping("/logout")
    public String logout() {
       // Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        SecurityContextHolder.clearContext();
        return "Logout Successful";
    }

    @GetMapping("/getuseractivebyusername/{username}")
    public boolean getActiveByUsername(@PathVariable String username) {
        return this.userService.getActiveByUsername(username);
    }
//    @GetMapping("/login/{username}/{password}")
//    public userDTO login(@PathVariable String username, @PathVariable String password) {
//        return this.userService.login(username, password);
//    }

//    @GetMapping("/getloggedinuser")
//    public userDTO getLoggedInUser() {
//        return this.userService.getLoggedInUser();
//    }


    @PostMapping("/register")
    public String registration(@RequestBody userDTO userDTO) {
        return this.userService.register(userDTO);
    }



    //Following are restricted crud operations
    //Available only to Admin
    @GetMapping("/crud/getUsers")
    public ResponseEntity<List<userDTO>> getUsers() {
        return new ResponseEntity(userService.getAllUsers(), HttpStatus.OK);
    }

    @GetMapping("/crud/getuserbyid/{user_id}")
    public ResponseEntity<user> getUserById(@PathVariable Long user_id) {
        return new ResponseEntity<>(this.userService.getUserById(user_id), HttpStatus.OK);
    }

    @GetMapping("/crud/getuserbyemail/{email}")
    public ResponseEntity<user> getUserByEmail(@PathVariable String email) {
        return new ResponseEntity<>(this.userService.getUserByEmail(email), HttpStatus.OK);
    }
    @GetMapping("/crud/getLoggedInUser/{username}")
    public ResponseEntity<userDTO> getLoggedInUser(@PathVariable String username) {
        return new ResponseEntity<>(this.userService.getLoggedInUser(username), HttpStatus.OK);
    }

    @PostMapping("/crud/createuser")
    public ResponseEntity<user> createUser(@RequestBody user user) {
        return new ResponseEntity<>(this.userService.addUser(user), HttpStatus.CREATED);
    }

    @PutMapping("/crud/updateuser/{user_id}")
    public ResponseEntity<user> updateUser(@PathVariable Long user_id, @RequestBody user user) {
        return new ResponseEntity<>(this.userService.updateUser(user_id, user), HttpStatus.OK);
    }
    @GetMapping("/crud/suspenduser/{user_id}")
    public ResponseEntity<user> suspendUser(@PathVariable Long user_id) {
        user user = this.userService.getUserById(user_id);
        user.setActive(false);
        return new ResponseEntity<>(this.userService.updateUser(user_id, user), HttpStatus.OK);
    }
    @GetMapping("/crud/reactivateuser/{user_id}")
    public ResponseEntity<user> reactivateUser(@PathVariable Long user_id) {
        user user = this.userService.getUserById(user_id);
        user.setActive(true);
        return new ResponseEntity<>(this.userService.updateUser(user_id, user), HttpStatus.OK);
    }
    @DeleteMapping("/crud/deleteuserbyid/{user_id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long user_id) {
        this.userService.deleteUser(user_id);
        return new ResponseEntity("Deleted Successfully!", HttpStatus.OK);
    }

/*    @GetMapping(value= "getUser/{emailToken}")
    public List<user> getEmail(@PathVariable String emailToken){
        return userService.getByEmail(emailToken);
    }*/

    @GetMapping(value="/getAll")
    public List<user> getAllEmail(){
        return userService.getUsersEmail();
    }

  /*  @PutMapping(value = "/crud/updatemuscle/{muscleId}")
    public ResponseEntity<String> updateMuscle(@PathVariable Long muscleId, @RequestBody Muscle muscle) {
        return new ResponseEntity<String>(muscleService.updateMuscle(muscleId, muscle), HttpStatus.OK);
    }*/

   /* @PutMapping(value = "/crud/updatePassword/{password}")
    public ResponseEntity<String> updatePassword(@PathVariable String password, @RequestBody user User) {
        return new ResponseEntity<String>(userService.updatePassword(password, User), HttpStatus.OK);
    }*/
}
