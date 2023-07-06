import QRCode from 'react-qr-code';
import { stringToHex } from './utils';

export default function QR({ id }: { id: string }) {
  console.log('🛑 ~ QR ~ id:', id);

  return (
    <div
      style={{
        background: 'white',
        padding: '2rem',
        display: 'grid',
        placeContent: 'center',
      }}
    >
      <QRCode value={'http://localhost:3000/medicine?q=' + stringToHex(id)} />
    </div>
  );
}
