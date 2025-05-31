import "./SpinButton.css";

const SpinButton = ({ onSpin }) => {
  return (
    <button className="spin-button" onClick={onSpin}>
      🎲 Girar
    </button>
  );
};

export default SpinButton;
