package com.esprit.rendezVous.service;

import java.util.List;

import com.esprit.rendezVous.entities.*;

public interface IRendezVous {


	List<RendezVous> retrieveAllRendezVous();
	RendezVous retrieveRendezVous(Long id);

	RendezVous addRendezVous(RendezVous rdv);
	RendezVous updateRendezVous(RendezVous rdv);

	void deleteRendezVous(Long id);
	void deleteAll();

	
}

