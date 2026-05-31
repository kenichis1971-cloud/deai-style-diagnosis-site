import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '出会い方診断｜自分に合う出会い方をやさしく整理',
  description: '恋愛や婚活の出会い方に迷ったとき、自分の性格や生活リズムに合う選択肢を整理する診断サイトです。',
};

const options = [
  { title: 'マッチングアプリ', text: '忙しい中でも出会いの機会を持ちたい人向けの選択肢。' },
  { title: '友人・知人の紹介', text: '安心感を重視し、会う前の情報をある程度知りたい人向け。' },
  { title: '趣味・コミュニティ', text: '会話のきっかけを作りやすく、自然な接点を持ちたい人向け。' },
  { title: 'イベント参加', text: 'まずは幅広く人と話して、自分の感覚を整理したい人向け。' },
];

export default function HomePage() {
  return (
    <>
      <section className="hero home-hero" aria-labelledby="top-hero-title">
        <div className="hero-inner">
          <h1 id="top-hero-title">あなたに合う出会い方診断</h1>
          <p className="lead">「どこで出会えばいいか分からない」「アプリが向いているか不安」などの気持ちを、質問形式で整理するためのサイトです。未来を断定するのではなく、あなたの傾向に合った選択肢を見つける補助として活用できます。</p>
          <div className="btn-row">
            <Link href="/diagnosis" className="btn btn-primary">診断をはじめる</Link>
            <Link href="/matching-apps" className="btn btn-secondary">アプリ前の整理を見る</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>このサイトでできること</h2>
        <div className="grid">
          <article className="card"><h3>考え方の整理</h3><p>今の自分にとって大事な条件やペースを言語化し、迷いを減らします。</p></article>
          <article className="card"><h3>選択肢の比較</h3><p>ひとつの方法に決めつけず、複数の出会い方を横並びで確認できます。</p></article>
          <article className="card"><h3>次の一歩を決める</h3><p>小さく始めるための方向性をつかみ、行動の負担を軽くします。</p></article>
        </div>
      </section>

      <section className="section">
        <h2>出会い方の選択肢</h2>
        <div className="grid">
          {options.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section card">
        <h2>将来的なご案内（準備枠）</h2>
        <p className="lead">今後は、比較情報・コラム・相談準備などの情報を追加予定です。現時点では外部サービスへのリンクは設置していません。</p>
      </section>
    </>
  );
}
