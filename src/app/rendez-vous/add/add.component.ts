import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RendezVous } from 'src/Models/RendezVous';
import { RendezVousService } from '../rendez-vous.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  Constat!:RendezVous[];

  tauxDegats !:number;
  immatricule!:String;
  description!:string;
  lieux!:string;

  ConstatForm = new FormGroup(
		{
			tauxDegats : new FormControl(''),
			immatricule : new FormControl(''),
			lieux : new FormControl(''),
			description : new FormControl('')

		}
		)
    constructor(private service:RendezVousService,private router:Router) { }


    ngOnInit(): void {
      this.service.fetchRendezVous().subscribe(
        (t)=>{
          this.Constat=t;
        },
        (error)=>{
          console.log(error.status)
        }
      );
    }
    
    SaveConstat(data:any)
    {
  
  
     
      this.service.addRendezVous(data).subscribe(()=>{},(error)=>{console.log(error);})
      this.router.navigateByUrl("rendezVous/RendezVousHome/getParent");
   
    }
  
  
 
	
  }