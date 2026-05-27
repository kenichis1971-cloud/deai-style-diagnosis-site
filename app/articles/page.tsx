const drafts = [
  'アプリが不安なときに最初に整理したい3つの視点',
  '自然な出会いにこだわる前に確認したいこと',
  '出会い方を選ぶときのペース設計メモ'
];

export default function ArticlesPage() {
  return (
    <section>
      <h1>読みもの一覧</h1>
      <div className="grid section">
        {drafts.map((title) => (
          <article className="card" key={title}>
            <h3>{title}</h3>
            <p>準備中：公開に向けて内容を整えています。</p>
          </article>
        ))}
      </div>
    </section>
  );
}
