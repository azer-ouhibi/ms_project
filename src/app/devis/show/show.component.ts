import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Devis } from 'src/Models/Devis';
import { DevisService } from '../devis.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private service:DevisService,private router:Router) { }
  ListDevis !: Devis[];

 
 
  ngOnInit(): void {
    this.GetAllDevis();
  }
  GetAllDevis()
  {
    this.service.fetchDevis().subscribe(
      (t)=>{

        this.ListDevis=t;
      },
      (error)=>{
        console.log(error.status)
      }
    );
  }

  Delete(id:number)
  {
    this.service.deleteDevis(id).subscribe(()=>{},(error)=>{console.log(error)});
    this.GetAllDevis();
  }
  Update(id:number)
  {
    this.router.navigate(['/devis/DevisHome/update/',id])
  }

}
