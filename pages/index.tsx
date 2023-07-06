import { ConnectWallet } from '@thirdweb-dev/react';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Fake <span className={styles.gradientText0}>Medicine</span>{' '}
            Detection
          </h1>

          <p className={styles.description}>
            Get started by connecting your wallet.
          </p>

          <div className={styles.connect}>
            <ConnectWallet
              dropdownPosition={{
                side: 'bottom',
                align: 'center',
              }}
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href='https://portal.thirdweb.com/'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/images/portal-preview.png'
              alt='Placeholder preview of starter'
              width={300}
              height={200}
            />
            <div className={styles.cardText}>
              <h2 className={styles.gradientText1}>Portal ➜</h2>
              <p>
                Guides, references, and resources that will help you build with
                thirdweb.
              </p>
            </div>
          </a>

          <a
            href='https://thirdweb.com/dashboard'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/images/dashboard-preview.png'
              alt='Placeholder preview of starter'
              width={300}
              height={200}
            />
            <div className={styles.cardText}>
              <h2 className={styles.gradientText2}>Dashboard ➜</h2>
              <p>
                Deploy, configure, and manage your smart contracts from the
                dashboard.
              </p>
            </div>
          </a>

          <a
            href='https://thirdweb.com/templates'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/images/templates-preview.png'
              alt='Placeholder preview of templates'
              width={300}
              height={200}
            />
            <div className={styles.cardText}>
              <h2 className={styles.gradientText3}>Templates ➜</h2>
              <p>
                Discover and clone template projects showcasing thirdweb
                features.
              </p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
