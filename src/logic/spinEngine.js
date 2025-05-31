import { SYMBOL_KEYS } from "../data/symbols";

export function generateSpinGrid() {
  const grid = [];
  for (let row = 0; row < 3; row++) {
    const fila = [];
    for (let col = 0; col < 5; col++) {
      const randomSymbol =
        SYMBOL_KEYS[Math.floor(Math.random() * SYMBOL_KEYS.length)];
      fila.push(randomSymbol);
    }
    grid.push(fila);
  }
  return grid;
}
