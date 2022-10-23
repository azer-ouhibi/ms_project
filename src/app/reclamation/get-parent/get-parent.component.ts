import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamation } from 'src/Models/Reclamation';
import { ReclamationService } from '../reclamation.service';

@Component({
  selector: 'app-get-parent',
  templateUrl: './get-parent.component.html',
  styleUrls: ['./get-parent.component.css']
})
export class GetParentComponent implements OnInit {

  constructor(private service:ReclamationService,private router:Router) { }

  ListReclamation !: Reclamation[];
 
 
  ngOnInit(): void {
    this.GetAllReclamation();
  }
  GetAllReclamation()
  {
    this.service.fetchReclamations().subscribe(
      (t)=>{
        
        this.ListReclamation=t;
      },
      (error)=>{
        console.log(error.status)
      }
    );
  }


  executes(i:any){
    this.service.deleteReclamation(i.id).subscribe(()=>{},(error)=>{console.log(error)});
    this.GetAllReclamation();
  }

}
