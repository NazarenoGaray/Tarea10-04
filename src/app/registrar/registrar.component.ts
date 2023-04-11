import { Component } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  public user : string ='';
  public password : string='';
  public password2 : string='';

  
  public Registrar(){
    var users = [];
    users = JSON.parse(localStorage.getItem("user")??"[]");
    var user = {nombre : this.user, contraseña : this.password};

    if(this.password == this.password2){
        localStorage.setItem("user",JSON.stringify(users));
    }else{
      alert("Las contraseñas no coinciden");
    }
  }
}
