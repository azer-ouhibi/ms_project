package com.esprit.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.esprit.Model.Rapport;

@Repository
public interface RapportRepository extends JpaRepository<Rapport, Integer>{
}
