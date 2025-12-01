import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon, PhoneArrowUpRightIcon } from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const links = [
  { to: '/', labelKey: 'nav.home', end: true },
  { to: '/hakkimizda', labelKey: 'nav.about' },
  { to: '/cozumler', labelKey: 'nav.services' },
  { to: '/iletisim', labelKey: 'nav.contact' },
];

const Navbar: React.FC = () => {
  const { t, i18n }: any = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const LanguageSwitch = ({ isMobile = false }) => (
    <div
      className={`flex items-center gap-1 rounded-full border p-1 text-xs font-semibold ${
        isMobile
          ? 'border-white/20 bg-transparent text-white'
          : 'border-slate-200/80 bg-white/80 text-slate-600 shadow-sm'
      }`}
    >
      {['tr', 'en'].map((lng) => (
        <button
          key={lng}
          onClick={() => {
            i18n.changeLanguage(lng);
            setMenuOpen(false);
          }}
          className={`w-full rounded-full px-3 py-1 transition ${
            i18n.resolvedLanguage === lng
              ? isMobile
                ? 'bg-white/10'
                : 'bg-slate-900 text-white'
              : isMobile
              ? 'hover:bg-white/5'
              : 'hover:text-slate-900'
          }`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/60 text-white backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-300 text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/40">
            T
          </div>
          <div className="flex flex-col leading-tight text-left">
            <span className="text-sm font-semibold tracking-wide text-white">
              {t('brand')}
            </span>
            <span className="text-[11px] font-medium text-slate-300">
              {t('owner.fullName')} • {t('owner.title')}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                [
                  'transition hover:text-white hover:underline hover:underline-offset-8',
                  isActive ? 'text-white' : 'text-slate-300',
                ].join(' ')
              }
            >
              {t(link.labelKey)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitch />
          <Link
            to="/iletisim"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 px-4 py-2 text-sm font-semibold text-slate-900 shadow-md shadow-sky-400/40 transition hover:opacity-90"
          >
            <PhoneArrowUpRightIcon className="h-4 w-4" />
            {t('hero.cta')}
          </Link>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden">
          <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <nav className="flex flex-col gap-3 text-sm font-semibold text-white">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    [
                      'rounded-lg px-3 py-2 transition hover:bg-white/10',
                      isActive ? 'bg-white/10 text-white' : 'text-slate-200',
                    ].join(' ')
                  }
                >
                  {t(link.labelKey)}
                </NavLink>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-3">
              <LanguageSwitch isMobile />
              <Link
                to="/iletisim"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-300 px-4 py-2 text-sm font-semibold text-slate-900"
              >
                <PhoneArrowUpRightIcon className="h-4 w-4" />
                {t('hero.cta')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
