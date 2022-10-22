package tn.esprit.ms.reclamation.service;

import java.util.List;

import org.springframework.stereotype.Service;

import tn.esprit.ms.reclamation.entity.Reclamation;

@Service
public interface ReclamationService {
	 Reclamation retrieveReclamation(Long id);
	 void deleteReclamation(Long id) ;
	 List<Reclamation> retrieveAllReclamations();
	 Reclamation addReclamation(Reclamation s);
	 Reclamation updateReclamation(Reclamation u);
}
