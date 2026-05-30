import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ｜出会い方診断',
  description: '出会い方診断サイトへのお問い合わせに関する情報を整理するページです。',
};

export default function ContactPage() {
  return (
    <section className="card">
      <h1>contact</h1>
      <p className="lead">このページは初期版です。内容を順次整備していきます。</p>
    </section>
  );
}
