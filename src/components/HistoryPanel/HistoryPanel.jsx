import { SYMBOLS } from "../../data/symbols";
import "./HistoryPanel.css";
const HistoryPanel = ({ history }) => {
  const lastFive = history.slice(-10).reverse();

  return (
    <div className="history-panel">
      <h3>📜 Últimas 10 jugadas</h3>
      <table className="history-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Ganancia</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {lastFive.map((entry, index) => (
            <tr key={index} className={entry.won > 0 ? "win-row" : ""}>
              <td>{history.length - index}</td>
              <td>{entry.won}</td>
              <td>
                {entry.lines.length > 0 ? (
                  <div className="win-details">
                    {entry.lines.map((lineInfo, i) => (
                      <div key={i} className="line-detail">
                        <span>Línea {lineInfo.line}: </span>
                        <span>
                          {SYMBOLS[lineInfo.baseSymbol]} = {lineInfo.basePayout}
                        </span>
                        {lineInfo.wildcards.SPIN > 0 && (
                          <span className="multiplier-info">
                            {" "}
                            + 🎰×{lineInfo.wildcards.SPIN} (×
                            {Math.pow(5, lineInfo.wildcards.SPIN)})
                          </span>
                        )}
                        {lineInfo.wildcards.MYSTIC_ORB > 0 && (
                          <span className="multiplier-info">
                            {" "}
                            + 🔮×{lineInfo.wildcards.MYSTIC_ORB} (×
                            {Math.pow(2, lineInfo.wildcards.MYSTIC_ORB)})
                          </span>
                        )}
                        <span> = {lineInfo.total}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  "-"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryPanel;
