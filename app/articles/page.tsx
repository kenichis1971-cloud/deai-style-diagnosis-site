import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '出会い方コラム｜恋愛・婚活の選択肢をやさしく整理',
  description: 'アプリ、紹介、自然な出会い、出会い疲れなど、出会い方に迷ったときの考え方をまとめたコラム一覧です。',
};

const drafts = [
  {
    title: 'アプリが不安なときに最初に整理したい3つの視点',
    mark: '安',
    categoryLabel: 'コラム準備中',
  },
  {
    title: '自然な出会いにこだわる前に確認したいこと',
    mark: '自',
    categoryLabel: 'コラム準備中',
  },
  {
    title: '出会い方を選ぶときのペース設計メモ',
    mark: '歩',
    categoryLabel: 'コラム準備中',
  },
];

const publishedArticles = [
  {
    href: '/articles/when-you-feel-tired-of-meeting-people',
    title: '出会いに疲れたとき、少しペースを整える考え方',
    description: '出会い探しに疲れたとき、自分の気持ちやペースをやさしく整えるコラム。',
    mark: '整',
    categoryLabel: 'コラム',
  },
  {
    href: '/articles/how-to-choose-your-meeting-style',
    title: '出会い方に迷ったとき、自分に合う選び方',
    description: 'アプリ・紹介・コミュニティなどを比べながら、無理なく続けやすい出会い方を考えるコラム。',
    mark: '選',
    categoryLabel: 'コラム',
  },
  {
    href: '/articles/before-starting-matching-apps',
    title: 'マッチングアプリを始める前に整理したいこと',
    description: 'アプリを使う前に、目的や距離感、安全面をやさしく整理するコラム。',
    mark: '準',
    categoryLabel: 'コラム',
  },
  {
    href: '/articles/when-natural-meetings-feel-rare',
    title: '自然な出会いが少ないと感じたときに考えたいこと',
    description: '生活圏や気持ちを見直しながら、無理のない出会い方を考えるコラム。',
    mark: '自',
    categoryLabel: 'コラム',
  },
  {
    href: '/articles/how-to-think-about-introductions',
    title: '紹介で出会うときに無理をしない考え方',
    description: '紹介の安心感と気を遣いやすさを整理しながら、無理のない向き合い方を考えるコラム。',
    mark: '紹',
    categoryLabel: 'コラム',
  },
];

export default function ArticlesPage() {
  return (
    <>
      <section className="hero articles-hero" aria-labelledby="articles-hero-title">
        <div className="hero-inner">
          <h1 id="articles-hero-title">出会い方コラム</h1>
          <p className="lead">焦らずに考えを整えたいときに読める、やさしいヒントをまとめています。気持ちや状況に合わせて、いま取り入れやすい視点を選ぶための補助として活用してください。</p>
        </div>
      </section>

      <section className="section">
        <h2>コラム一覧</h2>
        <div className="grid section">
          {publishedArticles.map((article) => (
            <article className="card article-list-card" key={article.href}>
              <div className="article-card-header">
                <span className="article-card-accent">
                  <span aria-hidden="true">{article.mark}</span>
                  {article.categoryLabel}
                </span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <div className="btn-row">
                <Link className="btn btn-secondary" href={article.href}>コラムを読む</Link>
              </div>
            </article>
          ))}
          {drafts.map((draft) => (
            <article className="card article-list-card" key={draft.title}>
              <div className="article-card-header">
                <span className="article-card-accent">
                  <span aria-hidden="true">{draft.mark}</span>
                  {draft.categoryLabel}
                </span>
              </div>
              <h3>{draft.title}</h3>
              <p>準備中：公開に向けて内容を整えています。</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
