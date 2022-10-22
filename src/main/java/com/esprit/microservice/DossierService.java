package com.esprit.microservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class DossierService {

	
	@Autowired
	private DossierRepository dossierRepository;
	
	
	//Ajouter un candidat
	public Dossier addDossier(Dossier dossier) {
		return dossierRepository.save(dossier);
	}
	
	
	//Mettre a jour les informations d'un candidat
	public Dossier updateDossier(int id, Dossier newDossier) {
		if(dossierRepository.findById(id).isPresent()) {
			Dossier existingDossier = dossierRepository.findById(id).get();
			existingDossier.setNumero(newDossier.getNumero());
			existingDossier.setEtat(newDossier.getEtat());
			
			
			return dossierRepository.save(existingDossier);
		}
		else {
			return null;
		}
	}
	
	
	//Supprimer un candidat
	public String deleteDossier(int id) {
		if(dossierRepository.findById(id).isPresent()) {
			dossierRepository.deleteById(id);
			return "Le Dossier avec l'id " + id + " a ete supprime";
		}
		else {
			return "Le Dossier avec l'id " + id + " n'a pas ete supprime";
		}
	}
	
	
	
	//Obtenir tous les candidats
	public  List<Dossier> GetDossiers() {
		return dossierRepository.findAll();
	}
	
	//Methode additionnelle (Pas dans l'atelier)
	//Chercher un candidat
	public Dossier findDossier(int id) {
		if(dossierRepository.findById(id).isPresent()) {
			Dossier existingDossier = dossierRepository.findById(id).get();
			return existingDossier;
		}
		else {
			return null;
		}
	}
	
	
	
	
}
