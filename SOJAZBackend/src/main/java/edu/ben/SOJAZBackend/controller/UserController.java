package edu.ben.SOJAZBackend.controller;

import edu.ben.SOJAZBackend.Entity.User;
import edu.ben.SOJAZBackend.Exception.NotFoundException;
import edu.ben.SOJAZBackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/users", produces = "application/json")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/allusers")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/userbyid/{email}")
    public ResponseEntity<User> getUserByEmail(@PathVariable(value = "email") String email) throws NotFoundException {
        User user = userRepository.findById(email).orElseThrow(() -> new NotFoundException("User with this email does not exist" + email));
        return ResponseEntity.ok().body(user);
    }

    @PostMapping("/user")
    public User createUser(@RequestBody User user) {
        System.out.println(user.toString());
        return userRepository.save(user);

    }


    @PutMapping("/users/{email}")
    public ResponseEntity<User> updateUser(@PathVariable(value = "email") String email, @RequestBody User userObject) throws NotFoundException {
        User user = userRepository.findById(email).orElseThrow(() -> new ChangeSetPersister.NotFoundException("User with this email does not exist" + email));
        user.setUsername(userObject.getUsername());
        user.setFirstname(userObject.getFirstname());
        user.setLastname(userObject.getLastname());
        user.setPassword(userObject.getPassword());
        final User addUser = userRepository.save(user);
        return ResponseEntity.ok(addUser);
    }
}
