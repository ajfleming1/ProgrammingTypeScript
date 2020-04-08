function parse(birthday: string): Date[] {
  let date = new Date(birthday);
  if(!isValid(date)){
    return[];
  }

  return [date];
}

function isValid(date: Date) : boolean {
  return Object.prototype.toString.call(date) === '[object Date]' &&
         !Number.isNaN(date.getTime());
}

function prompt(text: string){
  return null;
}

function ask() {
  let result = prompt('When is your birthday');
  if(result === null){
    return [];
  }

  return [result];
}

//ask().map(parse)
//     .map(date => date.toISOString())
//     .forEach(date => console.info('Date is', date));

interface Option<T> {
  flatMap<U>(f: (value: T) => None) : None;
  flatMap<U>(f: (value: T) => Option<U>): Option<U>;
  getOrElse(value: T): T
};

class Some<T> implements Option<T> {
  constructor(private value: T) {};
  flatMap<U>(f: (value: T) => None): None
  flatMap<U>(f: (value: T) => Some<U>): Some<U>
  flatMap<U>(f: (value: T) => Option<U>): Option<U> {
    return f(this.value);
  }
  getOrElse(): T {
    return this.value;
  }
}

class None implements Option<never> {
  flatMap(): None {
    return this;
  }
  getOrElse<U>(value: U): U {
    return value;
  }
}

function Option<T>(value: null | undefined): None;
function Option<T>(value: T): Some<T>;
function Option<T>(value: T): Option<T> {
  if(value == null){
    return new None;
  }

  return new Some(value);
}

let result = Option(6)
            .flatMap(n => Option(n * 3))
            .flatMap(n => new None)
            .getOrElse(7);

ask()
    .flatMap(parse)
    .flatMap(date => new Some(date.toISOString())) // Parameter 'date' implicitly has an 'any' type.
    .flatMap(date => new Some("Date is" + date)) // Parameter 'date' implicitly has an 'any' type.
    .getOrElse('Error parsing the date');
