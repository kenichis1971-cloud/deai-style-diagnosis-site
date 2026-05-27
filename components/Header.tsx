import Link from 'next/link';

const links = [
  { href: '/diagnosis', label: '診断' },
  { href: '/matching-apps', label: 'アプリ整理' },
  { href: '/articles', label: '読みもの' },
  { href: '/fortune', label: '気持ち整理' },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">あなたに合う出会い方診断</Link>
        <nav className="nav">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
