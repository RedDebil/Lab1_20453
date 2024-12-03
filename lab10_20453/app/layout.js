import './globals.css';
import Menu from './components/Menu';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body style={{ margin: 0, fontFamily: 'Roboto, sans-serif', lineHeight: 1.6 }}>
        <Menu />
        <main style={{ padding: '20px', minHeight: '80vh' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

