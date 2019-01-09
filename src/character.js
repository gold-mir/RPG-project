import { CharacterClass } from './characterClass.js'

export class Character {
  constructor(cclass = new CharacterClass(CharacterClass.prototype.defaults)){
    this.characterClass = cclass;
  }

  //Sets up a character's base stats and abilities based on their class
  init(){

  }

  //Increases a character's level and adds any required stats and unlocks
  levelUp(){

  }
}
