let coffeeCounts = 0; // Globalna zmienna do przechowywania liczby zamówień

function CoffeeCounter() {
  // Funkcja zwiększająca liczbę zamówień w globalnej zmiennej
  const handleOrderCoffee = () => {
    coffeeCounts++;
    alert(`Zamówiono kaw: ${coffeeCounts}`); // Wyświetlenie aktualnej liczby
  };

  return (
    <div>
      <h2>Niepoprawna wersja zamawiania kawy</h2>
      <button onClick={handleOrderCoffee}>Zamów kawę</button>
      <p>Zamówiono dotąd: {coffeeCounts} kaw(y).</p>
    </div>
  );
}

export default function IncorrectPage() {
  return (
    <>
      <CoffeeCounter />
    </>
  );
}
