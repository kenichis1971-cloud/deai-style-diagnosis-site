import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '広告掲載について｜出会い方診断',
  description: '出会い方診断サイトにおける広告掲載の考え方や関連情報を整理するページです。',
};

const policySections = [
  {
    title: '広告リンクについて',
    body: '当サイトでは、記事やページ内に広告リンクを掲載することがあります。リンク先のサービスを利用するかどうかは、ユーザーご自身の判断でご確認ください。',
  },
  {
    title: '外部サービスへのリンクについて',
    body: '外部サイトへ移動した後の内容、サービス内容、料金、キャンペーン、利用条件などは、各サービス提供元の情報をご確認ください。当サイトでは、掲載時点で確認できる範囲で分かりやすい案内を心がけますが、内容が変更される場合があります。',
  },
  {
    title: '診断結果と広告の関係について',
    body: '診断結果は、自分に合いやすい出会い方や気持ちの整理を考えるための参考情報です。特定のサービス利用を強制するものではありません。広告リンクを掲載する場合も、選択肢のひとつとして案内します。',
  },
  {
    title: '表現方針について',
    body: '当サイトでは、不安を過度に煽る表現や、「必ず出会える」「結婚できる」といった断定的な表現を避ける方針です。ユーザーが落ち着いて比較・検討できる案内を目指します。',
  },
  {
    title: 'PR表記について',
    body: '広告リンクやアフィリエイトリンクを掲載する場合は、必要に応じてPR・広告を含む旨を分かりやすく表示します。',
  },
];

export default function AdvertisingPage() {
  return (
    <section className="advertising-policy card">
      <div className="advertising-policy-heading">
        <h1>広告・外部リンクについて</h1>
        <p className="lead">
          当サイトでは、ユーザーが出会い方や気持ちを整理するための情報を提供しています。今後、一部ページで外部サービスへのリンクや広告リンクを掲載する場合があります。
        </p>
      </div>

      <div className="advertising-policy-list">
        {policySections.map((section) => (
          <section className="advertising-policy-item" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}

        <section className="advertising-policy-item">
          <h2>お問い合わせ</h2>
          <p>
            広告掲載や外部リンクに関するお問い合わせは、
            <Link className="advertising-policy-link" href="/contact">
              お問い合わせページ
            </Link>
            からご連絡ください。
          </p>
        </section>
      </div>
    </section>
  );
}
