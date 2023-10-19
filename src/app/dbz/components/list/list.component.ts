import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  //esto funcionaba cuando era por indice
/*   @Output()
  public onDelete: EventEmitter<number> = new EventEmitter<number>();

  onDeleteCharacter(index:number):void{
    this.onDelete.emit(index);
    console.log({index})
  } */

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter<string>();

  onDeleteCharacter(id?:string):void{
    if (!id) return;
    this.onDelete.emit(id);
    console.log({id})
  }
}
