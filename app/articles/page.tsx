import Link from 'next/link';

const drafts = [
  'アプリが不安なときに最初に整理したい3つの視点',
  '自然な出会いにこだわる前に確認したいこと',
  '出会い方を選ぶときのペース設計メモ'
];

const publishedArticles = [
  {
    href: '/articles/before-starting-matching-apps',
    title: 'マッチングアプリを始める前に整理したいこと',
    description: 'アプリを使う前に、目的や距離感、安全面をやさしく整理するコラム。',
  },
  {
    href: '/articles/when-natural-meetings-feel-rare',
    title: '自然な出会いが少ないと感じたときに考えたいこと',
    description: '生活圏や気持ちを見直しながら、無理のない出会い方を考えるコラム。',
  },
];

export default function ArticlesPage() {
  return (
    <>
      <section className="hero articles-hero" aria-labelledby="articles-hero-title">
        <div className="hero-inner">
          <h1 id="articles-hero-title">出会い方コラム</h1>
          <p className="lead">焦らずに考えを整えたいときに読める、やさしいヒントをまとめています。気持ちや状況に合わせて、いま取り入れやすい視点を選ぶための補助として活用してください。</p>
        </div>
      </section>

      <section className="section">
        <h2>コラム一覧</h2>
        <div className="grid section">
          {publishedArticles.map((article) => (
            <article className="card" key={article.href}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <div className="btn-row">
                <Link className="btn btn-secondary" href={article.href}>コラムを読む</Link>
              </div>
            </article>
          ))}
          {drafts.map((title) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>準備中：公開に向けて内容を整えています。</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
