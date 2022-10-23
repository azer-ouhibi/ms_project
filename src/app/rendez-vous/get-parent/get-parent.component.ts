import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RendezVous } from 'src/Models/RendezVous';
import { RendezVousService } from '../rendez-vous.service';

@Component({
  selector: 'app-get-parent',
  templateUrl: './get-parent.component.html',
  styleUrls: ['./get-parent.component.css']
})
export class GetParentComponent implements OnInit {

  constructor(private service: RendezVousService, private router: Router) { }

  ListRendezVous !: RendezVous[];


  ngOnInit(): void {
    this.GetAllRendezVous();
  }
  GetAllRendezVous() {
    this.service.fetchRendezVous().subscribe(
      (t) => {

        this.ListRendezVous = t;
      },
      (error) => {
        console.log(error.status)
      }
    );
  }


  executes(i: any) {
    this.service.deleteRendezVous(i.id).subscribe(() => { }, (error) => { console.log(error) });
    this.GetAllRendezVous();
  }

}
