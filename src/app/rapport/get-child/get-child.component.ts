import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Rapport } from 'src/Models/Rapport';
import { GetParentComponent } from '../get-parent/get-parent.component';
import { RapportService } from '../rapport.service';

@Component({
  selector: 'app-get-child',
  templateUrl: './get-child.component.html',
  styleUrls: ['./get-child.component.css']
})
export class GetChildComponent implements OnInit {
  @Input() rapport!:Rapport;
  @Input() photoURL:any;

  @Output() notif= new EventEmitter<any>();
  
  @ViewChild(GetParentComponent) c!:GetChildComponent;
  
  constructor(private service:RapportService,private router:Router) { }

  ngOnInit(): void {
  }
  Delete()
  {
    this.notif.emit(this.rapport);

  }
  UpdateUser(id:number)
  {
    this.router.navigate(['rapport/RapportHome/update',id])
  }

}
