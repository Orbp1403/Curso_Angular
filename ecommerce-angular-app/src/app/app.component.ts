import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'ecommerce-angular-app';

  constructor(private fs : Firestore){}

  ngOnInit() {
    const coll = collection(this.fs, 'test')
    collectionData(coll).subscribe(personas => {
      console.log(personas)
      personas.map(x => {
        console.log(x)
      })
    })
  }
}
