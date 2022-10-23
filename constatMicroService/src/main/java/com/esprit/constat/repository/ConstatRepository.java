package com.esprit.constat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.esprit.constat.entities.Constat;


@Repository
public interface ConstatRepository extends JpaRepository<Constat, Long>{

}
