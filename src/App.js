import { useState } from "react";

function App() {
  const [currentColor, setCurrentColor] = useState("#ffffff");

  const generateRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    setCurrentColor(randomColor);
  };

  return (
    <main style={{ backgroundColor: `${currentColor}` }}>
      <section className="container">
        <div className="text-3xl">{currentColor}</div>
        <div className="flex-1 mainBox">
          <button className="randomBtn" onClick={generateRandomColor}>
            ساخت رنگ
          </button>

          <button
            className="copyColorBtn"
            onClick={() => navigator.clipboard.writeText(currentColor)}
          >
            کپی رنگ
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
