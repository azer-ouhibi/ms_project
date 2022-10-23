import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RendezVous } from 'src/Models/RendezVous';
import { RendezVousService } from '../rendez-vous.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private service:RendezVousService,private router:Router) { }
  ListRendezVous !: RendezVous[];

 
 
  ngOnInit(): void {
    this.GetAllRendezVous();
  }
  GetAllRendezVous()
  {
    this.service.fetchRendezVous().subscribe(
      (t)=>{
        console.log(t)
        this.ListRendezVous=t;
      },
      (error)=>{
        console.log(error.status)
      }
    );
  }

  Delete(id:number)
  {
    this.service.deleteRendezVous(id).subscribe(()=>{},(error)=>{console.log(error)});
    this.GetAllRendezVous();
  }
  Update(id:number)
  {
    this.router.navigate(['/rendezVous/RendezVousHome/update/',id])
  }

}
