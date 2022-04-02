package edu.ben.SOJAZBackend.controller;

import edu.ben.SOJAZBackend.model.user;
import edu.ben.SOJAZBackend.service.UserService;
import edu.ben.SOJAZBackend.service.Utility;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;

@Controller
public class ForgotPasswordResource {

    private JavaMailSender mailSender;
    @Autowired
    private UserService userService;

    @GetMapping("/forgot_password")
    public String showForgotPasswordForm(Model model) {
        model.addAttribute("pagetitle", "Forgot Password");
        return "forgot_password_form";
    }

    @PostMapping("/forgot_password")
    public String processForgotPassword(HttpServletRequest request, Model model) {
        String email = request.getParameter("email");
        String token = RandomString.make(30);

        try {
            userService.updateResetPassword(token, email);
            String resetPassLink = Utility.getSiteURL(request) + "/reset_password?token=" + token;
            sendEmail(email, resetPassLink);
            model.addAttribute("Message","We have Successfully sent a Reset Password Link to your email.");
        } catch(UsernameNotFoundException ex) {
            model.addAttribute("error", ex.getMessage());
        } catch (MessagingException | UnsupportedEncodingException e) {
            model.addAttribute("error", "There was an error sending your email.");
        }

        return "forgot_password_form";
    }

    public void sendEmail(String recipientEmail, String link) throws MessagingException, UnsupportedEncodingException{
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom("contact@shopme.com", "Shopme Support");
        helper.setTo(recipientEmail);

        String subject = "Here's the link to reset your password";

        String content = "<p>Hello,</p>"
                + "<p>You have requested to reset your password.</p>"
                + "<p>Click the link below to change your password:</p>"
                + "<p><a href=\"" + link + "\">Change my password</a></p>"
                + "<br>"
                + "<p>Ignore this email if you do remember your password, "
                + "or you have not made the request.</p>";

        helper.setSubject(subject);

        helper.setText(content, true);

        mailSender.send(message);
    }

    @GetMapping("/forgot_password")
    public String showResetPasswordForm(@Param(value = "password") String password, Model model) {
        user User = userService.getByResetPassword(password);
        model.addAttribute("password", password);

        if(User == null){
            model.addAttribute("message", "Invalid Password");
            return "message";
        }
        return "forgot_password_form" ;
    }

    @PostMapping("/forgot_password")
    public String processResetPassword(HttpServletRequest request, Model model) {
        String token = request.getParameter("token");
        String password = request.getParameter("password");

        user User = userService.getByResetPassword(token);
        model.addAttribute("model","Reset Password");

        if(User == null){
            model.addAttribute("message", "Invalid Token");
            return "message";

        }else{
            userService.updatePassword(User, password);

            model.addAttribute("message", "You have successfully reset your password.");
        }
        return "message";
    }

}
