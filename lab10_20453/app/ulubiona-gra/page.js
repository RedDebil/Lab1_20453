import Header from '../components/Header';

export default function FavoriteGamePage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <Header title="Ulubiona Gra" />
      <p>Moją ulubioną grą jest <strong>Warcraft 3</strong>. Jest to rts, zrobiony przez blizzard osadzony w fantastycznym świecie Azeroth</p>
    </div>
  );
}