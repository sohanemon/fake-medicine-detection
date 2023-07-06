// @ts-nocheck
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getData } from '../../db/client';
import { hexToString } from '../../lib/utils';
import medicine from './medicine.module.scss';

export default function Medicine() {
  const [state, setState] = useState(null);
  const {
    query: { q },
  } = useRouter();
  useEffect(() => {
    if (q) getData(hexToString(q)).then((res) => setState(res));
  }, [q]);

  console.log(state);

  return (
    <section className={medicine.root}>
      <div>
        <p>{state?.productName}</p>
        <p>By {state?.manufacturer} Pharmaceuticals Limited</p>
        <p>This product is authentic</p>
      </div>
    </section>
  );
}
