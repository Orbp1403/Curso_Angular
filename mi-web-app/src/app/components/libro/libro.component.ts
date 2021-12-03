import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css'],
})
export class LibroComponent implements OnInit {
  @Input() tituloLibro: string = "";
  @Output() libroClicked = new EventEmitter();

  constructor(private librosservice : LibrosService) {}

  ngOnInit(): void {}

  onClicked(){
    //this.libroClicked.emit()
    this.librosservice.eliminarLibro(this.tituloLibro)
  }
}
