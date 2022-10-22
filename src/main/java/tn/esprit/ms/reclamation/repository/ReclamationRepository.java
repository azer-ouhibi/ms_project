package tn.esprit.ms.reclamation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.esprit.ms.reclamation.entity.Reclamation;

@Repository
public interface ReclamationRepository extends JpaRepository<Reclamation, Long> {

}
