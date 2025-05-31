import { PAYLINES } from "../../data/paytable";
import "./PaylinesViewer.css";

const PaylinesViewer = () => {
  const renderPayline = (lineNumber) => {
    const line = PAYLINES[lineNumber];
    const grid = Array(3)
      .fill()
      .map(() => Array(5).fill(false));

    line.forEach(([row, col]) => {
      grid[row][col] = true;
    });

    return (
      <div className="payline-grid">
        {grid.map((row, rowIndex) => (
          <div className="payline-row" key={rowIndex}>
            {row.map((isActive, colIndex) => (
              <div
                className={`payline-cell ${isActive ? "active" : ""}`}
                key={colIndex}
              >
                {isActive ? "✓" : ""}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="paylines-section">
      <h3>📈 Líneas Ganadoras</h3>
      <div className="paylines-container">
        {Object.keys(PAYLINES).map((lineNumber) => (
          <div key={lineNumber} className="payline-card">
            <h4>Línea {lineNumber}</h4>
            {renderPayline(Number(lineNumber))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaylinesViewer;
