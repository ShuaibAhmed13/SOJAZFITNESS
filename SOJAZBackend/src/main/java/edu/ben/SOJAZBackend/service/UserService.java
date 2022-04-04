package edu.ben.SOJAZBackend.service;

import edu.ben.SOJAZBackend.Exception.IncorrectPasswordException;
import edu.ben.SOJAZBackend.Exception.NotFoundException;
import edu.ben.SOJAZBackend.model.Food;
import edu.ben.SOJAZBackend.model.Muscle;
import edu.ben.SOJAZBackend.model.dto.userDTO;
import edu.ben.SOJAZBackend.model.user;
import edu.ben.SOJAZBackend.repository.UserRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    UserRepository userRepository;
    //userDTO loggedInUser;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

//    public userDTO login(String username, String password) {
//        user user = userRepository.findByUsername(username);
//        System.out.println(user);
//        if (user == null) {
//            throw new NotFoundException();
//        } else if (!user.getPassword().equals(password)) {
//            throw new IncorrectPasswordException();
//        } else {
//            loggedInUser = new userDTO(user.getId(), user.getEmail(), user.getUsername(), user.getFirstName(), user.getLastName(), user.getPassword());
//            System.out.println("Get logged1 = " + loggedInUser);
//            return new userDTO(user.getId(), user.getEmail(), user.getUsername(), user.getFirstName(), user.getLastName(), user.getPassword());
//        }
//    }
    public String register(userDTO userDTO){
            if(userRepository.existsByEmail(userDTO.getEmail())) {
                System.out.println("Email already exists");
                return "User by this email already exists!";
            } else if(userRepository.existsByUsername(userDTO.getUsername())) {
                System.out.println("username is taken");
                return "This username is taken!";
            }
            else {
                Long newID = userRepository.count() + 1;
                System.out.println("The new id number is " + newID);
                userRepository.save(new user(newID, userDTO.getEmail(), userDTO.getUsername(), userDTO.getFirstName(), userDTO.getLastName(), userDTO.getPassword(), userDTO.getEmailToken()));
                return "Registered Successfully";
            }
    }

    public userDTO getLoggedInUser(String username) {
        user user = userRepository.findByUsername(username).get();
        return new userDTO(user.getId(), user.getEmail(), user.getUsername(), user.getFirstName(), user.getLastName(), user.getRoles(), user.getEmailToken());
    }

//    public userDTO getLoggedInUser() {
//        System.out.println(loggedInUser);
//
//        return loggedInUser;
//    }

    public boolean getActiveByUsername(String username) {
        user user = userRepository.getByUsername(username);
        return user.getActive();
    }

    public List<userDTO> getAllUsers() {
        List<user> users = userRepository.findAll();
        List<userDTO> newUsers = new ArrayList<>();
        for(user u: users) {
            newUsers.add(new userDTO(u.getId(), u.getEmail(), u.getUsername(), u.getFirstName(), u.getLastName(), u.getActive(), u.getRoles(), u.getEmailToken()));;
        }
        return newUsers;
    }

    public user getUserById(Long user_id) {return userRepository.findById(user_id).get();}

    public user getUserByEmail(String email) {return userRepository.getByEmail(email);}

    public user addUser(user user) {return userRepository.save(user);}

    public user updateUser(Long user_id, user user) {
        user.setId(user_id);
        return userRepository.save(user);
    }

    public void deleteUser(Long user_id) {userRepository.deleteById(user_id);}

    //JAYC
    public void updateResetPassword(String newPassword, String email) throws UsernameNotFoundException {
        user userEmailPass = userRepository.findByEmail(email);
        if(userEmailPass != null){
            userEmailPass.setEmailToken(newPassword);
            userRepository.save(userEmailPass);
        } else {
            throw new UsernameNotFoundException("Could not find user with that email" + email);
        }
    }

    public List<user> getByEmail(String emailToken){
        return userRepository.findByEmailToken(emailToken);
    }

  /*  public void updatePassword(user User, String newPassword) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(newPassword);
        User.setPassword(encodedPassword);

        User.setEmailToken(null);
        userRepository.save(User);
    }*/

    public List<user>getUsersEmail(){
        return userRepository.findAll();
    }

  /*  public String updateMuscle(Long muscleId, Muscle muscle) {
        try {
            muscle.setId(muscleId);
            muscleRepository.save(muscle);
            return "Muscle successfully updated.";
        } catch (Exception ex) {
            return "Muscle could not be updated.";
        }
    }*/

    public String updatePassword(String password, user User){
        try{
            User.setPassword(password);
            userRepository.save(User);
            return "Password Set!";
        } catch (Exception ex) {
            return  "Password Error";
        }


    }
}
