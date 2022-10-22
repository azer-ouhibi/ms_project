package com.esprit.microservice;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface DossierRepository extends JpaRepository<Dossier, Integer> {
	//Requete de recherche d'un candidat par son nom
	//http://localhost:8181/candidats/search/candidatByNom?nom=Sarra
	@Query("select d from Dossier d where d.numero like :numero")
	public Page<Dossier> dossierByNumero(@Param("numero") String n, Pageable pageable);
	
}
