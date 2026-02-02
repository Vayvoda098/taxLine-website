import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const { t }: any = useTranslation();

  return (
    <footer className="relative border-t border-slate-800 bg-slate-950 pb-10 pt-16 text-slate-300">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Kolon 1: Marka ve Açıklama */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-300 text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/40">
              T
            </div>
            <span className="text-lg font-bold text-white tracking-wide">{t('brand')}</span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            Avrupa'daki çözüm ortağınız. Vergi, muhasebe ve danışmanlık hizmetlerinde profesyonel destek.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="https://www.linkedin.com/in/muhammet-soykan-1a1918202/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 border border-white/10 transition-colors duration-300 hover:bg-[#0077b5] hover:border-[#0077b5]"
              aria-label="LinkedIn"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 text-slate-400 transition-colors duration-300 group-hover:text-white">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/taxeurope?igsh=MWJyOHI2ajBjcHNkdA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 border border-white/10 transition-colors duration-300 hover:bg-[#E4405F] hover:border-[#E4405F]"
              aria-label="Instagram"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 text-slate-400 transition-colors duration-300 group-hover:text-white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Kolon 2: Hızlı Linkler */}
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Kurumsal</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-sky-400 transition-colors">Ana Sayfa</Link>
            </li>
            <li>
              <Link to="/hakkimizda" className="hover:text-sky-400 transition-colors">Hakkımızda</Link>
            </li>
            <li>
              <Link to="/haberler" className="hover:text-sky-400 transition-colors">Haberler & Duyurular</Link>
            </li>
            <li>
              <Link to="/iletisim" className="hover:text-sky-400 transition-colors">İletişim</Link>
            </li>
          </ul>
        </div>

        {/* Kolon 3: Hizmetler (Kısayol) */}
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Hizmetlerimiz</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/cozumler/sirket-kurulus-islemleri" className="hover:text-sky-400 transition-colors">Şirket Kuruluşu</Link>
            </li>
            <li>
              <Link to="/cozumler/mali-musavirlik-hizmetleri" className="hover:text-sky-400 transition-colors">Mali Müşavirlik</Link>
            </li>
            <li>
              <Link to="/cozumler/sgk-tesvik-ve-bordrolama" className="hover:text-sky-400 transition-colors">Bordrolama</Link>
            </li>
            <li>
              <Link to="/cozumler" className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-medium">
                Tümünü Gör <span>→</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolon 4: İletişim */}
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Bize Ulaşın</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPinIcon className="h-5 w-5 shrink-0 text-sky-500" />
              <span className="text-slate-400">Terkos İş Hanı, Taksim / İstanbul</span>
            </li>
            <li className="flex items-center gap-3">
              <EnvelopeIcon className="h-5 w-5 shrink-0 text-sky-500" />
              <a href="mailto:info@taxeurope.com.tr" className="text-slate-400 hover:text-white">info@taxeurope.com.tr</a>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="h-5 w-5 shrink-0 text-sky-500" />
              <a href="tel:02122926695" className="text-slate-400 hover:text-white">0212 292 66 95</a>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="h-5 w-5 shrink-0 text-sky-500" />
              <a href="tel:+905382815701" className="text-slate-400 hover:text-white">+90 538 281 57 01</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-white/5 pt-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {t('brand')}. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-slate-300">Gizlilik Politikası</span>
            <span className="cursor-pointer hover:text-slate-300">Kullanım Koşulları</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



