import DeaiDiagnosisClient from "@/components/DeaiDiagnosisClient";

export default function DiagnosisPage() {
  return (
    <>
      <section className="hero diagnosis-hero" aria-labelledby="diagnosis-hero-title">
        <div className="hero-inner diagnosis-hero-inner">
          <h1 id="diagnosis-hero-title">あなたに合う出会い方診断</h1>
          <p className="lead">
            10問の質問を通して、今のあなたに合いそうな出会い方をやさしく整理します。自己理解と選択肢の見直しの補助として、無理のない一歩を考える材料にしてください。
          </p>
        </div>
      </section>

      <section className="section" aria-label="出会い方診断">
        <DeaiDiagnosisClient />
      </section>
    </>
  );
}
