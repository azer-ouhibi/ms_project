import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamation } from 'src/Models/Reclamation';
import { ReclamationService } from '../reclamation.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private ac:ActivatedRoute,private service:ReclamationService,private router:Router) { }


  isLoading = true;

  reclamation = new Reclamation();
  id=this.ac.snapshot.params['id'];
  
  ngOnInit(): void {
    this.getReclamation();
  }
 

  getReclamation()
  {
    this.service.fetchReclamationById(this.id).subscribe(
      (res:Reclamation)=>
      {
        this.reclamation=res;
        this.reclamation.id=res.id;
        this.isLoading = false;
      },
      (error)=>{
        console.log(error)
      }
    );
  }

  UpdateReclamation(data:Reclamation){
    
    data.id=this.id;

    this.service.UpdatReclamation(data).subscribe(()=>{},(error)=>{console.log(error);})
    this.router.navigateByUrl("reclamation/ReclamationHome/detail/"+this.id);
    
  }
  

}
