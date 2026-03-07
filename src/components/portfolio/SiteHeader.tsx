const navItems = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <span className="brand-mark">NP</span>
        <span>Nabin Pokhrel</span>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
