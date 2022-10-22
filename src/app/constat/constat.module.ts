import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstatRoutingModule } from './constat-routing.module';
import { ConstatComponent } from './constat.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ShowComponent } from './show/show.component';


@NgModule({
  declarations: [
    ConstatComponent,
    AddComponent,
    UpdateComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,
    ConstatRoutingModule
  ]
})
export class ConstatModule { }
