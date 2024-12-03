import Header from './components/Header';

export default function HomePage() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Header title="Witaj na mojej stronie!" />
      <p style={{ marginTop: '10px' }}>To jest strona główna. Odkryj więcej korzystając z menu na górze.</p>
    </div>
  );
}