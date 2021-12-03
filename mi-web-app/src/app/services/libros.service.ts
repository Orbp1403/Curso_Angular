import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {

  librosSubject = new Subject()

  private libros = [
    'Libro del Curso',
    'Libro de Aritmetica',
    'El gráfico revista',
  ];

  constructor() {}

  getLibrosSubject(){
    return this.librosSubject
  }

  getLibros() {
    return [...this.libros];
  }

  agregarLibro(libroNombre : string) {
    this.libros.push(libroNombre);
    this.librosSubject.next()
  }

  eliminarLibro(libroNombre : string){
    this.libros = this.libros.filter((p) => p != libroNombre);
    this.librosSubject.next()
  }
}
