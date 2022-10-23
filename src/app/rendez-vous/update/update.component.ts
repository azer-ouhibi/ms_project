import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RendezVous } from 'src/Models/RendezVous';
import { RendezVousService } from '../rendez-vous.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private ac:ActivatedRoute,private service:RendezVousService,private router:Router) { }


  isLoading = true;

  rendezVous = new RendezVous();
  id=this.ac.snapshot.params['id'];
  
  ngOnInit(): void {
    this.getRendezVous();
  }
 

  getRendezVous()
  {
    this.service.fetchRendezVousById(this.id).subscribe(
      (res:RendezVous)=>
      {
        this.rendezVous=res;
        this.rendezVous.idRendezVous=res.id;
        this.isLoading = false;
      },
      (error)=>{
        console.log(error)
      }
    );
  }

  UpdaterendezVous(data:RendezVous){
    
    data.idRendezVous=this.id;
    data.id=this.id;

    this.service.UpdatRendezVous(data).subscribe(()=>{},(error)=>{console.log(error);})
    this.router.navigateByUrl("rendezVous/RendezVousHome/detail/"+this.id);
    
  }
  

}
