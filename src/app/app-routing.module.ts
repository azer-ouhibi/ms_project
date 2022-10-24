import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'constat', loadChildren: () => import('./constat/constat.module').then(m => m.ConstatModule) }, { path: 'rendezVous', loadChildren: () => import('./rendez-vous/rendez-vous.module').then(m => m.RendezVousModule) }, { path: 'rapport', loadChildren: () => import('./rapport/rapport.module').then(m => m.RapportModule) }, { path: 'devis', loadChildren: () => import('./devis/devis.module').then(m => m.DevisModule) }, { path: 'dossier', loadChildren: () => import('./dossier/dossier.module').then(m => m.DossierModule) }, { path: 'reclamation', loadChildren: () => import('./reclamation/reclamation.module').then(m => m.ReclamationModule) }, { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
