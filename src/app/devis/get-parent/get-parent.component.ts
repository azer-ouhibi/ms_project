import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Devis } from 'src/Models/Devis';
import { DevisService } from '../devis.service';

@Component({
  selector: 'app-get-parent',
  templateUrl: './get-parent.component.html',
  styleUrls: ['./get-parent.component.css']
})
export class GetParentComponent implements OnInit {

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


  executes(i:any){
    this.service.deleteDevis(i.id).subscribe(()=>{},(error)=>{console.log(error)});
    this.GetAllDevis();
  }
}
