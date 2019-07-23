import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamanio">
      Hola mundo... esto es una etiqueta
    </p>
    
    <button class="btn btn-primary" (click)="tamanio = tamanio + 5">
      <i class="fas fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="tamanio = tamanio - 5">
      <i class="fas fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamanio:number = 20;


  constructor() { }

  ngOnInit() {
  }

}
