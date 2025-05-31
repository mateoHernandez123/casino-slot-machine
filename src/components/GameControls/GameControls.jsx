const GameControls = ({ lines, setLines, lastWin }) => {
  return (
    <div className="game-controls">
      <div className="bet-controls">
        <div className="lines-selector">
          <label className="selector-label">Líneas:</label>
          <select
            className="styled-select"
            value={lines}
            onChange={(e) => setLines(Number(e.target.value))}
          >
            <option value={1}>1 línea</option>
            <option value={3}>3 líneas</option>
            <option value={5}>5 líneas</option>
          </select>
        </div>
        <div className="bet-info">
          <div className="info-item">
            <span className="info-icon">🎯</span>
            <span>Costo: {lines} créditos</span>
          </div>
          <div className={`info-item ${lastWin > 0 ? "winning" : ""}`}>
            <span className="info-icon">💲</span>
            <span>Ganaste: {lastWin}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameControls;
