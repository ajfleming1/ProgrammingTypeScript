type Color = 'Black' | 'White';
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type ChessFile = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
class Game {};
class Piece {
  protected position: Position;
  constructor(
    private readonly color: Color,
    file: ChessFile,
    rank: Rank
  ) {
    this.position = new Position(file, rank);
  }
};

class Position {
  constructor(
    private file: ChessFile,
    private rank: Rank
  ) { }
};

let x = new Piece('White', 'A', 2);
//x.position;
