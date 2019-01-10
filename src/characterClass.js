import { StatPoint } from './statPoint.js';

export class CharacterClass {
  constructor(data) {
    if(data === undefined){
      data = CharacterClass.prototype.defaults;
    }

    this.health = data.health;
    this.dexterity = data.dexterity;
    this.strength = data.strength;
    this.intelligence = data.intelligence;
    this.equipment = data.equipment;
    this.abilities = data.abilities;
    this.unlocks = data.unlocks;
    this.intelligence = data.intelligence;
    this.name = data.name;
  }
}

CharacterClass.prototype.classes = {
  warrior: new CharacterClass({
    name: "Warrior",
    health: new StatPoint(115, 7),
    dexterity: new StatPoint(10, 0.75),
    strength: new StatPoint(13, 1.5),
    intelligence: new StatPoint(7, 0.5),

    equipment: [],
    abilities: [],
    unlocks: []
  }),
  mage: new CharacterClass({
    name: "Mage",
    health: new StatPoint(75, 4),
    dexterity: new StatPoint(8, 1),
    strength: new StatPoint(6, 0.5),
    intelligence: new StatPoint(12, 2),

    equipment: [],
    abilities: [],
    unlocks: []
  }),
  ranger: new CharacterClass({
    name: "Ranger",
    health: new StatPoint(85, 5),
    dexterity: new StatPoint(12, 1.5),
    strength: new StatPoint(10, 1),
    intelligence: new StatPoint(10, 1.25),

    equipment: [],
    abilities: [],
    unlocks: []
  })
}

CharacterClass.prototype.defaults = {
  name: "Adventurer",
  health: new StatPoint(100, 5),
  dexterity: new StatPoint(10, 1),
  strength: new StatPoint(10, 1),
  intelligence: new StatPoint(10, 1),

  equipment: [],
  abilities: [],
  unlocks: []
};

CharacterClass.prototype.getClassList = function(){
  return Object.keys(CharacterClass.prototype.classes);
}

CharacterClass.prototype.getClass = function(name){
  let classes = CharacterClass.prototype.getClassList();
  if(classes.includes(name)){
    console.log(`Found a class named ${name}`);
    return CharacterClass.prototype.classes[name];
  } else {
    console.log(`Didn't find a class named ${name}, sending default.`);
    let defaultClass = new CharacterClass;
    console.log(defaultClass);
    return defaultClass;
  }
}
