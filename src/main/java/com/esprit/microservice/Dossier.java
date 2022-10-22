package com.esprit.microservice;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Dossier implements Serializable{
	private static final long serialVersionUID = 6;
	
	@Id
	@GeneratedValue
	private int id;
	private int numero;
	private String etat;
	public int getId() {
		return id;
	}
	public Dossier(String etat) {
		super();
		this.etat = etat;
	}
	public Dossier(int id, int numero, String etat) {
		super();
		this.id = id;
		this.numero = numero;
		this.etat = etat;
	}
	public Dossier() {
		super();
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public int getNumero() {
		return numero;
	}
	public void setNumero(int numero) {
		this.numero = numero;
	}
	public String getEtat() {
		return etat;
	}
	public void setEtat(String etat) {
		this.etat = etat;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	
	
	
	
	

	
	
	
	
	
	
}
