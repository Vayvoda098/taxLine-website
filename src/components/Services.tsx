import React from 'react';
import { motion } from 'framer-motion';
import {
  BriefcaseIcon,
  ScaleIcon,
  UsersIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

interface ServiceItem {
  title: string;
  desc: string;
}

const icons = [BriefcaseIcon, ScaleIcon, UsersIcon, PresentationChartLineIcon];

const Services: React.FC = () => {
  const { t }: any = useTranslation();
  const rawItems = t('services.items', { returnObjects: true });
  const items = Array.isArray(rawItems) ? (rawItems as ServiceItem[]) : [];

  return (
    <section
      id="services"
      className="relative border-t border-white/5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.2),transparent_55%)]" aria-hidden />
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">
            {t('services.title')}
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{t('services.subtitle')}</h2>
          <p className="mx-auto max-w-3xl text-base text-slate-300">
            {t('services.description')}
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((service, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur transition hover:bg-white/10"
              >
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="h-full w-full bg-gradient-to-br from-sky-500/10 to-cyan-400/10" />
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex rounded-2xl bg-white/10 p-3 text-sky-200">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="mt-2 text-sm text-slate-200">{service.desc}</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
                    <span>Detaylı rapor</span>
                    <span className="h-px flex-1 bg-white/10" />
                    <span>Şeffaf süreç</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
