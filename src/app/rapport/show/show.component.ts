import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rapport } from 'src/Models/Rapport';
import { RapportService } from '../rapport.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

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

  Delete(id:number)
  {
    this.service.deleteRapport(id).subscribe(()=>{},(error)=>{console.log(error)});
    this.GetAllRapport();
  }
  Update(id:number)
  {
    this.router.navigate(['/Rapport/RapportHome/update/',id])
  }

}
