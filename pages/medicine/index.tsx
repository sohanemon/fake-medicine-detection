import { useRouter } from 'next/router';

export default function Medicine() {
  const router = useRouter();
  console.log(router.query.q);
  return (
    <section>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, fugit!
      Veniam voluptas omnis exercitationem provident corrupti facere maiores?
      Unde iure eligendi in architecto tempore molestiae impedit, adipisci porro
      voluptate eveniet?
    </section>
  );
}
