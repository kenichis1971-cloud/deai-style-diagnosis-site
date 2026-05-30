import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '広告掲載について｜出会い方診断',
  description: '出会い方診断サイトにおける広告掲載の考え方や関連情報を整理するページです。',
};

export default function AdvertisingPage() {
  return (
    <section className="card">
      <h1>advertising</h1>
      <p className="lead">このページは初期版です。内容を順次整備していきます。</p>
    </section>
  );
}
