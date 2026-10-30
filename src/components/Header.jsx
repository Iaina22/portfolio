import { useApp } from '../context/AppContext'

export default function Header() {
  const { lang, setLang, theme, toggleTheme, t } = useApp()

  const links = [
    { href: '#accueil', label: t.nav.home },
    { href: '#apropos', label: t.nav.about },
    { href: '#competences', label: t.nav.skills },
    { href: '#services', label: t.nav.services },
    { href: '#projets', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ]

  const langBtn = (code) =>
    `px-3 py-1.5 rounded-full transition-colors ${
      lang === code
        ? 'bg-[#0284C7] text-white'
        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-40 bg-[#F7FAFC]/90 dark:bg-slate-950/90 backdrop-blur border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          
          <span className="font-display font-semibold text-lg">Portfolio</span>
        </a>

        <nav className="hidden md:flex items-center gap-9 text-[15px] text-slate-600 dark:text-slate-300">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className={
                i === 0
                  ? 'text-[#0284C7 dark:text-sky-400 font-medium'
                  : 'hover:text-slate-900 dark:hover:text-white transition-colors'
              }
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full bg-slate-100 dark:bg-slate-800 p-1 text-sm font-medium">
            <button type="button" onClick={() => setLang('en')} aria-pressed={lang === 'en'} className={langBtn('en')}>
              EN
            </button>
            <button type="button" onClick={() => setLang('fr')} aria-pressed={lang === 'fr'} className={langBtn('fr')}>
              FR
            </button>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t.toggleTheme}
            className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-500 transition-colors"
          >
            {theme === 'dark' ? (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}