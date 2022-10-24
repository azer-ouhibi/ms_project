import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Devis } from 'src/Models/Devis';
import { DevisService } from '../devis.service';
import { GetParentComponent } from '../get-parent/get-parent.component';

@Component({
  selector: 'app-get-child',
  templateUrl: './get-child.component.html',
  styleUrls: ['./get-child.component.css']
})
export class GetChildComponent implements OnInit {

  @Input() devis!:Devis;
  @Input() photoURL:any;

  @Output() notif= new EventEmitter<any>();
  
  @ViewChild(GetParentComponent) c!:GetChildComponent;
  
    constructor(private service:DevisService,private router:Router) { }
  
    

  ngOnInit(): void {
  }
  Delete()
  {
    this.notif.emit(this.devis);

  }
  UpdateUser(id:number)
  {
    this.router.navigate(['devis/DevisHome/update',id])
  }
}
