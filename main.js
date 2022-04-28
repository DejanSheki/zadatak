let play = Math.round(Math.random() * 100);
const sword = 10;
const magic = 20;
const spear = 15;
let backpacks = [magic, spear, sword];
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
            // console.log(error);
        }
    }
    attack() {
        let weapon = backpacks[Math.floor(Math.random() * backpacks.length)];;
        // console.log(weapon);
        return weapon;
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
    constructor() {
        this.punch = 5;
        this.health = 80;
    }
    attack() {
        let weapon = backpacks[Math.floor(Math.random() * backpacks.length)];;
        // console.log(weapon);
        return weapon;
    }
}
class Dragon extends Monster {
    constructor(punch, health) {
        super(punch, health);
        this.spits = 20;
    }
    attack() {
        let monsterWeapon = [this.punch, this.spits];
        let weapon = monsterWeapon[Math.floor(Math.random() * monsterWeapon.length)];;
        // console.log(weapon);
        return weapon;
    }
}
class Spider extends Monster {
    constructor(punch, health) {
        super(punch);
        this.bites = 8;
    }
}
const dejan = new Wizard('Dejan');
const monster = new Dragon();

function start() {
    if (play < 50) {
        monster.health = monster.health - dejan.attack();
        console.log('monster: ' + monster.health);
    } else if (play > 50) {
        dejan.health = dejan.health - monster.attack();
        console.log('dejan: ' + dejan.health);
    }
    if (monster.health === 0) {
        console.log('Monster is dead!');
        return;
    } else if (dejan.health === 0) {
        console.log('Dejan is dead!');
        return;
    } else {
        start();
    }
}

start();