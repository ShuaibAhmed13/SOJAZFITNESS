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
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/users", produces = "application/json")
public class UserResource {

    private final UserService userService;

    UserResource(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/login/{username}/{password}")
    public userDTO login(@PathVariable String username, @PathVariable String password) {
        return this.userService.login(username, password);
    }

    @GetMapping("/getloggedinuser")
    public userDTO getLoggedInUser() {
        return this.userService.getLoggedInUser();
    }

    @GetMapping("/getUsers")
    public List<user> getUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/getuserbyid/{user_id}")
    public user getUserById(@PathVariable Long user_id) {
        return this.userService.getUserById(user_id);
    }

    @PostMapping("/register")
    public void registration(@RequestBody userDTO userDTO) {
        this.userService.register(userDTO);

    }
}
