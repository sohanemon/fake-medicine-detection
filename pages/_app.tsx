import type { AppProps } from 'next/app';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import '../styles/globals.scss';

const activeChain = 'ethereum';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
