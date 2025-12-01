import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t }: any = useTranslation();
  const rawHighlights = t('about.highlights', { returnObjects: true });
  const highlights = Array.isArray(rawHighlights) ? (rawHighlights as string[]) : [];
  const rawCredentials = t('about.credentials', { returnObjects: true });
  const credentials = Array.isArray(rawCredentials) ? (rawCredentials as string[]) : [];
  const rawMetrics = t('about.metrics', { returnObjects: true });
  const metrics = Array.isArray(rawMetrics)
    ? (rawMetrics as { value: string; label: string }[])
    : [];

  return (
    <section
      id="about"
      className="relative border-t border-white/10 bg-gradient-to-br from-[#08152f] via-[#0a1f46] to-[#040b1c] py-16 text-white"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 lg:flex-row lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">{t('about.title')}</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{t('owner.fullName')}</h2>
            <p className="text-base text-slate-200 sm:text-lg">{t('about.text')}</p>
          </div>
          <ul className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-xl shadow-black/30 backdrop-blur"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/40 backdrop-blur">
              <p className="text-sm font-semibold text-white">Uzmanlık ve Yetkinlikler</p>
              <ul className="mt-3 flex-1 space-y-2 text-sm text-slate-200">
                {credentials.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[6px] h-[6px] w-[6px] min-w-[6px] rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex h-full flex-col space-y-4 rounded-2xl border border-white/10 bg-slate-900/30 p-4 text-center shadow-inner shadow-black/40">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-300">Ölçülebilir başarı</p>
              <div className="flex-1 grid grid-cols-3 gap-2">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl bg-slate-900/45 px-2 py-3 text-white shadow shadow-black/30 backdrop-blur"
                  >
                    <div className="text-lg font-semibold text-white md:text-xl">{metric.value}</div>
                    <p className="mt-1 text-[9px] leading-tight font-semibold uppercase text-slate-300 md:text-[10px]">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-slate-100 shadow-2xl">
            <img
              src={process.env.PUBLIC_URL + '/img/muhammetSoykan.jpg'}
              alt={t('owner.fullName')}
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/90 p-5 shadow-xl backdrop-blur">
              <p className="text-sm font-semibold text-slate-900">{t('owner.fullName')}</p>
              <p className="text-xs text-slate-500">{t('owner.title')}</p>
              <p className="mt-3 text-xs text-slate-500">{t('owner.license')}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.3em] text-slate-500">
                {['Vergi', 'Muhasebe', 'Raporlama'].map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-200 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
