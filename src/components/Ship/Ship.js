export default class Ship {
  constructor(length) {
    this._length = length;
    this._hits = 0;
    this._sunk = false;
  }
  hit() {
    if (this._hits < this._length) this._hits += 1;
  }
  isSunk() {
    if (this._length == this._hits) this._sunk = true;
    return this._sunk;
  }
}
