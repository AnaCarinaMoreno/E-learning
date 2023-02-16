import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { HomeComponent } from './components/home/home.component';
import { UneteComponent } from './components/unete/unete.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'cursos', component:CursosComponent},
  {path: 'suscribete', component:UneteComponent},
  {path: 'acerca-de', component:AcercaDeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
