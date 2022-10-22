import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstatComponent } from './constat.component';

const routes: Routes = [{ path: '', component: ConstatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConstatRoutingModule { }
