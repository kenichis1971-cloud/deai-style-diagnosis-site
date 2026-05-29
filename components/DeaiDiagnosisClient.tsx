"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { calculateDiagnosisResult, diagnosisQuestions, type DiagnosisTypeId } from "@/lib/deaiDiagnosis";

const columnArticles = {
  beforeStartingMatchingApps: {
    href: "/articles/before-starting-matching-apps",
    title: "マッチングアプリを始める前に整理したいこと",
    description: "使い始める前に、自分の希望や無理のない進め方をやさしく確認できます。",
  },
  whenNaturalMeetingsFeelRare: {
    href: "/articles/when-natural-meetings-feel-rare",
    title: "自然な出会いが少ないと感じたときに考えたいこと",
    description: "日常の出会いが少なく感じるときに、視点を少し広げるヒントをまとめています。",
  },
  howToThinkAboutIntroductions: {
    href: "/articles/how-to-think-about-introductions",
    title: "紹介で出会うときに無理をしない考え方",
    description: "友人や知人からの紹介を、自分のペースで受け止めるための考え方です。",
  },
  howToChooseYourMeetingStyle: {
    href: "/articles/how-to-choose-your-meeting-style",
    title: "出会い方に迷ったとき、自分に合う選び方",
    description: "いくつかの選択肢を比べながら、今の自分に合う形を整理できます。",
  },
  whenYouFeelTiredOfMeetingPeople: {
    href: "/articles/when-you-feel-tired-of-meeting-people",
    title: "出会いに疲れたとき、少しペースを整える考え方",
    description: "疲れを感じたときに、無理なく余白を作るためのヒントを紹介しています。",
  },
};

type ColumnArticle = (typeof columnArticles)[keyof typeof columnArticles];

const recommendedColumnArticles: Record<DiagnosisTypeId, ColumnArticle[]> = {
  matching_app: [columnArticles.beforeStartingMatchingApps, columnArticles.howToChooseYourMeetingStyle],
  marriage_app: [columnArticles.howToChooseYourMeetingStyle, columnArticles.beforeStartingMatchingApps],
  agency: [columnArticles.howToChooseYourMeetingStyle, columnArticles.whenYouFeelTiredOfMeetingPeople],
  introduction: [columnArticles.howToThinkAboutIntroductions, columnArticles.howToChooseYourMeetingStyle],
  community: [columnArticles.whenNaturalMeetingsFeelRare, columnArticles.howToChooseYourMeetingStyle],
  event: [columnArticles.whenNaturalMeetingsFeelRare, columnArticles.whenYouFeelTiredOfMeetingPeople],
  self_reflection: [columnArticles.howToChooseYourMeetingStyle, columnArticles.whenYouFeelTiredOfMeetingPeople],
  rest: [columnArticles.whenYouFeelTiredOfMeetingPeople, columnArticles.howToChooseYourMeetingStyle],
};

const resultLinks = [
  { href: "/matching-apps", label: "アプリを使う前に整理する" },
  { href: "/articles", label: "コラムを見る" },
  { href: "/fortune", label: "気持ちを整理する" },
  { href: "/", label: "トップに戻る" },
];

export default function DeaiDiagnosisClient() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<DiagnosisTypeId[]>([]);

  const isFinished = answers.length === diagnosisQuestions.length;
  const currentQuestion = diagnosisQuestions[currentIndex];
  const result = useMemo(() => (isFinished ? calculateDiagnosisResult(answers) : null), [answers, isFinished]);

  const handleSelect = (type: DiagnosisTypeId) => {
    const nextAnswers = [...answers, type];
    setAnswers(nextAnswers);
    if (nextAnswers.length < diagnosisQuestions.length) setCurrentIndex((prev) => prev + 1);
  };

  const handleBack = () => {
    if (answers.length === 0) return;
    setAnswers((prev) => prev.slice(0, -1));
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleRestart = () => {
    setAnswers([]);
    setCurrentIndex(0);
  };

  return (
    <section className="card diagnosis-card">
      <h1>あなたに合う出会い方診断</h1>
      <p className="lead">この診断は、自己理解と選択肢整理の補助を目的としています。結果はひとつの参考として、無理のないペースで活用してください。</p>

      {!isFinished && (
        <div className="diagnosis-flow">
          <p className="diagnosis-progress">{currentIndex + 1} / {diagnosisQuestions.length}</p>
          <h2 className="diagnosis-question">{currentQuestion.question}</h2>
          <div className="diagnosis-options">
            {currentQuestion.options.map((option) => (
              <button key={option.label} type="button" className="diagnosis-option-btn" onClick={() => handleSelect(option.type)}>
                {option.label}
              </button>
            ))}
          </div>
          <div className="diagnosis-actions">
            <button type="button" className="btn btn-secondary" onClick={handleBack} disabled={answers.length === 0}>
              戻る
            </button>
          </div>
        </div>
      )}

      {isFinished && result && (
        <div className="diagnosis-result">
          <p className="diagnosis-result-label">診断結果</p>
          <h2>{result.name}</h2>
          <p>{result.shortDescription}</p>

          <div className="grid diagnosis-result-grid">
            <article className="card"><h3>今の傾向</h3><p>{result.tendency}</p></article>
            <article className="card"><h3>出会い方で意識したいこと</h3><p>{result.focus}</p></article>
            <article className="card"><h3>次にできること</h3><p>{result.nextStep}</p></article>
          </div>

          <section className="diagnosis-recommended-columns" aria-labelledby="diagnosis-recommended-columns-title">
            <h3 id="diagnosis-recommended-columns-title">この結果に合わせて読みたいコラム</h3>
            <p>今の結果をもとに、出会い方や気持ちの整理に役立つコラムを選びました。無理に行動を決める必要はありません。</p>
            <div className="diagnosis-recommended-columns-grid">
              {recommendedColumnArticles[result.id].map((article) => (
                <article key={article.href} className="card diagnosis-column-card">
                  <h4>{article.title}</h4>
                  <p>{article.description}</p>
                  <Link href={article.href} className="diagnosis-column-link">コラムを読む</Link>
                </article>
              ))}
            </div>
          </section>

          <h3 className="diagnosis-links-title">関連する内部リンク</h3>
          <div className="grid">
            {resultLinks.map((link) => (
              <Link key={link.href} href={link.href} className="card diagnosis-link-card">
                <strong>{link.label}</strong>
                <span>{link.href}</span>
              </Link>
            ))}
          </div>

          <div className="diagnosis-actions">
            <button type="button" className="btn btn-primary" onClick={handleRestart}>もう一度診断する</button>
          </div>
        </div>
      )}
    </section>
  );
}
