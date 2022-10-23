import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constat } from 'src/Models/Constat';
import { ConstatService } from '../constat.service';

@Component({
  selector: 'app-get-parent',
  templateUrl: './get-parent.component.html',
  styleUrls: ['./get-parent.component.css']
})
export class GetParentComponent implements OnInit {

  constructor(private service:ConstatService,private router:Router) { }

  ListConstat !: Constat[];
 
 
  ngOnInit(): void {
    this.GetAllConstat();
  }
  GetAllConstat()
  {
    this.service.fetchConstats().subscribe(
      (t)=>{
        
        this.ListConstat=t;
      },
      (error)=>{
        console.log(error.status)
      }
    );
  }


  executes(i:any){
    this.service.deleteConstat(i.id).subscribe(()=>{},(error)=>{console.log(error)});
    this.GetAllConstat();
  }

}
