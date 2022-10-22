package tn.esprit.facture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DevisService {

    @Autowired
    private DevisRepository FactureRepository;

    // get all Factures
    public List<Devis> getAll(){
        return FactureRepository.findAll();
    }
    // get one Facture
    public Devis getFactureById(int id){
        return FactureRepository.findById(id).get();
    }

    // add Facture
    public Devis addFacture(Devis F) {
        return FactureRepository.save(F) ;
    }

  
    // delete Facture
    public String deleteFacture(int id) {
        if (FactureRepository.findById(id).isPresent()) {
            FactureRepository.deleteById(id);
            return ("Facture supprimé avec succès") ;
        }
        else return ("Facture non existant") ;
    }
}
