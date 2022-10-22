package com.esprit.rendezVous.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.esprit.rendezVous.service.IRendezVous;
import  com.esprit.rendezVous.entities.RendezVous;

@RestController
@RequestMapping("/RendezVous")
public class RendezVousController {



	@Autowired
	IRendezVous RendezVousService;
	
	@PostMapping("/add-RendezVous")
	@ResponseBody
	public void addRendezVous(@RequestBody RendezVous RendezVous) {
		RendezVousService.addRendezVous(RendezVous);
	}
	
	@GetMapping("/liste-RendezVous")
	@ResponseBody
	List<RendezVous> listedeBoutiques(){
		return RendezVousService.retrieveAllRendezVous();
	}
	
	@GetMapping("/One-RendezVous/{RendezVous-id}")
	@ResponseBody
	RendezVous retrieveRendezVous(@PathVariable("RendezVous-id") Long RendezVousId) {
		return RendezVousService.retrieveRendezVous(RendezVousId);
	}
	
	// http://localhost:8089/SpringMVC/client/modify-client

	@PutMapping("/modify-RendezVous")
	@ResponseBody
	public RendezVous modifyClient(@RequestBody RendezVous RendezVous) {

	return RendezVousService.updateRendezVous(RendezVous);

	}
	
	// http://localhost:8089/SpringMVC/RendezVous/remove-RendezVous/{RendezVous-id}

	@DeleteMapping("/remove-RendezVous/{RendezVous-id}")
	@ResponseBody
	public void removeRendezVous(@PathVariable("RendezVous-id") Long RendezVousId) {
		
		RendezVousService.deleteRendezVous(RendezVousId);

	}
	@DeleteMapping("/remove-All")
	@ResponseBody
	public void removeAll() {
		
		RendezVousService.deleteAll();

	}
	
	

}
