// Exercises
// 1. Which parts of a function’s type signature does TypeScript infer: the parameters, the return type, or both?
// 1. The return type

// 2. Is JavaScript’s arguments object typesafe? If not, what can you use instead?
// 2. No, the arguments object is not type safe. Function parameters should be used instead either passed in individually or with the spread operator.

// 3. I want the ability to book a vacation that starts immediately. Update the
// overloaded reserve function from earlier in this chapter (Overloaded Function
// Types) with a third call signature that takes just a destination, without an
// explicit start date.
type MyReserve = {
  (from: Date, to: Date, destination: string) : Reservation;
  (from: Date, destination: string) : Reservation;
  (destination: string) : Reservation;
}

let rs: MyReserve = (
  fromOrDestination: string | Date,
  toOrDestination?: string | Date,
  destination?: string
) => {
  if (
    fromOrDestination instanceof Date &&
    toOrDestination instanceof Date &&
    destination !== undefined
  ) {
    // Book a one-way trip
  } else if (
    fromOrDestination instanceof Date &&
    typeof toOrDestination === 'string'
  ) {
    // Book a round trip
  } else if (typeof fromOrDestination === 'string') {
    // Book a trip right away
  }
}

// 4. [Hard] Update our call implementation from earlier in the chapter (Using
// Bounded Polymorphism to Model Arity) to only work for functions whose second
// argument is a string. For all other functions, your implementation should
// fail at compile time.
function call<T extends [unknown, string, ...unknown[]], R>(
  f:(...args: T) => R,
  ...args: T
): R {
  return f(...args);
}

function fill(length: number, value: string): string[] {
  return Array.from({length}, () => value);
}

call(fill, 10, "a");

// 5. Implement a small typesafe assertion library, is. Start by sketching out
// your types.
type isFunc = <T>(a: T, b: T, ...rest: T[]) => boolean;
let is: isFunc = (
  a,
  b,
  ...rest
) => {
  return a === b && rest.every(v => v === rest[0])
}

// When you’re done, I should be able to use it like this:
// Compare a string and a string
is('string', 'otherstring') // false

// Compare a boolean and a boolean
is(true, false) // false

// Compare a number and a number
is(42, 42) // true

// Comparing two different types should give a compile-time error
is(10, 'foo') // Error TS2345: Argument of type '"foo"' is not assignable
// to parameter of type 'number'.

// [Hard] I should be able to pass any number of arguments
is([1], [1, 2], [1, 2, 3]) // false
