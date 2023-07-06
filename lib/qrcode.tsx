import QRCode from 'react-qr-code';
import { parse, stringify } from 'crypto-js/enc-hex';

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
        value={'http://localhost:3000/medicine?q=' + stringify(id as any)}
      />
    </div>
  );
}
