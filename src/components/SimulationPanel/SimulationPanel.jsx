import { useState } from "react";
import { generateSpinGrid } from "../../logic/spinEngine";
import { checkWinningLines } from "../../logic/checkLines";
import "./SimulationPanel.css";

const SimulationPanel = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const simulate = () => {
    setLoading(true);
    setTimeout(() => {
      const totalSpins = 10000;
      const lines = 5;
      const betPerSpin = lines * 10;
      let totalBet = 0;
      let totalWon = 0;
      let winCount = 0;
      let lossCount = 0;
      let maxWin = 0;
      let minWin = Infinity;
      let winAmounts = [];

      for (let i = 0; i < totalSpins; i++) {
        const grid = generateSpinGrid();
        const linesToCheck = [1, 2, 3, 4, 5];
        const { totalWinnings } = checkWinningLines(grid, linesToCheck);
        totalBet += betPerSpin;
        totalWon += totalWinnings;
        if (totalWinnings > 0) {
          winCount++;
          winAmounts.push(totalWinnings);
          if (totalWinnings > maxWin) maxWin = totalWinnings;
          if (totalWinnings < minWin) minWin = totalWinnings;
        } else {
          lossCount++;
        }
      }

      const rtp = (totalWon / totalBet) * 100;
      const winPercent = (winCount / totalSpins) * 100;
      const lossPercent = (lossCount / totalSpins) * 100;
      const avgWin =
        winAmounts.length > 0
          ? winAmounts.reduce((a, b) => a + b, 0) / winAmounts.length
          : 0;
      setResults({
        totalSpins,
        totalBet,
        totalWon,
        winCount,
        lossCount,
        rtp,
        winPercent,
        lossPercent,
        avgWin,
        maxWin: winAmounts.length > 0 ? maxWin : 0,
        minWin: winAmounts.length > 0 ? minWin : 0,
      });
      setLoading(false);
    }, 100);
  };

  return (
    <div className="simulation-panel">
      <h3>🧪 Simulación de 10,000 Jugadas</h3>
      <button onClick={simulate} disabled={loading}>
        {loading ? "Simulando..." : "Ejecutar Simulación"}
      </button>
      {results && (
        <div className="simulation-results">
          <h4>Resultados:</h4>
          <ul>
            <li>
              Total apostado: <b>{results.totalBet}</b> créditos
            </li>
            <li>
              Total ganado: <b>{results.totalWon}</b> créditos
            </li>
            <li>
              RTP (Retorno al Jugador): <b>{results.rtp.toFixed(2)}%</b>
            </li>
            <li>
              Jugadas ganadoras: <b>{results.winCount}</b> (
              {results.winPercent.toFixed(2)}%)
            </li>
            <li>
              Jugadas perdidas: <b>{results.lossCount}</b> (
              {results.lossPercent.toFixed(2)}%)
            </li>
            <li>
              Ganancia promedio por jugada ganadora:{" "}
              <b>{results.avgWin.toFixed(2)}</b> créditos
            </li>
            <li>
              Mayor ganancia en una jugada: <b>{results.maxWin}</b> créditos
            </li>
            <li>
              Menor ganancia en una jugada: <b>{results.minWin}</b> créditos
            </li>
          </ul>
          <div className="simulation-summary">
            <p>
              {results.rtp > 100
                ? "El juego está desbalanceado a favor del jugador."
                : results.rtp < 90
                ? "El juego está desbalanceado a favor de la casa."
                : "El juego está razonablemente balanceado."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimulationPanel;
