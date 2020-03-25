type Reservation = unknown;

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation;
  (from: Date, destination: string) : Reservation;
}

let r: Reservation = (
  from: Date,
  toOrDestination: string | Date,
  destination? : string
) => {
  if(toOrDestination instanceof Date && destination !== undefined) {
    // Round trip
  } else if(typeof toOrDestination === 'string') {
    // One way trip
  }
}
