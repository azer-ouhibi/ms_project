package com.esprit.constat.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Constat implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long Id ;
	    private int  tauxDegats ;
	    private String immatricule;
	    private String description;
	    private String lieux;
	    private String date_Constat;
	    private boolean blessure;
	    //private Vehicule vehiculeA ; 
	    //private Vehicule vehiculeB ; 

	    public Constat() {
	        super () ;
	    }
		public Constat(int tauxDegats, String immatricule, String description, String lieux, String date_Constat,
				boolean blessure) {
			super();
			this.tauxDegats = tauxDegats;
			this.immatricule = immatricule;
			this.description = description;
			this.lieux = lieux;
			this.date_Constat = date_Constat;
			this.blessure = blessure;
		}
		
		public Constat(int tauxDegats, String immatricule, String description) {
			super();
			this.tauxDegats = tauxDegats;
			this.immatricule = immatricule;
			this.description = description;
			
		}
		public Long getId() {
			return Id;
		}
		public void setId(Long id) {
			Id = id;
		}
		public int getTauxDegats() {
			return tauxDegats;
		}
		public void setTauxDegats(int tauxDegats) {
			this.tauxDegats = tauxDegats;
		}
		public String getImmatricule() {
			return immatricule;
		}
		public void setImmatricule(String immatricule) {
			this.immatricule = immatricule;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public String getLieux() {
			return lieux;
		}
		public void setLieux(String lieux) {
			this.lieux = lieux;
		}
		public String getDate_Constat() {
			return date_Constat;
		}
		public void setDate_Constat(String date_Constat) {
			this.date_Constat = date_Constat;
		}
		public boolean isBlessure() {
			return blessure;
		}
		public void setBlessure(boolean blessure) {
			this.blessure = blessure;
		}
		@Override
		public String toString() {
			return "Constat [Id=" + Id + ", tauxDegats=" + tauxDegats + ", immatricule=" + immatricule
					+ ", description=" + description + ", lieux=" + lieux + ", date_Constat=" + date_Constat
					+ ", blessure=" + blessure + "]";
		}
	    

}
