package com.esprit.constat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.esprit.constat.entities.Constat;
import com.esprit.constat.services.IConstat;
@SpringBootApplication
public class ConstatMicroServiceApplication  implements CommandLineRunner {
	@Autowired
	IConstat constatService;
	public static void main(String[] args) {
		SpringApplication.run(ConstatMicroServiceApplication.class, args);
	}
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
		
		
		System.out.println("***************************");
		
		
		constatService.retrieveAllConstats().forEach(p->{
			System.out.println(p.toString());
		});
		
		System.out.println("***************************");
		
		
		
		
	}
}
