type ClassConstructor<T> = new(...args: any[]) => T;

function withEZDebug<C extends ClassConstructor<
  {getDebugValue(): object}>>(Class: C) {
  return class extends Class {
    debug() {
      let Name = Class.constructor.name;
      let value = this.getDebugValue();
      return Name + '(' + JSON.stringify(value) + ')';
    }
  }
}

class HardToDebug {
  name: string;
  age: number;
  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  getDebugValue() {
    return {
      name: this.name,
      age: this.age
    };
  }
}

let User = withEZDebug(HardToDebug);
let instance = new User("Drew", 25);
console.log(instance.debug());
