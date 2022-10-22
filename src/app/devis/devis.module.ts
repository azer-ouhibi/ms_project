import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevisRoutingModule } from './devis-routing.module';
import { DevisComponent } from './devis.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ShowComponent } from './show/show.component';


@NgModule({
  declarations: [
    DevisComponent,
    AddComponent,
    UpdateComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,
    DevisRoutingModule
  ]
})
export class DevisModule { }
