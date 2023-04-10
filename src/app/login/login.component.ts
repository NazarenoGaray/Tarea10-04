import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  pass : string = "1234";
  password : string = "";
  flag:boolean = false;
  public validar(){
    if(this.pass==this.password){
      alert("Logueado");
      this.flag = true;
      
    }else{
      alert("Contraseña incorrecta");
    }
  }
}
