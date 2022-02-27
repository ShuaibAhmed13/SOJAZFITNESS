package edu.ben.SOJAZBackend.controller;

import edu.ben.SOJAZBackend.Exception.NotFoundException;
import edu.ben.SOJAZBackend.model.Food;
import edu.ben.SOJAZBackend.model.dto.userDTO;
import edu.ben.SOJAZBackend.model.user;
import edu.ben.SOJAZBackend.repository.UserRepository;
import edu.ben.SOJAZBackend.service.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
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

    @GetMapping("/getLoggedInUser/{username}")
    public userDTO getLoggedInUser(@PathVariable String username) {
        return this.userService.getLoggedInUser(username);
    }
//    @GetMapping("/login/{username}/{password}")
//    public userDTO login(@PathVariable String username, @PathVariable String password) {
//        return this.userService.login(username, password);
//    }

//    @GetMapping("/getloggedinuser")
//    public userDTO getLoggedInUser() {
//        return this.userService.getLoggedInUser();
//    }

    @GetMapping("/getUsers")
    public List<user> getUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/register")
    public void registration(@RequestBody userDTO userDTO) {
        this.userService.register(userDTO);
    }
    @GetMapping("/getuserbyid/{user_id}")
    public user getUserById(@PathVariable Long user_id) {
        return this.userService.getUserById(user_id);
    }
}
