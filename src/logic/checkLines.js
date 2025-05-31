import { PAYLINES, PAYOUTS, WILDCARDS } from "../data/paytable";

// Devuelve el total ganado en una tirada, y qué líneas fueron ganadoras
export function checkWinningLines(grid, linesToCheck) {
  let totalWinnings = 0;
  const winningLines = [];

  for (let lineNum of linesToCheck) {
    const line = PAYLINES[lineNum];
    const symbols = line.map(([row, col]) => grid[row][col]);

    const firstSymbol = symbols.find((sym) => !WILDCARDS.includes(sym));
    if (!firstSymbol) continue;

    const isWinning = symbols.every(
      (sym) => sym === firstSymbol || WILDCARDS.includes(sym)
    );

    if (isWinning) {
      // Calcular multiplicadores por comodines
      let multiplier = 1;
      const spinCount = symbols.filter((sym) => sym === "SPIN").length;
      const orbCount = symbols.filter((sym) => sym === "MYSTIC_ORB").length;

      // Aplicar multiplicadores
      if (spinCount > 0) multiplier *= Math.pow(5, spinCount);
      if (orbCount > 0) multiplier *= Math.pow(2, orbCount);

      const basePayout = PAYOUTS[firstSymbol];
      const lineWinnings = basePayout * multiplier;

      totalWinnings += lineWinnings;
      winningLines.push({
        line: lineNum,
        baseSymbol: firstSymbol,
        basePayout,
        multiplier,
        total: lineWinnings,
        wildcards: {
          SPIN: spinCount,
          MYSTIC_ORB: orbCount,
        },
      });
    }
  }

  return { totalWinnings, winningLines };
}
