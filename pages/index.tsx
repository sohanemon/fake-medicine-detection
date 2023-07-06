import { ConnectWallet } from '@thirdweb-dev/react';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Fake <span className={styles.gradientText0}>Medicine</span>
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
          <Link href='/' className={styles.card} rel='noopener noreferrer'>
            <div className={styles.cardText}>
              <h2 className={styles.gradientText2}>Home ➜</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis,
              </p>
            </div>
          </Link>

          <Link
            href='/medicines'
            className={styles.card}
            rel='noopener noreferrer'
          >
            <div className={styles.cardText}>
              <h2 className={styles.gradientText2}>Medicine ➜</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                illo, voluptates officiis
              </p>
            </div>
          </Link>

          <Link href='/about' className={styles.card} rel='noopener noreferrer'>
            <div className={styles.cardText}>
              <h2 className={styles.gradientText2}>About Us ➜</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                vitae voluptatem quas
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
