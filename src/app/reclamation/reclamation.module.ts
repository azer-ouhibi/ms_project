import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { ReclamationComponent } from './reclamation.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';


@NgModule({
  declarations: [
    ReclamationComponent,
    UpdateComponent,
    AddComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,
    ReclamationRoutingModule
  ]
})
export class ReclamationModule { }
