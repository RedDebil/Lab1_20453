import Header from '../components/Header';

export default function ContactPage() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <Header title="Kontakt" />
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label htmlFor="name">Imię:</label>
        <input type="text" id="name" name="name" style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />

        <label htmlFor="message">Wiadomość:</label>
        <textarea id="message" name="message" style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>

        <button type="submit" style={{ padding: '10px 15px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Wyślij</button>
      </form>
    </div>
  );
}
