import QRCode from 'react-qr-code';

export default function QR({ id }: { id: string }) {
  return (
    <div
      style={{
        background: 'white',
        padding: '2rem',
        display: 'grid',
        placeContent: 'center',
      }}
    >
      <QRCode value={id} />
    </div>
  );
}
