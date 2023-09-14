(()=>{

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    sayHi() {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
  }

  const person = new Person('John', 30);
  person.sayHi();

})();