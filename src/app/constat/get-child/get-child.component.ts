import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Constat } from 'src/Models/Constat';
import { ConstatService } from '../constat.service';
import { GetParentComponent } from '../get-parent/get-parent.component';

@Component({
  selector: 'app-get-child',
  templateUrl: './get-child.component.html',
  styleUrls: ['./get-child.component.css']
})
export class GetChildComponent implements OnInit {

  @Input() constat!:Constat;
  @Input() photoURL:any;

  @Output() notif= new EventEmitter<any>();
  
  @ViewChild(GetParentComponent) c!:GetChildComponent;
  
    constructor(private service:ConstatService,private router:Router) { }
  
    

  ngOnInit(): void {
  }
  Delete()
  {
    this.notif.emit(this.constat);

  }
  UpdateUser(id:number)
  {
    this.router.navigate(['constat/ConstatHome/update',id])
  }
}
