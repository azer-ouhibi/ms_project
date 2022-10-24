import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Devis } from 'src/Models/Devis';
import { DevisService } from '../devis.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  
  Devis!:Devis[];
  numero_devis!:number;
  tauxDegat !:number;
  montant!:number;
  total!:number;
  tauxtax!:number;

  DevisForm = new FormGroup(
		{	
      numero_devis : new FormControl(''),
			tauxDegat : new FormControl(''),
			montant : new FormControl(''),
			total : new FormControl(''),
			tauxtax : new FormControl('')

		}
		)
    constructor(private service:DevisService,private router:Router) { }


    ngOnInit(): void {
      this.service.fetchDevis().subscribe(
        (t)=>{
          this.Devis=t;
        },
        (error)=>{
          console.log(error.status)
        }
      );
    }
    
    SaveDevis(data:any)
    {
  
      this.service.addDevis(data).subscribe(()=>{},(error)=>{console.log(error);})
      this.router.navigateByUrl("devis/DevisHome/getParent");
   
    }
  
  
 
	

}
