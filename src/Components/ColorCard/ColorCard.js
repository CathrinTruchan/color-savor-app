import { useEffect, useState } from "react";
import "./ColorCard.css";

export default function ColorCard({
  colors,
  colorCode,
  id,
  updateColorCard,
  deleteColorCard,
}) {
  const [colorNames, setColorNames] = useState([{ name: "" }]);

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
    setColorNames(
      colorNames.map((item) => {
        return { name: fetchedColors.name.value };
      })
    );
  }

  useEffect(() => {
    fetchColorNames();
  }, [colors]);

  const singleColorName = colorNames.map((colorName) => colorName.name);

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
      <p class="colorbox__name">{singleColorName}</p>
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
