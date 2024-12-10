import Link from 'next/link';
import Image from 'next/image'; // Import komponentu Image
import logoImg from '../assets/logo.png';
import styles from './main-header.module.css';

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image 
          src={logoImg} 
          alt="A plate with food on it" 
          width={40}
          height={40}
          priority
        />
        <span>NextLevel Food</span>
      </Link>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
