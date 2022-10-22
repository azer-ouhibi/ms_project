package tn.esprit.facture;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface DevisRepository extends JpaRepository<Devis, Integer>{
}
