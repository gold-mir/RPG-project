import { CharacterClass } from './characterClass.js'

export class Character {
  constructor(className){
    let characterClass = CharacterClass.prototype.getClass(className);
    this.class = characterClass;
    this.stats = {};

    this.stats.health = this.class.health;
    this.stats.dexterity = this.class.dexterity;
    this.stats.intelligence = this.class.intelligence;
    this.stats.strength = this.class.strength;

    this.inventory = this.class.equipment;
    this.abilities = this.class.abilities;
  }

  getClassName(){
    return this.class.name;
  }

  getMaxHP(){
    return this.stats.health;
  }

  getStat(stat){
    let statData = this.stats[stat];
    return statData;
  }

  //Sets up a character's base stats and abilities based on their class
  init(){

  }

  //Increases a character's level and adds any required stats and unlocks
  levelUp(){

  }
}
