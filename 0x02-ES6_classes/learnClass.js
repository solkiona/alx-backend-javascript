// class Animal{
//     constructor (name) {
//         this.name = name;
//     }

//     speaks() {
//         console.log(`${this.name} makes a noise`);
//     }
// }

// class Dog extends Animal {
//     constructor (name) {
//         super(name); // call the superclass and pass in the name parameter
//     }

//     speak() {
//         console.log(`${this.name} barks`);
//     }
// }

// const d = new Dog('Mitzie');
// d.speak();
// d.speaks();


/* NOTE IF THERE IS A CONSTRUCTOR PRESENT IN THE SUBCLASS , IT NEEDS TO FIRST CALL SUPER() BEFORE USING this. THE SUPER() KEYWORD CAN ALSO BE USED TO CALL CORRESPONDING METHODS OF SUPER CLASS */

// class Cat {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} makes a noise`)
//     }
// }

// // f there is a constructor present in the subclass, it needs to first call super() before using this. The super keyword can also be used to call corresponding methods of super class.

// class Lion extends Cat {
//     speak() {
//         super.speak();
//         console.log(`${this.name} roars`);
//     }
// }

// const l = new Lion("fuzzy")
// l.speak();

// class Animal {
//     speak() {
//         return this;
//     }

//     static eat() {
//         return this;
//     }
// }

// const obj = new Animal();
// obj.speak();
// const speak = obj.speak;
// speak();

// Animal.eat();
// const eat = Animal.eat;
// eat();

class C {
    #x;

    constructor(x) {
        this.#x = x;
    }
    static getX(obj) {
        if(#x in obj) return obj.#x;

        return "obj must be an instnce of C"
    }
}

console.log(C.getX(new C('foo')));
console.log(C.getX(new C(0.196)));
console.log(C.getX(new C(new Date())));
console.log(C.getX({}));