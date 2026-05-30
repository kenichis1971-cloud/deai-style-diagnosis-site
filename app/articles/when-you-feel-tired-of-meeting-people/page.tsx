import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '出会いに疲れたとき、少しペースを整える考え方｜出会い方コラム',
  description: '出会い探しに疲れを感じたときに、自分の気持ちや連絡のペース、距離感をやさしく整えるためのコラムです。',
};

export default function WhenYouFeelTiredOfMeetingPeoplePage() {
  return (
    <>
      <section className="hero article-hero article-hero-when-you-feel-tired-of-meeting-people" aria-labelledby="article-when-you-feel-tired-of-meeting-people-title">
        <div className="hero-inner">
          <h1 id="article-when-you-feel-tired-of-meeting-people-title">出会いに疲れたとき、少しペースを整える考え方</h1>
          <p className="lead">出会いを探す中で、気持ちが疲れてしまうことは珍しくありません。無理に前向きになろうとする前に、自分の気持ちやペース、相手との距離感をそっと整えるためのコラムです。</p>
        </div>
      </section>

      <article className="section article-content">
        <section className="section">
          <h2>出会いに疲れるのは自然なこと</h2>
          <p>新しい人と向き合う時間は、楽しい面がある一方で、思っている以上に心の力を使います。会話を続けたり、予定を合わせたり、相手の反応を気にしたりするうちに、少し疲れを感じることもあります。</p>
          <p>疲れを感じたからといって、出会いに向いていないわけではありません。いまの自分に必要な休息や距離感を知らせてくれているサインとして、やさしく受け止めてみましょう。</p>
        </section>

        <section className="section">
          <h2>うまくいかない理由を自分だけのせいにしない</h2>
          <p>やり取りが続かなかったり、会ってみて違和感があったりすると、「自分に何か足りないのかも」と考えてしまうことがあります。</p>
          <p>けれど、出会いは相性やタイミング、生活状況にも左右されます。自分だけに原因を探しすぎると、必要以上に心が重くなってしまいます。できごとを振り返るときは、反省よりも「次はどんな距離感なら楽だろう」と考えるくらいで十分です。</p>
        </section>

        <section className="section">
          <h2>連絡や予定を詰め込みすぎない</h2>
          <p>複数のやり取りや予定が続くと、気持ちが追いつかないまま過ごしてしまうことがあります。返事をするだけで疲れるときは、少しペースを落としても大丈夫です。</p>
          <p>たとえば、連絡を見る時間を決める、会う予定の間に休む日を入れる、気が進まない約束は急いで決めないなど、小さな調整で心の余白を作りやすくなります。</p>
        </section>

        <section className="section">
          <h2>比較しすぎて苦しくなったときの考え方</h2>
          <p>周りの話を聞いたり、誰かの進み方を見たりすると、自分だけ遅れているように感じることがあります。けれど、出会いのペースは人によって違います。</p>
          <p>比べることで苦しくなったときは、「自分はどんな時間を心地よく過ごしたいか」に視点を戻してみましょう。人のペースに合わせるより、自分が落ち着いていられる進め方を知ることが、気持ちを整える助けになります。</p>
        </section>

        <section className="section">
          <h2>休むことも選択肢のひとつ</h2>
          <p>疲れが強いときは、出会いから少し離れる時間を持つことも選択肢のひとつです。それは恋愛をあきらめることではなく、今の自分を立て直すための休憩です。</p>
          <p>趣味や仕事、家のこと、ひとりでゆっくりする時間に目を向けると、気持ちが少しずつ落ち着くことがあります。休む期間に決まりはありません。自分の呼吸が整う感覚を大切にしてみてください。</p>
        </section>

        <section className="section">
          <h2>再開するときは小さな行動からでいい</h2>
          <p>また出会いに目を向けたいと思えたら、大きく動き出さなくても構いません。プロフィールを見直す、気になる条件を書き出す、短い時間だけ情報を整理するなど、小さな行動からで十分です。</p>
          <p>「前と同じペースに戻さなければ」と考えなくても大丈夫です。休む前より少しゆっくりでも、今の自分に合う形を探し直していけばよいのです。</p>
        </section>

        <section className="section">
          <h2>迷ったときは診断結果に戻る</h2>
          <p>どう進めたらよいか分からなくなったときは、診断結果に戻って、自分が大切にしたい出会い方を見直してみましょう。性格や生活リズム、安心できる距離感を確認すると、無理の少ない方向を考えやすくなります。</p>
          <p>出会いは、急いで答えを出すものではありません。疲れたときほど、いまの自分の気持ちに合わせて、少しずつ整えていきましょう。</p>
        </section>

        <section className="section card" aria-labelledby="article-fortune-link-title">
          <h2 id="article-fortune-link-title">気持ちをもう少し整理したいときは</h2>
          <p>出会いに疲れているときは、すぐに次の行動を決めなくても大丈夫です。今の気持ちを言葉にして、少し落ち着いて整理する時間を取ることも選択肢のひとつです。</p>
          <p>気持ち整理ページでは、恋愛や出会い方に迷ったときの考え方をやさしく整理しています。</p>
          <div className="btn-row">
            <Link className="btn btn-secondary" href="/fortune">気持ち整理ページを見る</Link>
          </div>
        </section>

        <section className="section article-cta" aria-label="関連ページへのリンク">
          <h2>関連ページ</h2>
          <div className="btn-row">
            <Link className="btn btn-primary" href="/diagnosis">診断で自分に合う出会い方を見直す</Link>
            <Link className="btn btn-secondary" href="/articles">出会い方コラム一覧へ戻る</Link>
          </div>
        </section>
      </article>
    </>
  );
}
