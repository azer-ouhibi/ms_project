package com.esprit.rendezVous.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class RendezVous {
	private static final long serialVersionUID = 1L;
	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long Id ;
	   	private String description;
	    private String dateRendezVousString;
	    private String dateRendezVous;
	    private String etatRendezVous;
	    
	 
	    public RendezVous() {
	        super () ;
	    }

	    
	    public RendezVous(String description, String dateRendezVousString, String dateRendezVous,
				String etatRendezVous) {
			super();
			this.description = description;
			this.dateRendezVousString = dateRendezVousString;
			this.dateRendezVous = dateRendezVous;
			this.etatRendezVous = etatRendezVous;
		}


		public Long getId() {
			return Id;
		}


		public void setId(Long id) {
			Id = id;
		}


		public String getDescription() {
			return description;
		}


		public void setDescription(String description) {
			this.description = description;
		}


		public String getDateRendezVousString() {
			return dateRendezVousString;
		}


		public void setDateRendezVousString(String dateRendezVousString) {
			this.dateRendezVousString = dateRendezVousString;
		}


		public String getDateRendezVous() {
			return dateRendezVous;
		}


		public void setDateRendezVous(String dateRendezVous) {
			this.dateRendezVous = dateRendezVous;
		}


		public String getEtatRendezVous() {
			return etatRendezVous;
		}


		public void setEtatRendezVous(String etatRendezVous) {
			this.etatRendezVous = etatRendezVous;
		}


		@Override
	public String toString() {
		return "RendezVous [Id=" + Id + ", description=" + description + ", dateRendezVousString="
				+ dateRendezVousString + ", dateRendezVous=" + dateRendezVous + ", etatRendezVous=" + etatRendezVous
				+ "]";
	}


}
