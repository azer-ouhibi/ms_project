package tn.esprit.facture;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Devis implements Serializable{
	private static final long serialVersionUID = 6;
	
	@Id
	@GeneratedValue
	private int id;
	private int numero_devis,montant,tauxDegat,total,tauxtax;

	
	public Devis(int numero_devis) {
		super();
		this.numero_devis = numero_devis;
	}


	public Devis() {
		super();
	}


	public Devis(int id, int numero_devis, int montant, int tauxDegat, int total, int tauxtax) {
		super();
		this.id = id;
		this.numero_devis = numero_devis;
		this.montant = montant;
		this.tauxDegat = tauxDegat;
		this.total = total;
		this.tauxtax = tauxtax;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public int getNumero_devis() {
		return numero_devis;
	}


	public void setNumero_devis(int numero_devis) {
		this.numero_devis = numero_devis;
	}


	public int getMontant() {
		return montant;
	}


	public void setMontant(int montant) {
		this.montant = montant;
	}


	public int getTauxDegat() {
		return tauxDegat;
	}


	public void setTauxDegat(int tauxDegat) {
		this.tauxDegat = tauxDegat;
	}


	public int getTotal() {
		return total;
	}


	public void setTotal(int total) {
		this.total = total;
	}


	public int getTauxtax() {
		return tauxtax;
	}


	public void setTauxtax(int tauxtax) {
		this.tauxtax = tauxtax;
	}


	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	
	
	
	
	

	
	
	
	
	
	
}
