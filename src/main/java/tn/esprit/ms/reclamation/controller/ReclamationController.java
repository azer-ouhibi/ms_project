package tn.esprit.ms.reclamation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.ms.reclamation.entity.Reclamation;
import tn.esprit.ms.reclamation.service.ReclamationService;



@RestController
public class ReclamationController {
	@Autowired
	ReclamationService reclamationService;
	
	// http://localhost:8088/SpringMVC/servlet/retrieveAllFactures
	@GetMapping("/retrieveAllReclamations")
	@ResponseBody
	public List<Reclamation> getReclamations() {
		List<Reclamation> listReclamations = reclamationService.retrieveAllReclamations();
		return listReclamations;
	}
	
	
	// http://localhost:8089/SpringMVC/servlet/cancelFacture/{facture-id}
	@DeleteMapping("/deleteReclamation/{id}")
	@ResponseBody
	public void deleteReclamation(@PathVariable("id") Long id) {
		reclamationService.deleteReclamation(id);
	}
	
	// http://localhost:8088/SpringMVC/servlet/retrieveAllFacture/{id}
			@GetMapping("/retrieveReclamation/{id}")
			@ResponseBody
			public Reclamation getReclamation(@PathVariable("id") Long id) {
				Reclamation listReclamation = reclamationService.retrieveReclamation(id);
				return listReclamation;
			}
	
}
