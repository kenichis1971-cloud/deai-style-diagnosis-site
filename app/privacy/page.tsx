import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー｜出会い方診断',
  description: '出会い方診断サイトにおける個人情報やアクセス情報の取り扱いについて整理するページです。',
};

export default function PrivacyPage() {
  return (
    <section className="card">
      <h1>privacy</h1>
      <p className="lead">このページは初期版です。内容を順次整備していきます。</p>
    </section>
  );
}
