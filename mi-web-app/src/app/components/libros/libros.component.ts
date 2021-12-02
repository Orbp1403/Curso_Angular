import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit {
  libros = ['Matematica 1', 'Algoritmos Basico', 'Algebra Nivel Basico'];


  constructor() {}

  ngOnInit(): void {}

  eliminarLibro(libro) {
    this.libros = this.libros.filter((p) => p !== libro);
  }

  guardarLibro(formulario){
    if(formulario.valid){
      this.libros.push(formulario.value.nombreLibro)
    }
  }
}
