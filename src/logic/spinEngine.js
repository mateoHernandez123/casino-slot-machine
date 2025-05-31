import { SYMBOL_WEIGHTS } from "../data/probability";

// Función auxiliar para obtener un símbolo según su peso
function getWeightedSymbol() {
  const weightedList = [];

  for (const [symbol, weight] of Object.entries(SYMBOL_WEIGHTS)) {
    for (let i = 0; i < weight; i++) {
      weightedList.push(symbol);
    }
  }

  const randomIndex = Math.floor(Math.random() * weightedList.length);
  return weightedList[randomIndex];
}

export function generateSpinGrid() {
  const grid = [];
  for (let row = 0; row < 3; row++) {
    const fila = [];
    for (let col = 0; col < 5; col++) {
      const symbol = getWeightedSymbol();
      fila.push(symbol);
    }
    grid.push(fila);
  }
  return grid;
}
