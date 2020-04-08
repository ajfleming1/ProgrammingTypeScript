function get<
  O extends Object,
  K extends keyof O
>(
  o: O,
  k: K
){
  return o[k];
}


let user = {
  name: "Drew",
  friends: [
    "Larry",
    "Jason",
    "Chris"
  ]
}

console.log(get(user, "name"));

type OverLoadGet = {
  <
    O extends Object,
    K1 extends keyof O
  >(o: O, k1: K1): O[K1]
  <
    O extends Object,
    K1 extends keyof O,
    K2 extends keyof O[K1]
  >(o: O, k1: K1, k2: K2): O[K1][K2]
  <
    O extends Object,
    K1 extends keyof O,
    K2 extends keyof O[K1],
    K3 extends keyof O[K1][K2]
  >(o: O, k1: K1, k2: K2, k3: K3): O[K1][K2][K3]
}

let myGet: OverLoadGet = (object: any, ...keys: string[]) => {
  let result = object;
  keys.forEach(k => result = result[k]);
  return result;
}

console.log(myGet(user, "friends"));
