import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../entidades/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  @Input('adsadsasd')
  public usuario : Usuario;

  constructor(){
    this.usuario = new Usuario();
  }

  @Output()
  public eliminar = new EventEmitter();

  public informarEliminar(){
    this.eliminar.emit();

  }

}
