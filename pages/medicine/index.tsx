// @ts-nocheck
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getData } from '../../db/client';
import { hexToString } from '../../lib/utils';

export default function Medicine() {
  const [state, setState] = useState(null);
  const {
    query: { q },
  } = useRouter();
  useEffect(() => {
    console.log(getData(hexToString(q)));
  }, [q]);

  console.log(state);

  return (
    <section className='grid place-content-center'>
      <div>
        <p className='text-3xl'>{state?.productName}</p>
        <p>{state?.manufacturer}</p>
      </div>
    </section>
  );
}
