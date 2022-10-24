import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from '../devis/add/add.component';
import { GetDetailsComponent } from '../devis/get-details/get-details.component';
import { GetParentComponent } from '../devis/get-parent/get-parent.component';
import { ShowComponent } from '../devis/show/show.component';
import { UpdateComponent } from '../devis/update/update.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { DevisComponent } from './devis.component';

const routes: Routes = [ {path:'',redirectTo:'DevisHome',pathMatch:'full'},
{ 
  path: 'DevisHome', component: DevisComponent,
  children:[
            {path:"add", component:AddComponent},
            {path:'update/:id', component:UpdateComponent},
            {path:"show", component:ShowComponent},
            {path:"getParent", component:GetParentComponent},
            {path:"detail/:id", component:GetDetailsComponent}
            ]
},
{path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevisRoutingModule { }
