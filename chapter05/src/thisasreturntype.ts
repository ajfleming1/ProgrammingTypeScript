class MySet {
  mySet: number[];
  constructor(){
    this.mySet = [];
  }

  has(value: number): boolean {
    return this.mySet.indexOf(value) > -1;
  }

  add(value: number): this {
    if(!this.has(value)) {
      this.mySet = [...this.mySet, value];
      return this;
    }
  }
}

let set = new MySet();
set.add(1).add(2).add(3);
console.log(set);

class MutableSet extends MySet {
  delete(value: number): boolean {
    if(this.has(value)){
      this.mySet = this.mySet.filter(f => f !== value);
      return true;
    }

    return false;
  }
}

let myMuSet = new MutableSet();
myMuSet.add(1).add(2).add(3);
console.log(myMuSet.delete(1));
console.log(myMuSet);
console.log(myMuSet.delete(10));
