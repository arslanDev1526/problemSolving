// class syntax
// class Car {
//     constructor(name,year){
// this.name = name;
// this.year = year;
//     }
// }
// const myCar1 = new Car("BMW",2014)
// const myCar2 = new Car("fofo",2024)
// console.log(myCar1, myCar2,"car")

// class Car {
//     constructor(name,year){

//         this.name = name;
//         this.year = year;
//      }

//      age( ) {
//         const date = new Date();
//         return date.getFullYear() - this.year;
//      }
// }

// const myCar = new Car("ofrd",2020);
// console.log(myCar.age(),"yrs")

// getter and setter functions

// class oops {
//     constructor(name) {
//         this.name = name;
//     }
//     get langName(){
// return this.name;
//     }

//     set langName(arslan) {

//         this.name = arslan}

//         hello(){
//              console.log(`Hello ${this.name}`)
//         }
// }

// let obj = new oops("jsjsjsjs");
// obj.langName = "arslanmnmn"

// console.log(obj.langName)
// console.log(obj.name);

// const person = {
//     firstName: "arslan",
//     lastName: "younas",

//     get fullName() {
//         return this.firstName + " " +  this.lastName;
//     },

//     set fullName(name) {
//     const parts = name.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
// }
// }

// // console.log(person.fullName);
// person.fullName = "arslan bhi";
// console.log(person.fullName);

// inheritance example code

// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return "i have " + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }

//   show() {
//     return this.present() + ", it is a " + this.model;
//   }
// }

// let myCar = new Model("ford", "mustang");

// console.log(myCar.show(),"catdata")

// Example of inhertiance

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   eat() {
//     console.log(`${this.name} is eating.`);
//   }
// }

// class Cat extends Animal {
//   meow() {
//     console.log(`${this.name} says meow.`);
//   }
// }

// const myAnimal = new Animal("kuta");
// const myCat = new Cat("Whiskers");

// console.log(myAnimal.eat());
// console.log(myCat.eat());
// console.log(myCat.meow());

// Example of Abstruct class

// class Vehicle {
//     constructor(){
//         if(new.target === Vehicle){
//             throw new Error ("cannot instantiate  abstract class");
//         }
//     }

//     start() {
//         throw new Error (' Mgethod not implemented');

//     }

//     stop(){
//         console.log('vehicle stoped');
//     }
// }

// class Car extends Vehicle {
//     start(){
//         console.log("car started");
//     }
// }

// class Motorcycle extends Vehicle {
//     start() {
//         console.log("motor started");
//     }
// }

// const car = new Car();

// console.log(car.start());
// console.log(car.stop());

// const motorcycle = new Motorcycle();
// console.log(motorcycle.start());
// console.log(motorcycle.stop());

// example of abstraction

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   makeSound() {
//     throw new Error("method isa not implemented");
//   }
// }

// class Dog extends Animal {
//   makeSound() {
//     return "Woof";
//   }
// }

// class Car extends Animal {
//   makeSound() {
//     return "meow";
//   }
// }

// const dog = new Dog("buddy");

// console.log(dog.name +  "says"  + dog.makeSound());

// example of polymorphism

// class Animal {
//     makeSound() {
//         console.log("Animal is making a sound!");
//     }
// }

// class Dog extends Animal {
//     makeSound() {

//         console.log("Dog is barking");
//     }
// }

// class Cat extends Animal {
//     makeSound() {
//         console.log("cat is meowing")
//     }
// }

// const animal1 = new Dog();
// const animal2 = new Cat();

// console.log(animal1.makeSound());
// console.log(animal2.makeSound());

// example of runtime polymorphism

// class Animal {
//     makeSound() {
//         console.log("animal is making a sound")
//     }
// }

// class Dog extends Animal {
//     makeSound() {
//         console.log("Dog is barking")
//     }
// }

// class Cat extends Animal {
//     makeSound() {
//         console.log( "Cat is meowing")
//     }
// }

// function performSound(animal){
//     animal.makeSound();
// }

// const animal1 = new Animal();
// const animal2 = new Dog();
// const animal3 = new Cat();

// performSound(animal3)

// CHAT GPT EXAMPLES AND EXPLANATION

// Method Overloading Example

// class Calculator {
//     add(a, b) {
//       return a + b;
//     }

//     add(a, b, c) {
//       return a + b + c;
//     }
//   }

//   const calc = new Calculator();

//   console.log(calc.add(2, 3));        // Output: 5 (Overloaded method with two parameters)
//   console.log(calc.add(2, 3, 4));     // Output: 9 (Overloaded method with three parameters)

// Method Overriding Example

//   class Animal {
//     makeSound() {
//       console.log("Animal is making a sound");
//     }
//   }

//   class Dog extends Animal {
//     makeSound() {
//     console.log("Dog is barking");
//     }
//   }

//   const animal = new Animal();
//   const dog = new Dog();

//   animal.makeSound();    // Output: Animal is making a sound
//   dog.makeSound();       // Output: Dog is barking

//  Method Overloading: The Calculator class has two add() methods. One method takes two parameters,
//  and the other method takes three parameters. The methods have the same name but different
//  parameter lists. When we call the add() method on the calc object, the appropriate overloaded
//  method is executed based on the number of arguments passed.

// Method Overriding: The Animal class has a makeSound() method, and the Dog class extends the Animal
// class and overrides the makeSound() method with its own implementation. When we call the
// makeSound() method on objects of the Animal and Dog classes, the actual implementation
// executed is determined by the type of the object. The Dog object's overridden method is invoked,
// showing the customized behavior.
