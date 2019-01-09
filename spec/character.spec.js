import { Character } from './../src/character.js';
import { CharacterClass } from './../src/characterClass.js';

describe("Character", () => {

  it("should initialize a character with the correct class based on a class name", () => {
    let warrior = new Character("warrior");
    expect(warrior.getClassName()).toEqual("Warrior");
    expect(warrior.getMaxHP()).toEqual(CharacterClass.prototype.classes.warrior.health);
    expect(warrior.getStat("strength")).toEqual(CharacterClass.prototype.classes.warrior.strength);
    expect(warrior.getStat("intelligence")).toEqual(CharacterClass.prototype.classes.warrior.intelligence);
    expect(warrior.getStat("dexterity")).toEqual(CharacterClass.prototype.classes.warrior.dexterity);
  });

  it("should initialize all classes correctly", () => {
    let mage = new Character("mage");
    let ranger = new Character("ranger");

    expect(mage.getClassName()).toEqual("Mage");
    expect(ranger.getClassName()).toEqual("Ranger");
  });

  it("should default to adventurer if it doesn't recognize the given class name", () => {
    let adventurer = new Character("Zombie Hunter");

    expect(adventurer.getClassName()).toEqual("Adventurer");
  });

});
