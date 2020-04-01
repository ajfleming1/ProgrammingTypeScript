// Sushi type and ISushi interface are identical.
type Sushi = {
  calories: number,
  salty: boolean,
  tasty: boolean
}

interface ISushi {
  calories: number,
  salty: boolean,
  tasty: boolean
}

// Declaration Merging - works only with interfaces.
interface User {
  age: number
}

interface User {
  name: string
}

let a: User = {
  age: 10,
  name: "Ashley"
};

type UserType = {
  age: number
}

type UserType = {
  name: string
}
