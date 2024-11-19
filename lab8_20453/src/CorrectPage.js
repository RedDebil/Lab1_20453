import React, { useState } from "react";

function CoffeeCounter() {
  const [coffeeCount, setCoffeeCount] = useState(0); // Lokalne przechowywanie stanu

  const handleOrderCoffee = () => {
    setCoffeeCount(coffeeCount + 1); // Aktualizacja stanu
  };

  return (
    <div>
      <h2>Poprawna wersja zamawiania kawy</h2>
      <button onClick={handleOrderCoffee}>Zamów kawę</button>
      <p>Zamówiono dotąd: {coffeeCount} kaw(y).</p>
    </div>
  );
}

export default function CorrectPage() {
  return (
    <>
      <CoffeeCounter />
    </>
  );
}
