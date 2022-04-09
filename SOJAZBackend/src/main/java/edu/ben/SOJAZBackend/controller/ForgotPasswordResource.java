package edu.ben.SOJAZBackend.controller;

import edu.ben.SOJAZBackend.model.Mail;
import edu.ben.SOJAZBackend.model.ResetPasswordToken;
import edu.ben.SOJAZBackend.model.dto.ForgotPasswordDTO;
import edu.ben.SOJAZBackend.model.user;
import edu.ben.SOJAZBackend.repository.ResetPasswordTokenRepository;
import edu.ben.SOJAZBackend.service.EmailService;
import edu.ben.SOJAZBackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;


@Controller
@RequestMapping("/forgot_password")
public class ForgotPasswordResource {
    @Autowired private UserService userService;
    @Autowired private ResetPasswordTokenRepository tokenRepository;
    @Autowired private EmailService emailService;

    @ModelAttribute("forgotpasswordForm")
    public ForgotPasswordDTO forgotPasswordDTO(){
        return new ForgotPasswordDTO();
    }

    @GetMapping
    public String displayForgotPasswordPage(){
        return "forgot_password";
    }

    public String processForgotPassword(@ModelAttribute("forgotpasswordform") @Valid ForgotPasswordDTO form, BindingResult result,
                                        HttpServletRequest request){
        if(result.hasErrors()){
            return "forgot_password";
        }
        user User = userService.getUserByEmail(form.getEmail());
        if(User == null){
            result.rejectValue("src/main/email", null, "Could not find account with that email.");
            return "forgot_password";
        }

        ResetPasswordToken token = new ResetPasswordToken();
        token.setToken(UUID.randomUUID().toString());
        token.setUser(User);
        token.setExpiryDate(30);
        tokenRepository.save(token);

        Mail mail = new Mail();
        mail.setFrom("no-reply@SOJAZFitness.com");
        mail.setTo(User.getEmail());
        mail.setSubject("Reset password Request");

        Map<String, Object> model = new HashMap<>();
        model.put("token", token);
        model.put("user", User);
        model.put("signature", "https://SOJAZFitness.com");
        String url = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort();
        model.put("resetUrl", url + "/resetpassword?token=" + token.getToken());
        mail.setModel(model);
        emailService.sendEmail(mail);
        return "redirect:/forgot-password?success";
    }


}
