"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { calculateDiagnosisResult, diagnosisQuestions, type DiagnosisTypeId } from "@/lib/deaiDiagnosis";

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
