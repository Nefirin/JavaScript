let math = {
    min: function (valueA, valueB) { return valueA < valueB ? valueA : valueB; },
    max: function (valueA, valueB) { return valueA > valueB ? valueA : valueB; },
    avarage: function (tomb) {
        let sum = 0;
        for (let i = 0; i < tomb.length; i++) {
            sum += tömb[i];
        }
        return sum / tomb.length
    },
    isNumber: function (szam) {
        let parsedValue = parseInt(szam);
        if (parsedValue && !isNaN(parsedValue)) {
            return true;
        }
        return false;
    }

}

console.log(math.min(1, 3));

class Anial {
    animalName;
    constructor(nameOfAnimal, bornYear) {
        this.animalName = nameOfAnimal;
        this.#age = 2021 - bornYear;
    }

    walk() {
        console.log(this.animalName + " sétál");
    }

    setName(nameOfAnimal) {
        this.animalName = nameOfAnimal;
    }

    getName() {
        return this.animalName;
    }

    setAge(animalAge) {
        this.#age = animalAge;
    }

    getAge() {
        return this.#age;
    }
}
let dog = new Animal("Morzsi");
console.log(dog);


class Circle {
    constructor(customRadius) {
        this.#hiddenRadius = customRadius;
    }

    get radius() {
        return this.#hiddenRadius;
    }

    set radius(newRadius) {
        this.#hiddenRadius = newRadius;
    }
}
let smallCricle = new Circle(3);

console.log(smallCricle.radius);

smallCricle.radius = 4;
console.log(smallCricle.radius);