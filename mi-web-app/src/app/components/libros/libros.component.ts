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
}