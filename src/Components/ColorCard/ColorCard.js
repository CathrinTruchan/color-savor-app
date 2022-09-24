import "./ColorCard.css";

export default function ColorCard({ colorCode }) {
  return (
    <div className="colorbox" style={{ backgroundColor: colorCode }}>
      <p className="colorbox__colorcode">{colorCode}</p>
    </div>
  );
}
