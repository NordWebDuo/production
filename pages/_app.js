'use client';
import '@/styles/globals.css'
import { Onest } from 'next/font/google';

const onest = Onest({
  variable: '--font-Onest',
  subsets: ['latin'],
  display: 'auto',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export default function App({ Component, pageProps }) {
  return (
    <main className={onest.className}>
  <Component {...pageProps} />
  </main>
  )
}

