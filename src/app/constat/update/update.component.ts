import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constat } from 'src/Models/Constat';
import { ConstatService } from '../constat.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private ac:ActivatedRoute,private service:ConstatService,private router:Router) { }



  constat = new Constat();
  id=this.ac.snapshot.params['id'];
  
  ngOnInit(): void {
    this.getConstat();
  }
 

  getConstat()
  {
    this.service.fetchConstatsById(this.id).subscribe(
      (res:Constat)=>
      {
        this.constat=res;
        this.constat.idConstat=res.id;
     
      },
      (error)=>{
        console.log(error)
      }
    );
  }

  UpdateConstat(data:Constat){
    
    data.idConstat=this.id;
    this.service.UpdatConstat(data).subscribe(()=>{},(error)=>{console.log(error);})
    this.router.navigateByUrl("Constat/ConstatHome/detail/"+this.id);
    
  }
  

}
