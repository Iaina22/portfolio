import { useState } from 'react'

const icon = (children) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
)

const filters = [
  {
    id: 'all',
    label: 'Tous',
    icon: icon(
      <>
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
        <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
        <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
      </>
    ),
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: icon(
      <>
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: icon(
      <>
        <rect width="20" height="8" x="2" y="2" rx="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" />
        <path d="M6 6h.01M6 18h.01" />
      </>
    ),
  },
  {
    id: 'database',
    label: 'Base de données',
    icon: icon(
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14a9 3 0 0 0 18 0V5" />
        <path d="M3 12a9 3 0 0 0 18 0" />
      </>
    ),
  },
 
  {
    id: 'tools',
    label: 'Outils',
    icon: icon(
      <>
        <path d="m4 17 6-6-6-6" />
        <path d="M12 19h8" />
      </>
    ),
  },
]

const dev = (slug, file = `${slug}-original`) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${file}.svg`

// Ovay eto ny teknolojia sy ny taha (%) araka ny zava-marina
const skills = [
  { name: 'HTML', category: 'frontend', desc: 'Développement front-end', level: 90, logo: dev('html5') },
  { name: 'CSS', category: 'frontend', desc: 'Développement front-end', level: 90, logo: dev('css3') },
  { name: 'JavaScript', category: 'frontend', desc: 'Développement front-end', level: 70, logo: dev('javascript') },
  { name: 'Bootstrap', category: 'frontend', desc: 'Framework CSS', level: 80, logo: dev('bootstrap') },
  { name: 'Tailwind CSS', category: 'frontend', desc: 'Framework CSS', level: 85, logo: dev('tailwindcss') },
  { name: 'React', category: 'frontend', desc: 'Bibliothèque JavaScript', level: 85, logo: dev('react') },
   { name: 'Vue', category: 'frontend', desc: 'Bibliothèque JavaScript', level: 85, logo: dev('vue') },

  { name: 'Node.js', category: 'backend', desc: 'Développement back-end', level: 80, logo: dev('nodejs') },
  { name: 'PHP', category: 'backend', desc: 'Développement back-end', level: 65, logo: dev('php') },
  { name: 'Laravel', category: 'backend', desc: 'Framework PHP', level: 70, logo: dev('laravel') },

  { name: 'MySQL', category: 'database', desc: 'Base de données relationnelle', level: 75, logo: dev('mysql') },
  { name: 'PostgreSQL', category: 'database', desc: 'Base de données ', level: 80, logo: dev('postgresql') },


  { name: 'Git', category: 'tools', desc: 'Gestion de versions', level: 75, logo: dev('git') },
  { name: 'GitHub', category: 'tools', desc: 'Collaboration et hébergement', level: 75, logo: dev('github') },
  { name: 'VS Code', category: 'tools', desc: 'Éditeur de code', level: 90, logo: dev('vscode') },
  { name: 'Figma', category: 'tools', desc: 'Maquettage UI', level: 75, logo: dev('figma') },
    { name: 'Drow.io', category: 'tools', desc: 'Maquettage UI', level: 75, logo: dev('drow.io') },
]

function levelLabel(n) {
  if (n >= 80) return 'Avancé'
  if (n >= 60) return 'Intermédiaire'
  return 'Débutant'
}

export default function Skills() {
  const [active, setActive] = useState('all')

  const visible = active === 'all' ? skills : skills.filter((s) => s.category === active)

  return (
    <section id="competences" className="relative py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Titre */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mb-4">
            Mes{' '}
            <span className="bg-linear-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300">
            Un ensemble de technologies modernes organisées par catégories
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist" aria-label="Filtrer par catégorie">
          {filters.map((f) => {
            const isActive = active === f.id
            return (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(f.id)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-3 font-medium transition-all ${
                  isActive
                    ? 'bg-linear-to-r from-violet-600 to-pink-600 text-white shadow-lg shadow-violet-500/30'
                    : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 shadow-md shadow-slate-200/70 dark:shadow-none dark:border dark:border-white/10 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {f.icon}
                {f.label}
              </button>
            )
          })}
        </div>

        {/* Cartes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4  ">
          {visible.map((s) => (
            <article
              key={s.name}
              className="rounded-3xl bg-white dark:bg-white/5 shadow-lg shadow-slate-200/60 dark:shadow-none dark:border dark:border-white/10 p-8 "
            >
              <div className="flex items-start justify-between mb-2 h-3">
                <span className="w-16 h-16 -mt-3 rounded-2xl bg-violet-50 dark:bg-white flex items-center justify-center shadow-sm">
                  <img src={s.logo} alt="" className="w-9 h-9 object-contain" mt-4 loading="lazy" />
                </span>
                <span className="rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-200 text-sm font-medium px-4 py-2">
                  {levelLabel(s.level)}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl mt-10 text-slate-900 dark:text-white mb-1">{s.name}</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">{s.desc}</p>

              <div className="border-t border-slate-100 dark:border-white/10 pt-5">
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="text-slate-500 dark:text-slate-400">Niveau de maîtrise</span>
                  <span className="font-semibold text-violet-600 dark:text-violet-300">{s.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 dark:bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-violet-600 to-pink-600 transition-all duration-500"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}