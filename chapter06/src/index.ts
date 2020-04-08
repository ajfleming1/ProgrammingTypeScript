type O = {a: {b: {c: string}}};
type K = keyof O;

type Exclusive<T, U> = T extends U ? never : U extends T ? never : U;
type myEx = Exclusive<1 | 2 | 3, 2 | 3 | 4>;

let globalCache = {
  get(key: string) {
    return `${key} user`;
  }
}

function fetchUser(){
    return globalCache.get('userId');
}

let userId: string = fetchUser();
userId.toUpperCase();
