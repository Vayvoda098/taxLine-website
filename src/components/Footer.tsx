import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t }: any = useTranslation();

  return (
    <footer className="relative border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-center text-[11px] sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <p className="text-base font-semibold text-white">{t('brand')}</p>
          <p className="text-[11px] uppercase tracking-[0.4em] text-slate-500">{t('owner.title')}</p>
        </div>
        <p className="text-[12px] text-slate-400">
          © {new Date().getFullYear()} {t('brand')}. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
