package com.esprit.constat.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.esprit.constat.entities.*;
import com.esprit.constat.repository.ConstatRepository;

@Service
public class ConstatServiceImpl  implements IConstat {
	@Autowired
	private ConstatRepository ConstatRepository;


	@Override
	public List<Constat> retrieveAllConstats() {
		// TODO Auto-generated method stub
		List<Constat> Constats = (List<Constat>) ConstatRepository.findAll();
		return Constats;
	}

	@Override
	public Constat addConstat(Constat p) {
		// TODO Auto-generated method stub
		ConstatRepository.save(p);
		return p;
	}

	@Override
	public void deleteConstat(Long id) {
		// TODO Auto-generated method stub
		ConstatRepository.deleteById(id);

	}

	@Override
	public Constat updateConstat(Constat u) {
		// TODO Auto-generated method stub
		return ConstatRepository.save(u);
	}

	@Override
	public Constat retrieveConstat(Long id) {
		// TODO Auto-generated method stub
		Constat Constat = ConstatRepository.findById(id).orElse(null);
		return Constat;
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		ConstatRepository.deleteAll();
		
	}

}
