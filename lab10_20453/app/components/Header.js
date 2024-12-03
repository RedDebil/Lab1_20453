export default function Header({ title }) {
    return (
      <header style={{ textAlign: 'center', margin: '20px 0' }}>
        <h1 style={{ fontSize: '2rem', color: '#333' }}>{title}</h1>
      </header>
    );
  }