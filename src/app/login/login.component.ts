import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user : string ='';
  public password : string='';
  public password2 : string='';


  public validar(){
    localStorage.getItem("user");
    let user: Array<any> = <Array<any>>JSON.parse(localStorage.getItem("user")??"[]");
    let i = user.findIndex(x=>x.nombre==this.user);
    if(i<0){
      return;
    }
    if(user[i].password==this.password){
      this.router.navigateByUrl("Bienvenido");      
      
    }else{
      alert("Contraseña incorrecta");
    }
  }

  /**
   *
   */
  constructor( public router : Router) {
    
  }
}
