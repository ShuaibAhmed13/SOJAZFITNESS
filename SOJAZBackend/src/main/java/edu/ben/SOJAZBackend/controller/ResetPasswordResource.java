package edu.ben.SOJAZBackend.controller;

import edu.ben.SOJAZBackend.model.ResetPasswordToken;
import edu.ben.SOJAZBackend.model.dto.ResetPasswordDTO;
import edu.ben.SOJAZBackend.model.user;
import edu.ben.SOJAZBackend.repository.ResetPasswordTokenRepository;
import edu.ben.SOJAZBackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;


import javax.validation.Valid;

@Controller
@RequestMapping("/reset_password")
public class ResetPasswordResource {
    @Autowired private UserService userService;
    @Autowired private ResetPasswordTokenRepository tokenRepository;
    @Autowired private BCryptPasswordEncoder passwordEncoder;

    @ModelAttribute("passwordResetForm")
    public ResetPasswordDTO resetPassword(){
        return new ResetPasswordDTO();
    }

    @GetMapping
    public String displayResetPasswordPage(@RequestParam(required = false) String token, Model model){
        ResetPasswordToken resetToken = tokenRepository.findByToken(token);
        if(resetToken == null){
            model.addAttribute("error", "Could not find password reset token.");
        }else if(resetToken.isExpired()){
            model.addAttribute("error", "Token has expired, please request a new password reset.");
        } else{
            model.addAttribute("token", resetToken.getToken());
        }

        return "reset_password";
    }

    @PostMapping
    @Transactional
    public String handleResetPassword(@ModelAttribute("ResetPasswordForm") @Valid ResetPasswordDTO form, BindingResult result,
                                      RedirectAttributes redirectAttributes){
        if(result.hasErrors()){
            redirectAttributes.addFlashAttribute(BindingResult.class.getName() + ".resetPasswordForm", result);
            redirectAttributes.addFlashAttribute("resetPasswordForm", form);
            return "redirect:/reset-password?token=" + form.getToken();
        }
        ResetPasswordToken token = tokenRepository.findByToken(form.getToken());
        user User = token.getUser();
        String updatedPassword = passwordEncoder.encode(form.getPassword());
        userService.updatePassword(updatedPassword, User.getId());
        tokenRepository.delete(token);
        return "redirect:/login?resetSuccess";
    }


}
