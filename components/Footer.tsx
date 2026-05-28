import Link from 'next/link';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-links">
          <Link href="/">トップ</Link>
          <Link href="/diagnosis">診断</Link>
          <Link href="/matching-apps">アプリ整理</Link>
          <Link href="/articles">コラム</Link>
          <Link href="/fortune">気持ち整理</Link>
          <Link href="/privacy">プライバシー</Link>
          <Link href="/terms">利用規約</Link>
          <Link href="/contact">お問い合わせ</Link>
          <Link href="/advertising">広告掲載</Link>
        </div>
        <p className="notice">このサイトの診断・情報は、自己理解と選択肢の整理をサポートするためのものです。</p>
      </div>
    </footer>
  );
}
