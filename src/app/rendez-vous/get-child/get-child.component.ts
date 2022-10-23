import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RendezVous } from 'src/Models/RendezVous';
import { GetParentComponent } from '../get-parent/get-parent.component';
import { RendezVousService } from '../rendez-vous.service';

@Component({
  selector: 'app-get-child',
  templateUrl: './get-child.component.html',
  styleUrls: ['./get-child.component.css']
})
export class GetChildComponent implements OnInit {

  @Input() rendezVous!:RendezVous;
  @Input() photoURL:any;

  @Output() notif= new EventEmitter<any>();
  
  @ViewChild(GetParentComponent) c!:GetChildComponent;
  
    constructor(private service:RendezVousService,private router:Router) { }
  
    

  ngOnInit(): void {
  }
  Delete()
  {
    this.notif.emit(this.rendezVous);

  }
  UpdateUser(id:number)
  {
    this.router.navigate(['rendezVous/RendezVousHome/update',id])
  }
}
