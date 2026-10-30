import { useEffect, useState } from 'react'
import { useApp } from '../context/AppContext'
import Skills from './Skills'

function TypingName({ lines, typeSpeed = 120, deleteSpeed = 60, pause = 2000 }) {
  const full = lines.join('\n')
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const [count, setCount] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduced) return
    let timer
    if (!deleting && count < full.length) {
      timer = setTimeout(() => setCount(count + 1), typeSpeed)
    } else if (!deleting && count === full.length) {
      timer = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && count > 0) {
      timer = setTimeout(() => setCount(count - 1), deleteSpeed)
    } else if (deleting && count === 0) {
      timer = setTimeout(() => setDeleting(false), 500)
    }
    return () => clearTimeout(timer)
  }, [count, deleting, full, reduced, typeSpeed, deleteSpeed, pause])

  const shown = reduced ? full : full.slice(0, count)
  const [first, second] = shown.split('\n')
  const cursor = <span className="typing-cursor" aria-hidden="true" />

  return (
    <span className="relative block">
      <span aria-hidden="true" className="invisible block">
        {lines[0]}
        <br />
        {lines[1]}
      </span>

      <span aria-hidden="true" className="absolute inset-0 block">
        {first}
        {second === undefined && !reduced && cursor}
        {second !== undefined && (
          <>
            <br />
            {second}
            {!reduced && cursor}
          </>
        )}
      </span>
    </span>
  )
}

const iconProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

function GithubIcon() {
  return (
    <svg {...iconProps}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg {...iconProps}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg {...iconProps}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg {...iconProps}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Section "À propos"                                                */
/* ------------------------------------------------------------------ */

const infoCards = [
  { title: 'Âge', text: '24 ans' },
  { title: 'Niveau', text: 'DTS en Informatique' },
  { title: 'Titre', text: 'Développeur(se) Web Junior' },
]

function About() {
  return (
    <section id="apropos" className="relative py-24 -mt-35 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mb-4">
            À propos de{' '}
            <span className="bg-linear-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
              moi
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300">
            Passionné par le développement web et les nouvelles technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Colonne gauche */}
          <div className="flex flex-col gap-8">
            <div className="rounded-3xl bg-white dark:bg-white/5 shadow-lg shadow-slate-200/60 dark:shadow-none dark:border dark:border-white/10 p-10">
              <h3 className="font-display font-bold text-2xl text-sky-500 dark:text-sky-400 mb-6">
                Ma motivation
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-5">
                Développeur(se) passionné par la création de solutions web
                modernes et performantes. Je développe une solide base technique et
                une forte capacité d’apprentissage continu.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Mon approche se base sur l'apprentissage continu et la pratique régulière.
                Chaque projet est une opportunité d'apprendre quelque chose de nouveau et
                d'améliorer mes compétences techniques et créatives. Je suis ouvert aux
                opportunités de collaboration et aux projets qui me permettront de grandir
                en tant que développeur.
              </p>
            </div>
          </div>

          {/* Colonne droite */}
          <div className="flex flex-col gap-8 w-full">
            <div className="rounded-3xl bg-white dark:bg-white/5 shadow-lg shadow-slate-200/60 dark:shadow-none dark:border dark:border-white/10 p-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {infoCards.map((card) => (
                  <div
                    key={card.title}
                    className="flex flex-col justify-end min-h-[150px] rounded-2xl bg-white dark:bg-white/5 shadow-lg shadow-slate-200/60 dark:shadow-none dark:border dark:border-white/10 p-7"
                  >
                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-1">
                      {card.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-300">{card.text}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-display font-bold text-2xl text-sky-500 mt-8 dark:text-sky-400 mb-6">
                Contact rapide
              </h3>

              <div className="flex flex-col gap-5">
                <a
                  href="mailto:iainah.mg@gmail.com"
                  className="flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-white/5 px-5 py-4 font-medium text-violet-600 dark:text-violet-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors break-all"
                >
                  <MailIcon />
                  iainah.mg@gmail.com
                </a>

                <a
                  href="https://wa.me/261322560580"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-white/5 px-5 py-4 font-medium text-green-600 dark:text-green-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                >
                  <PhoneIcon />
                  WhatsApp: 032 25 605 80
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Page Home (Accueil + À propos + Compétences)                      */
/* ------------------------------------------------------------------ */

export default function Home() {
  const { t } = useApp()

  return (
    <>
      <section id="accueil" className="relative overflow-hidden bg-grid">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-8 pb-28 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-[#0284C7] dark:text-sky-200 font-medium mb-4">{t.hero.welcome}</p>

            <h1
              aria-label="Aina RAJAONARIVELO"
              className="font-display font-bold leading-[0.98] text-6xl sm:text-5xl text-slate-900 dark:text-white mb-6"
            >
              <TypingName lines={['Aina', 'RAJAONARIVELO']} />
            </h1>

            <p className="text-2xl sm:text-3xl -mt-2 font-display font-semibold text-[#0284C7] dark:text-sky-400 mb-6">
              {t.hero.role}
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-md mb-10">
              {t.hero.description}
            </p>

            <div className="flex flex-col gap-4 -mt-2 max-w-md">
              <a
                href="https://github.com/Iaina22"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-800 dark:text-white font-medium px-6 py-4 transition-colors"
              >
                <GithubIcon />
                {t.hero.githubBtn ?? 'Voir mon GitHub'}
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 w-full rounded-xl bg-linear-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white font-medium px-6 py-4 transition-colors"
              >
                <MailIcon />
                {t.hero.contactBtn}
              </a>

              <div className="flex items-center gap-5 pt-4 text-slate-500 dark:text-slate-300">
                <a
                  href="https://github.com/Iaina22"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <GithubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/TON-PROFIL"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <LinkedinIcon />
                </a>
                <a
                  href="mailto:iainah.mg@gmail.com"
                  aria-label="Email"
                  className="hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <MailIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[220px] sm:w-[380px] rounded-full border-4 border-[#12B7E8] shadow-2xl shadow-[#0284C7]/10 overflow-hidden aspect-square bg-slate-200 dark:bg-slate-800">
              <img src="/portrait.jpg" alt="Portrait" className="w-full h-full object-cover object-top" />
            </div>

            <span className="float-badge absolute bottom-4 right-0 sm:bottom-8 sm:right-2 bg-[#0284C7] text-white rounded-full shadow-lg shadow-[#0284C7]/30 px-4 py-2.5 text-sm font-medium">
              Développeur(se) web
            </span>
          </div>
        </div>
      </section>

      <About />
      <Skills />
    </>
  )
}