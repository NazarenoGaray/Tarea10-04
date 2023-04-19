import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../entidades/usuario';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  public usuario = new Usuario();
  public contrasena2 : string='';
  public flag: boolean=false;
  
  public Registrar(){
    var usuarios : Usuario[] = [];
    usuarios = JSON.parse(localStorage.getItem("usuario")??"[]");
      
    if(this.flag=true){
      localStorage.getItem("usuario");
      let usuario: Array<Usuario> = <Array<Usuario>>JSON.parse(localStorage.getItem("usuario")??"[]");
      let i = usuario.findIndex(x=>x.nombre==this.usuario.nombre);
      if(i>-1){
        alert("El usuario ya existe");
        return;
      }
    }
    usuarios.push(this.usuario)

    if(this.usuario.contrasena == this.contrasena2){
        localStorage.setItem("usuario",JSON.stringify(usuarios));
        alert("Cuenta registrada con exito");  
        this.router.navigateByUrl("login");
    }else{
      alert("Las contraseñas no coinciden");
    }
    this.flag=true;
  }
  public Cancelar(){
    alert("Se cancelo el registro");
    this.router.navigateByUrl("");
  }
  constructor( public router : Router) {
    
  }
  
}
