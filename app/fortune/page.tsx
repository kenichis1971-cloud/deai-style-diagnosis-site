import type { Metadata } from 'next';
import Link from 'next/link';

const supportCards = [
  {
    mark: '鑑',
    label: '占い鑑定',
    title: '占い鑑定で気持ちを整理する',
    description: '恋愛や出会い方で迷ったときに、今の気持ちを言葉にするための補助として鑑定を利用できます。',
    href: 'https://fortuneteller-lucia.stores.jp',
    cta: '鑑定メニューを見る',
  },
  {
    mark: '文',
    label: 'ブログ',
    title: 'ブログで関連記事を読む',
    description: '恋愛や出会い方について、もう少し広く考えたいときの参考としてブログ記事を読むこともできます。',
    href: 'https://netonan-kiwami.xyz/',
    cta: 'ブログを見る',
  },
  {
    mark: '準',
    label: 'note',
    title: 'noteでじっくり整理する',
    description: '出会い方や気持ちの整理に役立つ内容を、今後noteでも用意していく予定です。',
    status: '準備中',
    muted: true,
  },
];

export const metadata: Metadata = {
  title: '迷った気持ちを整理する｜出会い方診断',
  description: '恋愛や婚活で迷ったときに、自分の気持ちを落ち着いて整理するための補助ページです。',
};

export default function FortunePage() {
  return (
    <>
      <section className="hero fortune-hero" aria-labelledby="fortune-hero-title">
        <div className="hero-inner">
          <h1 id="fortune-hero-title">迷った気持ちを整理する</h1>
          <p className="lead">占いを使う・使わないに関わらず、いまの気持ちを言葉にしておくと選び方が落ち着きやすくなります。ここでは自己理解と選択肢整理の補助として、相談前に見直したい観点をまとめていきます。</p>
        </div>
      </section>

      <section className="section card">
        <h2>気持ち整理・占い鑑定の準備ページ</h2>
        <p className="lead">占いは決断を代わりにするものではなく、気持ちを言葉にする補助として役立つことがあります。ここでは、相談前に整理したい項目を今後追加予定です。</p>
      </section>

      <section className="section fortune-support-section" aria-labelledby="fortune-support-title">
        <div className="fortune-support-heading">
          <h2 id="fortune-support-title">迷った気持ちをもう少し整理したいときに</h2>
          <p className="lead">診断やコラムだけでは整理しきれないときは、外部の補助コンテンツを使う方法もあります。必要なものだけ、無理のない範囲で参考にしてください。</p>
          <p className="notice">
            ※一部、外部サービスへのリンクを含みます。外部リンクや広告掲載方針については、
            <Link href="/advertising">広告・外部リンクについて</Link>をご確認ください。
          </p>
        </div>

        <div className="fortune-support-grid">
          {supportCards.map((card) => (
            <article
              className={`card fortune-support-card${card.muted ? ' fortune-support-card-muted' : ''}`}
              key={card.label}
            >
              <div>
                <div className="fortune-card-header">
                  <span className="fortune-card-icon" aria-hidden="true">{card.mark}</span>
                  <p className="fortune-support-label">{card.label}</p>
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
              {card.href ? (
                <a
                  className="fortune-support-link"
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {card.cta}
                </a>
              ) : (
                <span className="fortune-support-status" aria-label="noteは準備中です">{card.status}</span>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
