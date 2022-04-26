let play = Math.round(Math.random() * 100);
const sword = 10;
const magic = 20;
const spear = 15;
let backpacks = [magic, spear];
const error = 'NoWeapon';

class Hero {
    constructor(name) {
        this.name = name;
    }
    backpack = function () {
        try {
            if (backpacks.length === 0) {
                console.log('No Weapon');
            } else if (backpacks.length > 2) {
                console.log('Drop Weapon');
            }
        } catch (error) {
            // backpack.splice(Math.floor(Math.random() * backpack.length), 1);
            // console.log(backpack);
            console.log(error);
        }
    }
    attack = function () {
        let weapon = backpacks[Math.floor(Math.random() * backpacks.length)];;
        console.log(weapon);
        return weapon;;
        // if (magic) {
        //     Monster.punch - 20;
        //     console.log(Monster.punch);
        // }
    }
}
class Wizard extends Hero {
    constructor(name) {
        super(name);
        this.health = 150;
    }
}

class Swordsman extends Hero {
    constructor(name) {
        super(name);
        this.health = 100;
    }
}
class Monster {
    constructor(punch) {
        this.punch = 5;
    }
}
class Dragon extends Monster {
    constructor(punch) {
        super(punch);
        this.spits = 20;
    }
}
class Spider extends Monster {
    constructor(punch) {
        super(punch);
        this.bites = 8;
    }
}
const dejan = new Wizard('Dejan');

dejan.attack();

function start() {
    if (play < 50) {
        dejan.attack();
    } else if (play > 50) {

    }
}
start();

const monster = new Dragon();
console.log(monster);