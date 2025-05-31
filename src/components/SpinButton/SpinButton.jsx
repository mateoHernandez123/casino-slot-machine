const SpinButton = ({ onSpin }) => {
  return (
    <button
      onClick={onSpin}
      style={{ fontSize: "20px", padding: "10px 20px", marginTop: "10px" }}
    >
      🎲 Girar
    </button>
  );
};

export default SpinButton;
