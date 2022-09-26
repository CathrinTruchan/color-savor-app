import { useEffect, useState } from "react";
import "./ColorCard.css";

export default function ColorCard({
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
    //const colorName = fetchedColors.name.value;
    //console.log(fetchedColors.name.value);
    setColorNames(
      colorNames.map((item) => {
        return { name: fetchedColors.name.value };
      })
    );
    console.log(colorNames);
  }

  useEffect(() => {
    fetchColorNames();
  }, []);

  colorNames = [
    { name: "pinegreen" },
    { name: "pinegreon" },
    { name: "pinegrien" },
  ];

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
