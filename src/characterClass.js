import { StatPoint } from './statPoint.js';

export class CharacterClass {
  constructor(data) {
    if(data === undefined){
      data = this.prototype.defaults;
    }

    this.health = data.health;
    this.dexterity = data.dexterity;
    this.strength = data.strength;
    this.intelligence = data.intelligence;
    this.equipment = data.equipment;
    this.abilities = data.abilities;
    this.unlocks = data.unlocks;
    this.intelligence = data.intelligence;
  }
}

CharacterClass.prototype.classes = {
  warrior: new CharacterClass({

    health: new StatPoint(115, 7),
    dexterity: new StatPoint(10, 0.75),
    strength: new StatPoint(13, 1.5),
    intelligence: new StatPoint(7, 0.5),

    equipment: [],
    abilities: [],
    unlocks: [],
    className: "Warrior"

  }),
  mage: new CharacterClass({

    health: new StatPoint(75, 4),
    dexterity: new StatPoint(8, 1),
    strength: new StatPoint(6, 0.5),
    intelligence: new StatPoint(12, 2),

    equipment: [],
    abilities: [],
    unlocks: [],
    className: "Mage"

  }),
  ranger: new CharacterClass({

    health: new StatPoint(85, 5),
    dexterity: new StatPoint(12, 1.5),
    strength: new StatPoint(10, 1),
    intelligence: new StatPoint(10, 1.25),

    equipment: [],
    abilities: [],
    unlocks: [],
    className: "Ranger"

  })
}

CharacterClass.prototype.defaults = {
  health: new StatPoint(100, 5),
  dexterity: new StatPoint(10, 1),
  strength: new StatPoint(10, 1),
  intelligence: new StatPoint(10, 1),

  equipment: [],
  abilities: [],
  unlocks: [],
  className: "Adventurer"
};
