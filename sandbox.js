class Temperature {
    constructor(celcius) {
        this.celcius = celcius;
    }
    get fahrenheit() {
        return this.celcius * 1.8 + 32;
    }
    set fahrenheit(value) {
        this.celcius = (value - 32) / 1.8;
    }
    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}

let boil = Temperature.fromFahrenheit(212);
console.log(boil.celcius);

let temp = new Temperature(22);
console.log(temp.fahrenheit);
temp.fahrenheit = 86;
console.log(temp.celcius);

let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100);
    }
};
// console.log(varyingSize.size);
// console.log(varyingSize.size);

// let ages = {
//     Boris: 39,
//     Liang: 22,
//     Júlia: 62,
// };
// console.log(`Júlia is ${ages["Júlia"]}`);
// console.log("Is Jack's age known?", "Jack" in ages);
// console.log("Is toString's age known", "toString" in ages);
// 
// console.log("toString" in Object.create(null));

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

// console.log(`Júlia is ${ages.get("Júlia")}`);
// console.log("Is Jack's age known?", ages.has("Jack"));
// console.log(ages.has("toString"));
// 
// console.log(Object.hasOwn({x: 1}, "x"));
// console.log(Object.hasOwn({x: 1}, "toString"));

const nums = [1, 2, 3, 4];

const triples = nums.map(num => num ** 3);
// console.log(triples);

class SecretiveObject {
    #getSecret() {
        return "I ate all the plums";
    }
    interrogate() {
        let shallISayIt = this.#getSecret();
        return "never";
    }
}

class RandomSource {
    #max;
    constructor(max) {
        this.#max = max;
    }
    getNumber() {
        return Math.floor(Math.random() * this.#max);
    }
}

// function ArchaicRabbit(type) {
//     this.type = type;
// }
// ArchaicRabbit.prototype.speak = function(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
// };
// let oldSchoolRabbit = new ArchaicRabbit("old school");

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");

Rabbit.prototype.toString = function() {
    return `a ${this.type} rabbit`;
};
// console.log(String(killerRabbit));

Rabbit.prototype.teeth = "small";
// console.log(killerRabbit.teeth);

killerRabbit.teeth = "long, sharp, and bloody";
// console.log(killerRabbit.teeth);
// console.log((new Rabbit("basic")).teeth);
// console.log(Rabbit.prototype.teeth);
// console.log(Array.prototype.toString == Object.prototype.toString);
// console.log([1, 2].toString());
// console.log(Object.prototype.toString.call([1, 2]));

class Particle {
    speed = 0;
    constructor(position) {
        this.position = position;
    }
}

let object = new class { getWord() { return "hello"; } };
// console.log(object.getWord());


// console.log(Object.getPrototypeOf(Rabbit));
// console.log(Object.getPrototypeOf(killerRabbit));

// console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// console.log(Object.getPrototypeOf(killerRabbit) == Rabbit.prototype);

function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}


