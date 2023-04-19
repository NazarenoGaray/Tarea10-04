import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//inicio service

import { CargarscriptsService } from "./cargarscripts.service" ;

//fin service

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './Components/menu/menu.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { BienvenidosComponent } from './bienvenidos/bienvenidos.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PiedepagComponent } from './components/piedepag/piedepag.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    MenuComponent,
    RegistrarComponent,
    BienvenidosComponent,
    InicioComponent,
    UsuariosComponent,
    UsuarioComponent,
    PiedepagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CargarscriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
