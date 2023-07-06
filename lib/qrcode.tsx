import QRCode from 'react-qr-code';
import * as Crypto from 'crypto-js';

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
        value={
          'http://localhost:3000/medicine?q=' +
          Crypto.enc.Hex.stringify(id as any)
        }
      />
    </div>
  );
}
