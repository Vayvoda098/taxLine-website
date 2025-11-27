import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ConsultationBanner: React.FC = () => {
  const { t }: any = useTranslation();
  const rawPoints = t('cta.points', { returnObjects: true });
  const points = Array.isArray(rawPoints) ? (rawPoints as string[]) : [];

  return (
    <section className="relative border-t border-white/5 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(14,165,233,0.25),transparent_50%)]" aria-hidden />
      <div className="relative z-10 mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">
              {t('cta.badge')}
            </p>
            <h3 className="text-3xl font-semibold text-white">{t('cta.title')}</h3>
            <p className="text-slate-200">{t('cta.subtitle')}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 text-sm text-slate-200">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{t('cta.highlightLabel')}</p>
              <p className="mt-2 text-3xl font-semibold text-white">{t('cta.highlightValue')}</p>
              <p className="text-xs text-slate-400">{t('cta.highlightDesc')}</p>
            </div>
            <Link
              to="/iletisim"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sky-400 to-cyan-300 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-sky-400/30 transition hover:scale-[1.02]"
            >
              {t('cta.ctaButton')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationBanner;

