import QRCode from 'react-qr-code';

export default function QR() {
  return (
    <div
      style={{
        background: 'white',
        padding: '2rem',
        display: 'grid',
        placeContent: 'center',
      }}
    >
      <QRCode value={JSON.stringify({ name: 'hey lol lol olo', roll: 5 })} />
    </div>
  );
}
