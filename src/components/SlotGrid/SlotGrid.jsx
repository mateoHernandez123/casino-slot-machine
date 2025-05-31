import { SYMBOLS } from "../../data/symbols";
import "./SlotGrid.css";

const SlotGrid = ({ grid }) => {
  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((symbolKey, colIndex) => (
            <div className="cell" key={colIndex}>
              {SYMBOLS[symbolKey]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SlotGrid;
