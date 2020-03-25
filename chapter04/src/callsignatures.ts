type Greet = (name: string) => string;
type Log = (message: string, userId?: string) => void;
type Sum = (...numbers: number[]) => number;

let g: Greet = (
  name,
) => {
  return `"Hello ${name}"`;
}

let l: Log = (
  message,
  userId = "Unknown User"
) => {
  console.log(userId, message);
}

let s: Sum = (
  ...numbers
) => {
  let tot = 0;
  for(let n of numbers){
    tot += n;
  }
  return tot;
}

l(g("Drew"));
l("Logging", "Rosie");
l(s(1,2,3,4,5).toString(),"Sum");
