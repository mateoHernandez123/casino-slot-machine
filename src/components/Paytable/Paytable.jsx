import { PAYOUTS } from "../../data/paytable";
import { SYMBOLS } from "../../data/symbols";
import "./Paytable.css";
const Paytable = () => (
  <div className="paytable-section">
    <h3>📊 Tabla de Pagos</h3>
    <table className="payout-table">
      <thead>
        <tr>
          <th>Símbolo</th>
          <th>Pago Base</th>
          <th>Multiplicadores</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(PAYOUTS)
          .filter(([, value]) => value > 0)
          .map(([symbol, payout]) => (
            <tr key={symbol}>
              <td>{SYMBOLS[symbol] || symbol}</td>
              <td>{payout} créditos</td>
              <td>
                <span className="multiplier-badge">🎰 ×5</span>
                <span className="multiplier-badge">🔮 ×2</span>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
);

export default Paytable;
