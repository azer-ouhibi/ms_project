import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constat } from 'src/Models/Constat';
import { ConstatService } from '../constat.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

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

  Delete(id:number)
  {
    this.service.deleteConstat(id).subscribe(()=>{},(error)=>{console.log(error)});
    this.GetAllConstat();
  }
  Update(id:number)
  {
    this.router.navigate(['/constat/ConstatHome/update/',id])
  }

}
