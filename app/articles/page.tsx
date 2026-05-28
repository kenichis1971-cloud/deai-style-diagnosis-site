const drafts = [
  'アプリが不安なときに最初に整理したい3つの視点',
  '自然な出会いにこだわる前に確認したいこと',
  '出会い方を選ぶときのペース設計メモ'
];

export default function ArticlesPage() {
  return (
    <>
      <section className="hero articles-hero" aria-labelledby="articles-hero-title">
        <div className="hero-inner">
          <h1 id="articles-hero-title">出会い方のヒントを読む</h1>
          <p className="lead">焦らずに考えを整えたいときに読める、やさしいヒントをまとめています。気持ちや状況に合わせて、いま取り入れやすい視点を選ぶための補助として活用してください。</p>
        </div>
      </section>

      <section className="section">
        <h2>読みもの一覧</h2>
        <div className="grid section">
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
