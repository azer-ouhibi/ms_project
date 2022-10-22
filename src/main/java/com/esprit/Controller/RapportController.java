package com.esprit.Controller;
import com.esprit.Model.Rapport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.esprit.Service.RapportService;

@RestController
@RequestMapping(value = "/api/Rapport")
public class RapportController {
    @Autowired
    private RapportService rapportService ;

    // get all
    @GetMapping
    @ResponseBody 
    public ResponseEntity<List<Rapport>> getAllRapport () {
        return new ResponseEntity<>(rapportService.getAll(), HttpStatus.OK) ;
    }

    //get by Id
    @GetMapping(value = "/{id}")
    @ResponseStatus
    public ResponseEntity<Rapport> getFactureById(@PathVariable int id){
        return new ResponseEntity<>(rapportService.getRapportById(id),HttpStatus.OK);
    }

    // add Rapport
    @PostMapping
    @ResponseStatus
    public ResponseEntity<Rapport> addFacture(@RequestBody Rapport R) {
        return new ResponseEntity<>(rapportService.addRapport(R),HttpStatus.CREATED) ;
    }

  

    // delete Rapport
    @DeleteMapping(value = "/{id}")
    @ResponseStatus
    public ResponseEntity<String> deleteRapport(@PathVariable int id){
        return new ResponseEntity<>(rapportService.deleteRapport(id),HttpStatus.OK);
    }
}
