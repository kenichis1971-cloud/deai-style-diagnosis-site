import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'マッチングアプリでの出会い方｜始める前に整理したいこと',
  description: 'マッチングアプリを選択肢のひとつとして考える前に、目的や距離感、安全面を整理するページです。',
};

const comparisonPoints = [
  {
    title: '利用目的',
    description: '恋活・婚活・友達づくりなど、目的に合うか',
    mark: 'GO',
  },
  {
    title: '年齢層',
    description: '自分の年代と合いやすいか',
    mark: '層',
  },
  {
    title: '真剣度',
    description: '気軽さと真剣さのバランス',
    mark: '温',
  },
  {
    title: '料金',
    description: '無料範囲・有料機能・継続費用',
    mark: '¥',
  },
  {
    title: '安全面',
    description: '本人確認・通報機能・ブロック機能',
    mark: 'OK',
  },
  {
    title: '使いやすさ',
    description: '検索、メッセージ、プロフィール作成のしやすさ',
    mark: 'UI',
  },
];

const registrationChecklist = [
  'どんな出会いを探したいか',
  'どれくらいの頻度で使えそうか',
  '顔写真やプロフィールをどこまで出せるか',
  'メッセージのやりとりに無理がないか',
  '安全面で気になる点を確認したか',
  'すぐに会うより、段階を踏んで判断できるか',
];

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

      <section className="section matching-apps-section" aria-labelledby="matching-apps-comparison-title">
        <div className="matching-apps-heading">
          <h2 id="matching-apps-comparison-title">選ぶ前に見ておきたい比較ポイント</h2>
          <p className="lead">マッチングアプリは、名前だけで選ぶよりも、自分の目的や使い方に合うかを確認してから選ぶと安心です。</p>
        </div>

        <div className="matching-apps-grid">
          {comparisonPoints.map((point) => (
            <article className="card matching-apps-point-card" key={point.title}>
              <div className="matching-apps-point-header">
                <span className="matching-apps-point-icon" aria-hidden="true">
                  {point.mark}
                </span>
                <p className="matching-apps-card-label">比較ポイント</p>
              </div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section matching-apps-section" aria-labelledby="matching-apps-checklist-title">
        <div className="matching-apps-heading">
          <h2 id="matching-apps-checklist-title">登録前チェックリスト</h2>
          <p className="lead">登録する前に、自分の希望や不安を少し整理しておくと、無理なく使いやすくなります。</p>
        </div>

        <ul className="matching-apps-checklist" aria-label="登録前に確認したい項目">
          {registrationChecklist.map((item) => (
            <li className="card matching-apps-checklist-item" key={item}>
              <span aria-hidden="true">✓</span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section matching-apps-section matching-apps-coming-soon" aria-labelledby="matching-apps-coming-soon-title">
        <div className="matching-apps-heading">
          <p className="matching-apps-card-label">今後、比較リンクを追加予定</p>
          <h2 id="matching-apps-coming-soon-title">比較ページは準備中です</h2>
          <p className="lead">今後、目的や使いやすさを整理しながら、マッチングアプリを比較できる導線を追加予定です。現時点では、まず自分に合う使い方を整理するページとしてご利用ください。</p>
        </div>
        <span className="fortune-support-status" aria-label="比較ページは準備中です">準備中</span>
      </section>
    </>
  );
}
