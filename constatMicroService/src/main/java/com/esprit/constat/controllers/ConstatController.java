package com.esprit.constat.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.esprit.constat.entities.Constat;
import com.esprit.constat.services.IConstat;

@RestController
@RequestMapping("/constat")
public class ConstatController {


	@Autowired
	IConstat constatService;
	
	@PostMapping("/add-constat")
	@ResponseBody
	public void addConstat(@RequestBody Constat constat) {
		constatService.addConstat(constat);
	}
	
	@GetMapping("/liste-constat")
	@ResponseBody
	@CrossOrigin("*")
	List<Constat> listeConstat(){
		return constatService.retrieveAllConstats();
	}
	
	@GetMapping("/One-constat/{constat-id}")
	@ResponseBody
	@CrossOrigin("*")

	Constat retrieveConstat(@PathVariable("constat-id") Long constatId) {
		return constatService.retrieveConstat(constatId);
	}
	
	// http://localhost:8089/SpringMVC/client/modify-client

	@PutMapping("/modify-constat")
	@ResponseBody
	@CrossOrigin("*")
	public Constat modifyClient(@RequestBody Constat constat) {
		System.out.println("*****************************************************");

		System.out.println(constat);
		System.out.println("*****************************************************");

	return constatService.updateConstat(constat);

	}
	
	// http://localhost:8089/SpringMVC/constat/remove-constat/{constat-id}

	@DeleteMapping("/remove-constat/{constat-id}")
	@ResponseBody
	@CrossOrigin("*")

	public void removeConstat(@PathVariable("constat-id") Long constatId) {
		
		constatService.deleteConstat(constatId);

	}
	@DeleteMapping("/remove-All")
	@ResponseBody
	@CrossOrigin("*")

	public void removeAll() {
		
		constatService.deleteAll();

	}
	
	

}
