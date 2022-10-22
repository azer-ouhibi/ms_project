import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DossierRoutingModule } from './dossier-routing.module';
import { DossierComponent } from './dossier.component';
import { ShowComponent } from './show/show.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    DossierComponent,
    ShowComponent,
    UpdateComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    DossierRoutingModule
  ]
})
export class DossierModule { }
