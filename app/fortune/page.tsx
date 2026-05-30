import type { Metadata } from 'next';

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
    </>
  );
}
