// @ts-nocheck
import { useRouter } from 'next/router';
import { getData } from '../../db/client';

export default function Medicine() {
  const {
    query: { q },
  } = useRouter();
  console.log(getData(q));

  return (
    <section>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, fugit!
      Veniam voluptas omnis exercitationem provident corrupti facere maiores?
      Unde iure eligendi in architecto tempore molestiae impedit, adipisci porro
      voluptate eveniet?
    </section>
  );
}
