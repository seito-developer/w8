(()=>{

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    sayHi() {
      console.log("Hi, I'm {name} and I'm ${age} years old.");
    }
  }

  const person = new Person('John', 30);

})();