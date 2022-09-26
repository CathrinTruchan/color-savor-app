/* import { useState } from "react";
import "./ColorCard.css";

export default function ColorCard({ colorCode, id }) {
  const [colorUpdate, setColorUpdate] = useState(colorCode);

  function copyToClipboard() {
    navigator.clipboard.writeText(colorCode).then(() => {
      alert("Copied to clipboard");
    });
  }

  function onSubmitColorChange(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const { colorField } = data;
    console.log(colorField);
    setColorUpdate(colorField);
  }

  return (
    <div className="colorbox" style={{ backgroundColor: colorUpdate }}>
      <form action="#" onSubmit={onSubmitColorChange}>
        <input
          type="text"
          id="colorField"
          name="colorField"
          key={id}
          //onClick={copyToClipboard}
          defaultValue={colorUpdate}
          className="colorbox__colorcode"
        />

        <button>change</button>
      </form>
    </div>
  );
}
 */



// fetch 
// setColorNames(() =>
//       colorNames.map((item) => {
//         return { ...item, name: colorName };
//       })
//     );
//     console.log(colorNames);
//   }