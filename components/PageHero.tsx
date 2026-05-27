import { ReactNode } from 'react';

type PageHeroVariant = 'home' | 'diagnosis' | 'matching-apps' | 'articles' | 'fortune' | 'default';

type PageHeroProps = {
  title: string;
  subtitle?: string;
  variant?: PageHeroVariant;
  imageClassName?: string;
  children?: ReactNode;
};

export default function PageHero({
  title,
  subtitle,
  variant = 'default',
  imageClassName,
  children,
}: PageHeroProps) {
  const heroClassName = ['page-hero', `page-hero--${variant}`, imageClassName]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={heroClassName}>
      <div className="page-hero__bg" aria-hidden="true" />
      <div className="page-hero__overlay" aria-hidden="true" />
      <div className="page-hero__inner">
        <div className="page-hero__card">
          <h1>{title}</h1>
          {subtitle ? <p className="lead">{subtitle}</p> : null}
          {children}
        </div>
      </div>
    </section>
  );
}
