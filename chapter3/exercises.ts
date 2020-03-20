// 1 - For each of these values, what type will TypeScript infer?
  let a = 1042; // number
  let b = 'apples and oranges'; // string
  const c = 'pineapples'; // pineappls (type literal)
  let d = [true, true, false]; // boolean[]
  let e = {type: 'ficus'}; // {type: string}
  let f = [1, false]; // [number | boolean]
  const g = [3]; // number[]
  let h = null; // any


  // 2 - Why does each of these throw the error it does?
  let i: 3 = 3;
      i = 4; // Error TS2322: Type '4' is not assignable to type 3.
  /* i is a type literal for the number 3 can it cannot be assigned type literal 4. */

  let j = [1, 2, 3]
      j.push(4)
      j.push('5') // Error TS2345: Argument of type '5' is not
                  // assignable tp parameter of type 'number'
  /* j is an array of numbers and '5' is a string. */

  let k: never = 4 // Error TSTS2322: Type '4' is not assignable
                   // to type never.
  // Never is a bottom type. That means never is assignable to every other type, but no type can be assigned to never. */

  let l: unknown = 4
  let m = l * 2 // Errr TS2571: Object is of type 'unknown.'
  /* The type unknown can represent any type at run time. For TypeScript to be satisfied with the use of unknown at compile type, logic has to be added that assures that the operations are safe. This can be accomplished by using type of, instance of, or another type query or type guard. */
