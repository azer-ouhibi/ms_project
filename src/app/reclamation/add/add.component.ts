import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Reclamation } from 'src/Models/Reclamation';
import { ReclamationService } from '../reclamation.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

 
  Reclamation!:Reclamation[];

  title !:string;
  description!:string;
  date!:string;

  ReclamationForm = new FormGroup(
		{
			title : new FormControl(''),
			description : new FormControl(''),
			date : new FormControl(''),

		}
		)
    constructor(private service:ReclamationService,private router:Router) { }


    ngOnInit(): void {
      this.service.fetchReclamations().subscribe(
        (t)=>{
          this.Reclamation=t;
        },
        (error)=>{
          console.log(error.status)
        }
      );
    }
    
    SaveReclamation(data:any)
    {
  
  
     
      this.service.addReclamation(data).subscribe(()=>{},(error)=>{console.log(error);})
      this.router.navigateByUrl("reclamation/ReclamationHome/getParent");
   
    }

}
