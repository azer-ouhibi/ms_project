package com.esprit.microservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/dossiers")
public class DossierRestApi {
	
	private String title = "Hello; I'm the candidate Microservice for Week 3";
	
	@Autowired
	private DossierService dossierService;
	
	//http://localhost:8181/hello
	//Resultat -> Message: Hello; I'm the candidate Microservice for Week 3
	//Execution URL: http://localhost:8282/api/dossiers/hello
	@RequestMapping("/hello")
	public String sayHello(){
		System.out.println(title);
		return title;
	}
	
	//Configuration de la methode POST
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Dossier> createDossier(@RequestBody Dossier dossier){
		return new ResponseEntity<>(dossierService.addDossier(dossier), HttpStatus.OK);
	}
	
	
	
	//Configuration de la methode PUT
	//Execution URL: http://localhost:8282/api/dossiers/1
	@PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Dossier> updateDossier(@PathVariable(value = "id") int id,
			@RequestBody Dossier dossier){
		return new ResponseEntity<>(dossierService.updateDossier(id, dossier), HttpStatus.OK);
	}
	
	//Configuation de la methode Delete
	//Execution URL: http://localhost:8282/api/dossiers/{id}
	@DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Dossier> deleteDossier(@PathVariable(value = "id") int id){
		dossierService.deleteDossier(id);
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
	
	
	//Additional (Optionnel) - N'existe pas dans l'atelier
	//Configuration de la methode GET All
	//Execution URL: http://localhost:8282/api/dossiers/
	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public List<Dossier> getAllDossiers(){
		return dossierService.GetDossiers();
	}
	
	
	//Additional (Optionnel) - N'existe pas dans l'atelier
	//Configuration de la methode de recherche GET specifique avec PathParam
	//il faut que les noms des methodes ici Candidat Resst API) et celles dans CandidatService n'aient pas le meme nom, sinon ca degere une erreue de mapping
	//Execution URL: http://localhost:8282/api/dossiers
	@GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Dossier> searchDossier(@PathVariable(value = "id") int id){
		return new ResponseEntity<>(dossierService.findDossier(id) , HttpStatus.OK);
	}
	
	
	

}
