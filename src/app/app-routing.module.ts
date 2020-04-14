import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VirtualComponent } from './pages/virtual/virtual.component';
import { DragComponent } from './pages/drag/drag.component';
import { CountriesComponent } from './pages/countries/countries.component';


const routes: Routes = [
  { path: 'virtual', component: VirtualComponent },
  { path: 'drag', component: DragComponent },
  { path: 'countries', component: CountriesComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/virtual' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
