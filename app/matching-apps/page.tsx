import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'マッチングアプリでの出会い方｜始める前に整理したいこと',
  description: 'マッチングアプリを選択肢のひとつとして考える前に、目的や距離感、安全面を整理するページです。',
};

export default function MatchingAppsPage() {
  return (
    <>
      <section className="hero matching-apps-hero" aria-labelledby="matching-apps-hero-title">
        <div className="hero-inner">
          <h1 id="matching-apps-hero-title">アプリでの出会い方を整理する</h1>
          <p className="lead">アプリを使うか迷うときは、安心感・使うペース・大事にしたい条件を先に言葉にしておくと、選択肢を落ち着いて比べやすくなります。ここでは自己理解の補助として、考え方をやさしく整理できます。</p>
        </div>
      </section>

      <section className="section card">
        <h2>マッチングアプリ・婚活アプリを比較する前に</h2>
        <p className="lead">アプリは選択肢のひとつです。まずは、あなたが重視したいこと（安心感・効率・会話のきっかけなど）を整理してから比較すると、迷いが少なくなります。</p>
      </section>
    </>
  );
}
