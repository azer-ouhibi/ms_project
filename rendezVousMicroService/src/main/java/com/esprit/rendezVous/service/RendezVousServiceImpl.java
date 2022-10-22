package com.esprit.rendezVous.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esprit.rendezVous.entities.RendezVous;
import com.esprit.rendezVous.repository.RendezVousRepository;

@Service
public class RendezVousServiceImpl  implements IRendezVous {
	@Autowired
	private RendezVousRepository RendezVoustRepository;

	@Override
	public List<RendezVous> retrieveAllRendezVous() {
		// TODO Auto-generated method stub
		List<RendezVous> RendezVouss = (List<RendezVous>) RendezVoustRepository.findAll();
		return RendezVouss;
	}

	@Override
	public RendezVous addRendezVous(RendezVous rdv) {
		// TODO Auto-generated method stub
		RendezVoustRepository.save(rdv);
		return rdv;
	}

	@Override
	public void deleteRendezVous(Long id) {
		// TODO Auto-generated method stub
		RendezVoustRepository.deleteById(id);

	}

	@Override
	public RendezVous updateRendezVous(RendezVous rdv) {
		// TODO Auto-generated method stub
		return RendezVoustRepository.save(rdv);
	}

	@Override
	public RendezVous retrieveRendezVous(Long id) {
		// TODO Auto-generated method stub
		RendezVous RendezVous = RendezVoustRepository.findById(id).orElse(null);
		return RendezVous;
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		RendezVoustRepository.deleteAll();
		
	}

}
