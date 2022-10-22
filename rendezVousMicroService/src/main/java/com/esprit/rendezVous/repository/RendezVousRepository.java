package com.esprit.rendezVous.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.esprit.rendezVous.entities.RendezVous;
@Repository

public interface RendezVousRepository  extends JpaRepository<RendezVous,Long>{



}
