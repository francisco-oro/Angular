import {Injectable} from '@angular/core';
import {Character} from "../interfaces/character.interface";
import {v4 as uuidv4} from "uuid";

@Injectable({
  providedIn: 'root'
})

export class DbzService {

    public characters: Character[] = [{
        id: uuidv4(),
        name: 'Krilin',
        power: 1000,
      },{
        id: uuidv4(),
        name: 'Goku',
        power: 9500
    }, {
        id: uuidv4(),
        name: 'Vegetta',
        power: 7500
    }];

  onNewCharacter(character: Character): void{
    const newCharacter: Character = { id: uuidv4(), ...character };

    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string){
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
