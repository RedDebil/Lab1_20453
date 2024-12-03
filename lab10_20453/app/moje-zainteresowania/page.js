import Header from '../components/Header';

export default function InterestsPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <Header title="Moje Zainteresowania" />
      <ul>
        <li>Oglądanie różnych seriali</li>
        <li>Czytanie książek</li>
        <li>Gry komputerowe</li>
      </ul>
    </div>
  );
}
