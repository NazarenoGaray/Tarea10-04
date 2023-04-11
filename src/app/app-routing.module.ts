import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent}from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { BienvenidosComponent } from './bienvenidos/bienvenidos.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path: 'bienvenido', component:BienvenidosComponent},
  {path:'login' ,component:LoginComponent} ,
  {path:'registrar',component:RegistrarComponent},
  {path: '', component:InicioComponent},
  {path:'**' ,component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
