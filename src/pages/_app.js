import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.scss';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';
// import ReactGA from 'react-ga4';
import DynamicMeta from '@/components/DynamicMeta';


const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');

    // Initialize Google Analyitics.
    // ReactGA.initialize(`${process.env.NEXT_PUBLIC_GTAG_ID}`)
  }, []);

  return (
    <>
      <DynamicMeta />
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
