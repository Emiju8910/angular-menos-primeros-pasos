import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Ironman','Thor','Hulk','She Hulk','Hawkeye'];
  public deletedHeroes?: string;

  deletedEnd():void{
    this.deletedHeroes = this.heroNames.pop();
  }
}
