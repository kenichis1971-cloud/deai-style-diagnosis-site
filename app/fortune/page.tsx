import type { Metadata } from 'next';
import Link from 'next/link';

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
          <article className="card fortune-support-card">
            <div>
              <p className="fortune-support-label">占い鑑定</p>
              <h3>占い鑑定で気持ちを整理する</h3>
              <p>恋愛や出会い方で迷ったときに、今の気持ちを言葉にするための補助として鑑定を利用できます。</p>
            </div>
            <a
              className="fortune-support-link"
              href="https://fortuneteller-lucia.stores.jp"
              target="_blank"
              rel="noopener noreferrer"
            >
              鑑定メニューを見る
            </a>
          </article>

          <article className="card fortune-support-card">
            <div>
              <p className="fortune-support-label">ブログ</p>
              <h3>ブログで関連記事を読む</h3>
              <p>恋愛や出会い方について、もう少し広く考えたいときの参考としてブログ記事を読むこともできます。</p>
            </div>
            <a
              className="fortune-support-link"
              href="https://netonan-kiwami.xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ブログを見る
            </a>
          </article>

          <article className="card fortune-support-card fortune-support-card-muted">
            <div>
              <p className="fortune-support-label">note</p>
              <h3>noteでじっくり整理する</h3>
              <p>出会い方や気持ちの整理に役立つ内容を、今後noteでも用意していく予定です。</p>
            </div>
            <span className="fortune-support-status" aria-label="noteは準備中です">準備中</span>
          </article>
        </div>
      </section>
    </>
  );
}
