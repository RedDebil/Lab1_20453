import Link from 'next/link';

export default function Menu() {
  return (
    <nav style={{ background: '#0070f3', padding: '10px 20px', color: '#fff' }}>
      <ul style={{ display: 'flex', gap: '15px', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Strona Główna</Link></li>
        <li><Link href="/o-mnie" style={{ color: '#fff', textDecoration: 'none' }}>O Mnie</Link></li>
        <li><Link href="/moje-zainteresowania" style={{ color: '#fff', textDecoration: 'none' }}>Moje Zainteresowania</Link></li>
        <li><Link href="/ulubiona-gra" style={{ color: '#fff', textDecoration: 'none' }}>Ulubiona Gra</Link></li>
        <li><Link href="/kontakt" style={{ color: '#fff', textDecoration: 'none' }}>Kontakt</Link></li>
      </ul>
    </nav>
  );
}