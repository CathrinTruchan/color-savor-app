import "./App.css";
import "./Components/ColorCard/ColorCard.css";
import ColorCard from "./Components/ColorCard/ColorCard";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Form from "./Components/Form/Form";
import "./Components/Form/Form.css";

const colorsArray = [
  {
    id: nanoid(),
    colorCode: "562C2C",
  },

  {
    id: nanoid(),
    colorCode: "F2542D",
  },

  {
    id: nanoid(),
    colorCode: "F5DFBB",
  },

  {
    id: nanoid(),
    colorCode: "0E9594",
  },

  {
    id: nanoid(),
    colorCode: "127475",
  },
];

function App() {
  const [colors, setColors] = useState(
    JSON.parse(localStorage.getItem("colors")) ?? colorsArray
  );
  const [fetchAPI, setFetchAPI] = useState(
    "https://www.thecolorapi.com/id?hex=24B1E0"
  );

  async function fetchColorNames() {
    const response = await fetch(fetchAPI);
    const fetchedColors = await response.json();
    console.log(fetchedColors.name.value);
  }

  useEffect(() => {
    colorsArray.map((color) => {
      return (
        setFetchAPI(`https://www.thecolorapi.com/id?hex=${color.colorCode}`),
        fetchColorNames()
      );
    });
  });

  function appendColorCard(colorCode) {
    setColors([
      ...colors,
      {
        id: nanoid(),
        colorCode: colorCode,
      },
    ]);
  }

  function updateColorCard(updatedColorCode, id) {
    setColors(
      colors.map((color) => {
        if (color.id === id) {
          return { ...color, colorCode: updatedColorCode };
        } else {
          return color;
        }
      })
    );
  }

  function deleteColorCard(id) {
    const newColorsArray = colors.filter((color) => color.id !== id);
    setColors(newColorsArray);
  }

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  useEffect(() => {
    JSON.parse(localStorage.getItem("colors"));
  }, []);

  return (
    <div className="App">
      <header></header>
      <main>
        <div className="form-container">
          <Form appendColorCard={appendColorCard} />
        </div>
        <div className="colorbox__container">
          {colors.map((color) => {
            return (
              <ColorCard
                colorCode={color.colorCode}
                key={color.id}
                id={color.id}
                updateColorCard={updateColorCard}
                deleteColorCard={deleteColorCard}
              />
            );
          })}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
