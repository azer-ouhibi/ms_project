package com.esprit.constat.services;

import java.util.List;

import com.esprit.constat.entities.*;

public interface IConstat {


	List<Constat> retrieveAllConstats();
	Constat retrieveConstat(Long id);

	Constat addConstat(Constat c);
	Constat updateConstat(Constat c);

	void deleteConstat(Long id);
	void deleteAll();

	
}
