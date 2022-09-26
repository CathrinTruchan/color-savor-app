import { useEffect, useState } from "react";
import "./ColorCard.css";

export default function ColorCard({
  colorCode,
  id,
  updateColorCard,
  deleteColorCard,
}) {
  const [colorName, setColorName] = useState([]);

  function copyToClipboard() {
    navigator.clipboard.writeText(colorCode).then(() => {
      alert("Copied to clipboard");
    });
  }

  async function fetchColorNames() {
    const response = await fetch(
      `https://www.thecolorapi.com/id?hex=${colorCode.substring(1)}`
    );
    const fetchedColors = await response.json();
    console.log(fetchedColors.name.value);
  }

  useEffect(() => {
    const colorName = fetchColorNames();
    setColorName(colorName);
    console.log("test" + colorName);
  }, []);

  return (
    <div
      onClick={copyToClipboard}
      className="colorbox"
      style={{ backgroundColor: colorCode }}
    >
      <button
        className="colorbox__delete-button"
        onClick={(event) => {
          deleteColorCard();
          event.stopPropagation();
        }}
      >
        X
      </button>
      <p></p>
      <input
        type="text"
        id="colorField"
        name="colorField"
        onClick={(event) => {
          event.stopPropagation();
        }}
        defaultValue={colorCode}
        className="colorbox__colorcode"
        onChange={(event) => updateColorCard(event.target.value, id)}
      />
    </div>
  );
}
