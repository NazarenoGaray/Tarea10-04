import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  public user : string ='';
  public password : string='';
  public password2 : string='';
  public flag: boolean=false;
  
  public Registrar(){
    var users = [];
      users = JSON.parse(localStorage.getItem("user")??"[]");
      var user = {name : this.user, password : this.password};
    if(this.flag=true){
      localStorage.getItem("user");
      let user: Array<any> = <Array<any>>JSON.parse(localStorage.getItem("user")??"[]");
      let i = user.findIndex(x=>x.name==this.user);
      if(i>-1){
        alert("El usuario ya existe");
        return;
      }
    }
    users.push(user)

    if(this.password == this.password2){
        localStorage.setItem("user",JSON.stringify(users));
        alert("Cuenta registrada con exito");  
        this.router.navigateByUrl("login");
    }else{
      alert("Las contraseñas no coinciden");
    }
    this.flag=true;
  }
  constructor( public router : Router) {
    
  }
}
