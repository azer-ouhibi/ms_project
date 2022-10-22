package com.esprit.Model;


import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Rapport implements Serializable{
	private static final long serialVersionUID = 6;
	
	@Id
	@GeneratedValue
	private int id;
	
	 @Temporal(TemporalType.DATE)

	    private Date dateCreation;
	    private Integer num_dossier ;
	    private String description ;
	    public Rapport() {};
		public Rapport(int id, Date dateCreation, Integer num_dossier, String description) {
			super();
			this.id = id;
			this.dateCreation = dateCreation;
			this.num_dossier = num_dossier;
			this.description = description;
		}
		
		public Rapport(int id, Date dateCreation, String description, Integer num_dossier) {
			super();
			this.id = id;
			this.dateCreation = dateCreation;
			this.description = description;
			this.num_dossier = num_dossier;
		}

		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public Date getDateCreation() {
			return dateCreation;
		}
		public void setDateCreation(Date dateCreation) {
			this.dateCreation = dateCreation;
		}
		public Integer getNum_dossier() {
			return num_dossier;
		}
		public void setNum_dossier(Integer num_dossier) {
			this.num_dossier = num_dossier;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public static long getSerialversionuid() {
			return serialVersionUID;
		}
	    
	    
	    


	
	
	
	
}

