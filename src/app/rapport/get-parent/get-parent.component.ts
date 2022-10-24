import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rapport } from 'src/Models/Rapport';
import { RapportService } from '../rapport.service';

@Component({
  selector: 'app-get-parent',
  templateUrl: './get-parent.component.html',
  styleUrls: ['./get-parent.component.css']
})
export class GetParentComponent implements OnInit {

  constructor(private service:RapportService,private router:Router) { }

  ListRapport !: Rapport[];
 
 
  ngOnInit(): void {
    this.GetAllRapport();
  }
  GetAllRapport()
  {
    this.service.fetchRapports().subscribe(
      (t)=>{
        
        this.ListRapport=t;
      },
      (error)=>{
        console.log(error.status)
      }
    );
  }


  executes(i:any){
    this.service.deleteRapport(i.id).subscribe(()=>{},(error)=>{console.log(error)});
    this.GetAllRapport();
  }


}
