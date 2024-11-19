import React, { useState } from "react";
import mojObrazek from './assets/moj-obrazek.png';


export default function TaskTwoPage() {
  const [clickCount, setClickCount] = useState(0); // Przechowywanie liczby kliknięć
  const [hoverText, setHoverText] = useState("Najedź myszką tutaj!");
  const [imageVisible, setImageVisible] = useState(false);
  const [jsonData, setJsonData] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [style, setStyle] = useState({ backgroundColor: "lightblue", padding: "10px" });

  // Obsługa kliknięcia (handleClick)
  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  // Obsługa najechania myszką (handleMouseOver)
  const handleMouseOver = () => {
    setHoverText("Dzięki za najechanie!");
  };

  // Pokazanie obrazu (showImage)
  const showImage = () => {
    setImageVisible(!imageVisible);
  };

  // Załadowanie danych z JSON-a (loadDataFromJson)
  const loadDataFromJson = () => {
    const mockJsonData = { name: "React", version: "18.0", type: "Library" };
    const updatedData = { ...mockJsonData, status: "Loaded" }; // Operator spread
    setJsonData(updatedData);
  };

  // Przesyłanie pliku (uploadFile)
  const uploadFile = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  // Zmiana stylu (changeStyle)
  const changeStyle = () => {
    setStyle((prevStyle) => ({
      ...prevStyle,
      backgroundColor: prevStyle.backgroundColor === "lightblue" ? "lightcoral" : "lightblue",
    }));
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>Zadanie nr 2: Interakcje użytkownika</h1>
      
      {/* handleClick */}
      <div>
        <h3>1. Obsługa kliknięcia</h3>
        <button onClick={handleClick}>Kliknij mnie</button>
        <p>Kliknięto: {clickCount} razy</p>
      </div>
      
      {/* handleMouseOver */}
      <div>
        <h3>2. Obsługa najechania myszką</h3>
        <p onMouseOver={handleMouseOver} style={{ cursor: "pointer" }}>
          {hoverText}
        </p>
      </div>

      {/* showImage */}
      <div>
        <h3>3. Pokazanie obrazu</h3>
        <button onClick={showImage}>
            {imageVisible ? "Ukryj obraz" : "Pokaż obraz"}
        </button>
        {imageVisible && (
            <img
            src={mojObrazek}
            alt="Mój obrazek"
            style={{
                display: "block",
                margin: "10px 0",
                maxWidth: "100%",
                height: "auto",
                border: "2px solid black",
            }}
            />
        )}
    </div>

      {/* loadDataFromJson */}
      <div>
        <h3>4. Załadowanie danych z JSON-a</h3>
        <button onClick={loadDataFromJson}>Załaduj dane</button>
        {jsonData && (
          <div>
            <p><strong>Name:</strong> {jsonData.name}</p>
            <p><strong>Version:</strong> {jsonData.version}</p>
            <p><strong>Type:</strong> {jsonData.type}</p>
            <p><strong>Status:</strong> {jsonData.status}</p>
          </div>
        )}
      </div>

      {/* uploadFile */}
      <div>
        <h3>5. Przesyłanie pliku</h3>
        <input type="file" onChange={uploadFile} />
        {uploadedFile && <p>Załadowano plik: {uploadedFile.name}</p>}
      </div>

      {/* changeStyle */}
      <div>
        <h3>6. Zmiana stylu</h3>
        <div style={style}>
          <p>To jest zmienne pole stylu. Kliknij poniższy przycisk, aby zmienić kolor tła.</p>
        </div>
        <button onClick={changeStyle}>Zmień styl</button>
      </div>
    </div>
  );
}
