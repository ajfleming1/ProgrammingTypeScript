class C {}
let c: C // C is the instance type of the C class
     = new C; // C is C the value

enum E {F, G}
let e: E // E is the type E
     = E.F // E is the value of E


type State = {
  [key: string]: string;
}

class StringDatabase {
  state: State;
  get(value: string): (string | null) {
    return value in this.state ? this.state[value] : null;
  }

  set(key: string, value: string) : void {
    this.state[key] = value;
  }

  static from(state: State) {
    let db = new StringDatabase();
    for(let key in state){
      db.set(key, state[key]);
    }

    return db;
  }
}
