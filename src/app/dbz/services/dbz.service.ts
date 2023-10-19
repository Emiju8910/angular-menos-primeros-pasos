import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

console.log(uuid());

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[]= [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  //Antes de ponser los uuid, solo funcionaba con indice
/*   onNewCharacters(character:Character):void{
    this.characters.push(character);
  }

  onDeleteCharacters(index:number):void{
    this.characters.splice(index,1);
  } */

  addCharacter(character:Character):void{
    //Como el id es opcional en la interfas, se hace estoo para decirle que ponga el uuid y que se traiga todo los demas datos restantes
    const newCharacter: Character = { id:uuid(), ...character}
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id:string):void{
    this.characters = this.characters.filter(character => character.id!== id);
  }

}
