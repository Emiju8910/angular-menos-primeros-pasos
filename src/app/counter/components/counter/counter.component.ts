import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:`
    <p>Contador: {{counter}}</p>

  <button (click)="increaseBy(1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>

  `
})

export class CounterComponent {
  public counter= 10 ;

  increaseBy(valor:number):void{
    this.counter += valor;
  }
  reset():void{
    this.counter = 10;
  }
}
