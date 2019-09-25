import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectIndeksComponent } from './components/project-detail/project-indeks/project-indeks.component';
import { ProjectSatComponent } from './components/project-detail/project-sat/project-sat.component';
import { ProjectDijitaldepoComponent } from './components/project-detail/project-dijitaldepo/project-dijitaldepo.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'project/indeks',
    component: ProjectIndeksComponent
  },
  {
    path: 'project/sat',
    component: ProjectSatComponent
  },
  {
    path: 'project/dijitaldepo',
    component: ProjectDijitaldepoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
