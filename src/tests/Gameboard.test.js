import Gameboard from "../components/Gameboard/Gameboard";

describe("Gameboard", () => {
  test("Gameboard receive attacks 1", () => {
    const gameboard = new Gameboard();
    expect(gameboard.receiveAttack([1, 2])).toBe(false);
  });
  test("Gameboard receive attacks 2", () => {
    const gameboard = new Gameboard();
    gameboard.placeShip([0, 0], 4, "vertical");
    expect(gameboard.receiveAttack([0, 0])).toBe(true);
  });

  test("Game ends 1", () => {
    const gameboard = new Gameboard();
    expect(gameboard.isEnd()).toBe(1);
  });

  test("Game ends 2", () => {
    const gameboard = new Gameboard();
    gameboard.placeShip([0, 0], 1, "vertical");
    gameboard.receiveAttack([0, 0]);
    expect(gameboard.isEnd()).toBe(1);
  });

  test("Game not ends 1", () => {
    const gameboard = new Gameboard();
    gameboard.placeShip([0, 0], 1, "vertical");
    expect(gameboard.isEnd()).toBe(0);
  });

  test("Game not ends 2", () => {
    const gameboard = new Gameboard();
    gameboard.placeShip([0, 0], 2, "vertical");
    gameboard.receiveAttack([0, 0]);
    expect(gameboard.isEnd()).toBe(0);
  });
});
