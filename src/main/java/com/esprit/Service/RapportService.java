package com.esprit.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esprit.Repository.RapportRepository;
import com.esprit.Model.Rapport;

@Service
public class RapportService {

    @Autowired
    private RapportRepository rapportRepository;

 // get all Rapports
    public List<Rapport> getAll(){
        return rapportRepository.findAll();
    }
    // get one Rapports
    public Rapport getRapportById(int id){
        return rapportRepository.findById(id).get();
    }

    // add Rapports
    public Rapport addRapport(Rapport R) {
        return rapportRepository.save(R) ;
    }

  
    // delete Rapports
    public String deleteRapport(int id) {
        if (rapportRepository.findById(id).isPresent()) {
        	rapportRepository.deleteById(id);
            return ("Rapport supprimé avec succès") ;
        }
        else return ("Rapport non existant") ;
    }
}
