import { useState } from "react";
import SlotGrid from "./components/SlotGrid/SlotGrid";
import SpinButton from "./components/SpinButton/SpinButton";
import GameHeader from "./components/GameHeader/GameHeader";
import GameControls from "./components/GameControls/GameControls";
import Paytable from "./components/Paytable/Paytable";
import PaylinesViewer from "./components/PaylinesViewer/PaylinesViewer";
import HistoryPanel from "./components/HistoryPanel/HistoryPanel";
import { generateSpinGrid } from "./logic/spinEngine";
import { checkWinningLines } from "./logic/checkLines";
import SimulationPanel from "./components/SimulationPanel/SimulationPanel";
import "./App.css";

const title = "🎰 Máquina Tragamonedas";

const App = () => {
  const [grid, setGrid] = useState(generateSpinGrid());
  const [credits, setCredits] = useState(10000);
  const [lines, setLines] = useState(3);
  const [lastWin, setLastWin] = useState(0);
  const [totalWins, setTotalWins] = useState(0);
  const [history, setHistory] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSpin = () => {
    const bet = lines * 10;
    if (credits < bet) {
      setErrorMessage("Créditos insuficientes para esta apuesta.");
      return;
    }
    setErrorMessage("");
    const newGrid = generateSpinGrid();
    const linesToCheck = Array.from({ length: lines }, (_, i) => i + 1);
    const { totalWinnings, winningLines } = checkWinningLines(
      newGrid,
      linesToCheck
    );
    const newCredits = credits - bet + totalWinnings;

    setGrid(newGrid);
    setCredits(newCredits);
    setLastWin(totalWinnings);
    setTotalWins((prev) => prev + totalWinnings);
    setHistory((prev) => [
      ...prev,
      {
        won: totalWinnings,
        lines: winningLines,
        grid: JSON.parse(JSON.stringify(newGrid)),
      },
    ]);
  };

  return (
    <div className="app-container">
      <div className="main-panel">
        <div className="game-section">
          <GameHeader title={title} credits={credits} totalWins={totalWins} />
          <SlotGrid grid={grid} />
          {errorMessage && (
            <div
              className="error-message"
              style={{ color: "red", marginTop: "8px" }}
            >
              {errorMessage}
            </div>
          )}
          <SpinButton onSpin={handleSpin} disabled={credits < lines * 1} />
          <GameControls lines={lines} setLines={setLines} lastWin={lastWin} />
        </div>

        <div className="info-section">
          <Paytable />
          <PaylinesViewer />
        </div>
      </div>

      <HistoryPanel history={history} />

      <div className="simulation-section">
        <SimulationPanel />
      </div>
    </div>
  );
};

export default App;
