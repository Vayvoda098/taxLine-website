import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon, PhoneArrowUpRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const links = [
  { to: '/', labelKey: 'nav.home', end: true },
  { to: '/hakkimizda', labelKey: 'nav.about' },
  { to: '/cozumler', labelKey: 'nav.services', hasDropdown: true },
  { to: '/iletisim', labelKey: 'nav.contact' },
];

// Hizmetler dropdown'ı için kullanılan sabit slug listesi,
// i18n'deki services.detailed.items dizisinin sırasıyla birebir eşleştirilir.
const serviceSlugs: string[] = [
  'sirket-kurulus-islemleri',
  'mali-musavirlik-hizmetleri',
  'sgk-tesvik-ve-bordrolama',
  'kdv-iadesi',
  'arge-ve-teknopark-danismanligi',
  'yabanci-calisma-izni',
  'ticaret-sicil-islemleri',
  'finansal-raporlama-hizmeti',
];

const Navbar: React.FC = () => {
  const { t, i18n }: any = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
        {/* LOGO ALANI */}
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

        {/* MASAÜSTÜ MENÜ */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          {links.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.to}
                  className="relative flex h-full items-center"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => {
                    setTimeout(() => {
                      setServicesOpen(false);
                    }, 150);
                  }}
                >
                  <NavLink
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) =>
                      [
                        'inline-flex items-center gap-1 transition hover:text-white py-4',
                        isActive ? 'text-white' : 'text-slate-300',
                      ].join(' ')
                    }
                  >
                    <span>{t(link.labelKey)}</span>
                    <ChevronDownIcon
                      className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    />
                  </NavLink>
                  
                  {/* DROPDOWN - OPAK VE NET GÖRÜNÜM */}
                  {servicesOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-80 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {/* Opak arkaplan katmanı */}
                      <div className="rounded-2xl border-2 border-sky-500/30 bg-slate-900 p-3 shadow-2xl shadow-sky-500/20 backdrop-blur-xl">
                        {/* Başlık */}
                        <div className="mb-3 border-b border-sky-500/20 pb-2">
                          <h3 className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                            {t(link.labelKey)}
                          </h3>
                        </div>
                        
                        {/* Menü öğeleri */}
                        <div className="flex flex-col gap-1 ">
                          {t('services.detailed.items', { returnObjects: true })
                            .slice(0, 8)
                            .map((item: any, index: number) => (
                              <Link
                                key={item.title}
                                to={`/cozumler/${serviceSlugs[index]}`}
                                onClick={() => {
                                  setServicesOpen(false);
                                }}
                                style={{ animationDelay: `${index * 30}ms` }}
                                className="group relative w-full rounded-xl px-4 py-3 text-left transition-all duration-200 hover:bg-gradient-to-r hover:from-sky-500/20 hover:to-cyan-400/20 hover:scale-[1.02] animate-in fade-in slide-in-from-left-2"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium text-slate-100 group-hover:text-white transition-colors">
                                    {item.title}
                                  </span>
                                  <ChevronDownIcon className="h-3.5 w-3.5 -rotate-90 text-sky-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                                </div>
                                {/* Alt çizgi efekti */}
                                <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-sky-400/0 via-sky-400/60 to-sky-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                              </Link>
                            ))}
                        </div>
                        
                        {/* Alt gradient efekti */}
                        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
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
            );
          })}
        </nav>

        {/* SAĞ TARAF AKSİYONLAR */}
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

        {/* MOBİL MENÜ BUTONU */}
        <button
          className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
        </button>
      </div>

      {/* MOBİL MENÜ İÇERİĞİ */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <nav className="flex flex-col gap-3 text-sm font-semibold text-white">
              {links.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.to} className="space-y-1">
                      <NavLink
                        to={link.to}
                        end={link.end}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          [
                            'rounded-lg px-3 py-2 transition hover:bg-white/10 block w-full text-left',
                            isActive ? 'bg-white/10 text-white' : 'text-slate-200',
                          ].join(' ')
                        }
                      >
                        <span>{t(link.labelKey)}</span>
                      </NavLink>
                      <div className="ml-3 flex flex-col gap-1 text-xs font-normal text-slate-100">
                        {t('services.detailed.items', { returnObjects: true })
                          .slice(0, 8)
                          .map((item: any, index: number) => (
                            <Link
                              key={item.title}
                              to={`/cozumler/${serviceSlugs[index]}`}
                              onClick={() => {
                                setMenuOpen(false);
                              }}
                              className="w-full rounded-lg px-3 py-1.5 text-left font-medium hover:bg-white/10"
                            >
                              {item.title}
                            </Link>
                          ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.end}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      [
                        'rounded-lg px-3 py-2 transition hover:bg-white/10 block',
                        isActive ? 'bg-white/10 text-white' : 'text-slate-200',
                      ].join(' ')
                    }
                  >
                    {t(link.labelKey)}
                  </NavLink>
                );
              })}
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