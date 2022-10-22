package tn.esprit.ms.reclamation.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.ms.reclamation.entity.Reclamation;
import tn.esprit.ms.reclamation.repository.ReclamationRepository;


@Service

public class ReclamationServiceImpl implements ReclamationService {
	@Autowired
	ReclamationRepository recRep;
	


	@Override
	public List<Reclamation> retrieveAllReclamations() {
		// TODO Auto-generated method stub
		List<Reclamation> reclamation = (List<Reclamation>) recRep.findAll();
		return reclamation;
	}


	@Override
	public void deleteReclamation(Long id) {
		// TODO Auto-generated method stub
		recRep.deleteById(id);
	}


	@Override
	public Reclamation retrieveReclamation(Long id) {
		// TODO Auto-generated method stub
		Reclamation reclamation = recRep.findById(id).orElse(null);
		return reclamation;
	}
	
	@Override
	public Reclamation addReclamation(Reclamation s) {
		// TODO Auto-generated method stub
		recRep.save(s);
		return s;
	}
	
	@Override
	public Reclamation updateReclamation(Reclamation u) {
		// TODO Auto-generated method stub
		return recRep.save(u);
	}


}
