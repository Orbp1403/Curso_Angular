import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarioNombre = '';
  usuarios = ['Usuario1', 'Usuario2', 'Usuario3'];
  visible = false

  constructor() {
    setTimeout(() => {
      this.visible = true  
    }, 3000)
  }

  ngOnInit(): void {
  }

  onAgregarUsuario(){
    this.usuarios.push(this.usuarioNombre)
    this.usuarioNombre = ''
  }
}
