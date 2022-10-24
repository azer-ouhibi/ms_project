import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Rapport } from 'src/Models/Rapport';
import { RapportService } from '../rapport.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  Rapport!:Rapport[];

  dateCreation !:Date;
  num_dossier!:number;
  description!:string;

  RapportForm = new FormGroup(
		{
			dateCreation : new FormControl(''),
			num_dossier : new FormControl(''),
			description : new FormControl('')

		}
		)
    constructor(private service:RapportService,private router:Router) { }


    ngOnInit(): void {
      this.service.fetchRapports().subscribe(
        (t)=>{
          this.Rapport=t;
        },
        (error)=>{
          console.log(error.status)
        }
      );
    }
    
    SaveRapport(data:any)
    {
  
  
     
      this.service.addRapport(data).subscribe(()=>{},(error)=>{console.log(error);})
      this.router.navigateByUrl("rapport/RapportHome/show");
   
    }
  

}
