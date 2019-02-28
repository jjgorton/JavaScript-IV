/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

class GameObject {
    constructor(attr) {
        this.createdAt = attr.createdAt;
        this.name = attr.name;
        this.dimensions = attr.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

class CharacterStats extends GameObject {
    constructor(charAttr) {
        super(charAttr);
        this.healthPoints = charAttr.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

class Humanoid extends CharacterStats {
    constructor(humAttr) {
        super(humAttr);
        this.team = humAttr.team;
        this.weapons = humAttr.weapons;
        this.language = humAttr.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}

// Villain and Hero constructor functions:

class Villain extends Humanoid {
    constructor(evil) {
        super(evil);
        this.laugh = evil.laugh;
        this.influence = evil.influence;
        this.strike = evil.strike;
    }
    attack(enemy) {
        console.log(this.laugh);
        enemy.healthPoints = enemy.healthPoints - this.strike;
        if (enemy.healthPoints <= 0) {
            return `${this.name} attacked ${enemy.name}.`, enemy.destroy()
        }
        return `${this.name} attacked ${enemy.name}. ${enemy.name}'s health now at ${enemy.healthPoints}!`;
    }
}

class Hero extends Humanoid {
    constructor(triumph) {
        super(triumph);
        this.call = triumph.call;
        this.influence = triumph.influence;
        this.boost = triumph.boost;
        this.strike = triumph.strike;
    }
    attack(enemy) {
        console.log(this.call);
        enemy.healthPoints = enemy.healthPoints - this.strike;
        if (enemy.healthPoints <= 0) {
            return `${this.name} attacked ${enemy.name}.`, enemy.destroy()
        }
        return `${this.name} attacked ${enemy.name}. ${enemy.name}'s health now at ${enemy.healthPoints}!`;
    }

    useBoost() {
        this.healthPoints = this.healthPoints + this.boost;
        return `${this.name} used his boost, health now at ${this.healthPoints}.`
    }
}

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

//Villian:
const sorcerer = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 3,
        width: 2,
        height: 5,
    },
    healthPoints: 20,
    name: 'Sarumon',
    team: 'Wite Council',
    weapons: [
        'Wizzard Staff',
        'Dagger',
        'Dark sorcery',
    ],
    language: 'Ancient Tongue',
    laugh: "Mwahahahaha!!!",
    influence: 5,
    strike: 4,
});

//Hero:
const ranger = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 3,
    },
    healthPoints: 20,
    name: 'Aragorn',
    team: ' Rangers of the North',
    weapons: [
        ' Andúril'
    ],
    language: 'Ancient Tongue',
    call: "Battle Horn Cry",
    influence: 5,
    boost: 10,
    strike: 3,
});



console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log(sorcerer.attack(ranger));
console.log(ranger.attack(sorcerer));
console.log(sorcerer.attack(ranger));
console.log(ranger.attack(sorcerer));
console.log(ranger.attack(sorcerer));
console.log(sorcerer.attack(ranger));
console.log(ranger.attack(sorcerer));
console.log(sorcerer.attack(ranger));
console.log(ranger.useBoost());
console.log(sorcerer.attack(ranger));
console.log(ranger.attack(sorcerer));
console.log(ranger.attack(sorcerer));
console.log(sorcerer.attack(ranger));
console.log(sorcerer.attack(ranger));
console.log(ranger.attack(sorcerer));

// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!