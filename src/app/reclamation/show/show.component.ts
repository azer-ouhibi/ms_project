import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamation } from 'src/Models/Reclamation';
import { ReclamationService } from '../reclamation.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

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

  Delete(id:number)
  {
    this.service.deleteReclamation(id).subscribe(()=>{},(error)=>{console.log(error)});
    this.GetAllReclamation();
  }
  Update(id:number)
  {
    this.router.navigate(['/reclamation/ReclamationHome/update/',id])
  }

}
