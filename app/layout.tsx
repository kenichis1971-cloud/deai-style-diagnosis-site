import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://deai-style-diagnosis-site.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'あなたに合う出会い方診断',
  description: '恋愛や婚活で、自分に合う出会い方を整理するための診断サイト。',
  verification: {
    google: 'Me0ruJV9U6oJJHoxk7hLGJqDRffZZfieF0HsofoInSU',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main className="main container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
