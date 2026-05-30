import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '利用規約｜出会い方診断',
  description: '出会い方診断サイトを利用する前に確認しておきたい基本的な事項を整理するページです。',
};

export default function TermsPage() {
  return (
    <section className="card">
      <h1>terms</h1>
      <p className="lead">このページは初期版です。内容を順次整備していきます。</p>
    </section>
  );
}
