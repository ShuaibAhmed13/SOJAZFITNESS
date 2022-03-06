package edu.ben.SOJAZBackend;

import edu.ben.SOJAZBackend.repository.UserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackageClasses = UserRepository.class)
public class SojazBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SojazBackendApplication.class, args);
	}


}
