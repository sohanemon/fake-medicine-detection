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
      <QRCode
        value={'http://localhost:3000/medicine?q=' + window.atob(id as any)}
      />
    </div>
  );
}
