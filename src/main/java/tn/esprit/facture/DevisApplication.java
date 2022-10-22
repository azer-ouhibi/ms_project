package tn.esprit.facture;

import java.util.stream.Stream;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@EnableDiscoveryClient
@ComponentScan(basePackages = {"com.baeldung.dependency.exception"})
public class DevisApplication {
@GetMapping("/")
public String home() {
	return "welcome to devis";
}
	public static void main(String[] args) {
		SpringApplication.run(DevisApplication.class, args);
	}
	
}
