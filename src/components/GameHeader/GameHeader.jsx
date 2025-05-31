const GameHeader = ({ title, credits, totalWins }) => {
  return (
    <div className="game-header">
      <h1 className="game-title">{title}</h1>
      <div className="game-stats">
        <div className="stat-box credit-box">
          <span className="stat-icon">💰</span>
          <span className="stat-value">{credits}</span>
          <span className="stat-label">Créditos</span>
        </div>
        <div className="stat-box wins-box">
          <span className="stat-icon">📊</span>
          <span className="stat-value">{totalWins}</span>
          <span className="stat-label">Ganancia Total</span>
        </div>
      </div>
    </div>
  );
};

export default GameHeader;
