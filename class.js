class Animal {
    constructor(color) {
        this.color = color;
    }
    eat() {
        console.log('먹기');
    }
    sleep() {
        console.log('자기');
    }
}
const tiger = new Animal('yellow');
console.log(tiger);
tiger.eat();
console.log(tiger.eat());

class Dog extends Animal {
    constructor(color, breed) {
        super(color);
        this.breed = breed;

    }
    eat() {
        super.eat();
        console.log('냠냠');
    }

    play() {
        console.log('놀기')
    }

}

const dog = new Dog('white', 'Samoyed');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
console.log(`${dog.breed} is ${dog.color}`);



//counter 만들기//
class Counter {#
    value;
    constructor(startValue) {
        this.value = startValue;

    }
    get value() {
        return this.value;
    }
    increment = () => {
        this.value++;

    }
}
const counter = new Counter(0);
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.value);