import { useState } from "react";
import "./ColorCard.css";

export default function ColorCard({
  colorCode,
  id,
  updateColorCard,
  deleteColorCard,
}) {
  function copyToClipboard() {
    navigator.clipboard.writeText(colorCode).then(() => {
      alert("Copied to clipboard");
    });
  }

  return (
    <div className="colorbox" style={{ backgroundColor: colorCode }}>
      <button
        className="colorbox__delete-button"
        onClick={(event) => deleteColorCard(id)}
      >
        X
      </button>
      <input
        type="text"
        id="colorField"
        name="colorField"
        onClick={(event) => {
          event.stopPropagation(copyToClipboard);
        }}
        defaultValue={colorCode}
        className="colorbox__colorcode"
        onChange={(event) => updateColorCard(event.target.value, id)}
      />
    </div>
  );
}
