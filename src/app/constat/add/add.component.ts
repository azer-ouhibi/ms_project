import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Constat } from 'src/Models/Constat';
import { ConstatService } from '../constat.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  Constat!:Constat[];

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
    constructor(private service:ConstatService,private router:Router) { }


    ngOnInit(): void {
      this.service.fetchConstats().subscribe(
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
  
  
     
      this.service.addConstat(data).subscribe(()=>{},(error)=>{console.log(error);})
      this.router.navigateByUrl("Constat/ConstatHome/getParent");
   
    }
  
  
 
	
  }