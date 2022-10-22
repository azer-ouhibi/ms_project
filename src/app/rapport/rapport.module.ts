import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RapportRoutingModule } from './rapport-routing.module';
import { RapportComponent } from './rapport.component';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    RapportComponent,
    AddComponent,
    ShowComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    RapportRoutingModule
  ]
})
export class RapportModule { }
