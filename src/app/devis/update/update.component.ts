import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Devis } from 'src/Models/Devis';
import { DevisService } from '../devis.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private ac:ActivatedRoute,private service:DevisService,private router:Router) { }


  isLoading = true;

  devis = new Devis();
  id=this.ac.snapshot.params['id'];
  
  ngOnInit(): void {
    this.getDevis();
  }
 

  getDevis()
  {
    this.service.fetchDevisById(this.id).subscribe(
      (res:Devis)=>
      {
        this.devis=res;
        this.devis.id=res.id;
        this.isLoading = false;
      },
      (error)=>{
        console.log(error)
      }
    );
  }

  UpdateDevis(data:Devis){
    
    data.id=this.id;
    data.id=this.id;

    this.service.UpdatDevis(data).subscribe(()=>{},(error)=>{console.log(error);})
    this.router.navigateByUrl("devis/DevisHome/detail/"+this.id);
    
  }
  


}
