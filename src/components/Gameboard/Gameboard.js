import Ship from "../Ship/Ship";

export default class Gameboard {
  constructor() {
    this._board = {};
    this._missed = new Set();
    this._ships = new Array();
  }
  receiveAttack([x, y]) {
    const ship = this._board[`${x}${y}`];
    if (ship) {
      ship.hit();
      return true;
    } else {
      this._missed = `${x}${y}`;
      return false;
    }
  }

  placeShip([x, y], length, orientation) {
    const ship = new Ship(length);
    if (orientation === "horizontal") {
      for (let i = y; i < y + length; i++) {
        this._board[`${x}${i}`] = ship;
      }
    } else {
      for (let i = x; i < x + length; i++) {
        this._board[`${i}${y}`] = ship;
      }
    }
    this._ships.push(ship);
  }

  isEnd() {
    return this._ships.reduce((prev, ship) => prev & ship.isSunk(), 1);
  }
}
