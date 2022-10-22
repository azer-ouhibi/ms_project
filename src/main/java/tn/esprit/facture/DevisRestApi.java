package tn.esprit.facture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/Facture")
public class DevisRestApi {
    @Autowired
    private DevisService FactureService ;

    // get all
    @GetMapping
    @ResponseStatus(value = HttpStatus.OK)
    public ResponseEntity<List<Devis>> getAllFacture () {
        return new ResponseEntity<>(FactureService.getAll(), HttpStatus.OK) ;
    }

    //get by Id
    @GetMapping(value = "/{id}")
    @ResponseStatus
    public ResponseEntity<Devis> getFactureById(@PathVariable int id){
        return new ResponseEntity<>(FactureService.getFactureById(id),HttpStatus.OK);
    }

    // add Facture
    @PostMapping
    @ResponseStatus
    public ResponseEntity<Devis> addFacture(@RequestBody Devis F) {
        return new ResponseEntity<>(FactureService.addFacture(F),HttpStatus.CREATED) ;
    }

  

    // delete Facture
    @DeleteMapping(value = "/{id}")
    @ResponseStatus
    public ResponseEntity<String> deleteFacture(@PathVariable int id){
        return new ResponseEntity<>(FactureService.deleteFacture(id),HttpStatus.OK);
    }
}
