package com.esprit.rendezVous;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.esprit.rendezVous.service.IRendezVous;

@SpringBootApplication
public class RendezVousMicroServiceApplication   implements CommandLineRunner {
	@Autowired
	IRendezVous rendezVousService;

	public static void main(String[] args) {
		SpringApplication.run(RendezVousMicroServiceApplication.class, args);
	}
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
		
		
		System.out.println("***************************");
		
		
		rendezVousService.retrieveAllRendezVous().forEach(p->{
			System.out.println(p.toString());
		});
		
		System.out.println("***************************");
		
		
		
		
	}
}
