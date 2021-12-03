import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit, OnDestroy {
  libros: any = [];
  private libroSubscription : Subscription | undefined;

  constructor(private librosService: LibrosService) {}

  ngOnDestroy(): void {
    this.libroSubscription?.unsubscribe()
  }

  ngOnInit(): void {
    this.libros = this.librosService.getLibros();
    this.libroSubscription = this.librosService.getLibrosSubject().subscribe(() => {
      this.libros = this.librosService.getLibros();
    });
  }

  eliminarLibro(libro) {
    //this.libros = this.libros.filter((p) => p !== libro);
    this.eliminarLibro(libro)
  }

  guardarLibro(formulario) {
    if (formulario.valid) {
      this.librosService.agregarLibro(formulario.value.nombreLibro);
    }
  }
}
