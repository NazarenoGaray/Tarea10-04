import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../entidades/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public usuario : string ='';
  public contrasena2 : string='';


  public validar(){
    localStorage.getItem("user");
    let user: Array<Usuario> = <Array<Usuario>>JSON.parse(localStorage.getItem("usuario")??"[]");
    let i = user.findIndex(x=>x.nombre==this.usuario);
    if(i<0){
      alert("El Usuario no existe");
      return;
    }
    if(user[i].contrasena == this.contrasena2){
      this.router.navigateByUrl("bienvenido");      
      
    }else{
      alert("Contraseña incorrecta");
    }
  }
  public Cancelar(){
    alert("Se cancelo el registro");
    this.router.navigateByUrl("");
  }
  /**
   *
   */
  constructor( public router : Router) {
    
  }
}
