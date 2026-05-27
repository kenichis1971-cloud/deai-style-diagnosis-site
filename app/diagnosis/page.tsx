import PageHero from '@/components/PageHero';

export default function DiagnosisPage() {
  return (
    <>
      <PageHero
        title="あなたに合う出会い方を整理する診断"
        subtitle="本格版（10問4択）は準備中です。現在は導入ページとして、診断の目的と使い方を整えています。"
        variant="diagnosis"
      />

      <section className="card section">
        <ul>
          <li>価値観・行動ペース・不安ポイントを質問で見える化</li>
          <li>ひとつの正解ではなく、複数の選択肢を提示</li>
          <li>結果は自己理解の補助として活用</li>
        </ul>
      </section>
    </>
  );
}
