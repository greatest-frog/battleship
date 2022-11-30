import Ship from "../components/Ship/Ship";

describe("Ship", () => {
  test("Ship creates correctly 1", () => {
    const ship = new Ship(4);
    expect(ship.isSunk()).toBe(false);
  });

  test("Ship can be sunk correctly 1", () => {
    const ship = new Ship(4);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test("Ship can be sunk correctly 2", () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
