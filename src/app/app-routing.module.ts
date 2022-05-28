import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './portfolio/home/home.component';
import { IniciarSesionComponent } from './portfolio/nav-bar/iniciar-sesion/iniciar-sesion.component';
import { PagErrorComponent } from './portfolio/pag-error/pag-error.component';



const routes: Routes = [
  {path: '', component:HomeComponent },
  {path: 'login', component:IniciarSesionComponent },
  {path: 'home', component:HomeComponent },
  {path:'**', component: PagErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
