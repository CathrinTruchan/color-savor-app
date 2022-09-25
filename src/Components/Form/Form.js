import { useState } from "react";
import "./Form.css";

export default function Form({ appendColorCard }) {
  const [colorInput, setColorInput] = useState("#000000");

  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const { hexcodeFromText } = data;
    appendColorCard(hexcodeFromText);
  }
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="colorPick">Pick your color:</label>
      <input
        type="color"
        id="colorPick"
        name="hexcodeFromPicker"
        value={colorInput}
        onChange={(event) => setColorInput(event.target.value)}
      />
      <label htmlFor="addColor">Or add your color manually</label>
      <input
        type="text"
        id="addColor"
        name="hexcodeFromText"
        value={colorInput}
        onChange={(event) => setColorInput(event.target.value)}
      />
      <button>Add your Color</button>
    </form>
  );
}
