import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type Stat = {
  value: string;
  label: string;
};

type Channel = {
  value: string;
  href?: string;
};

type CaseStudy = {
  badge: string;
  title: string;
  metrics: { label: string; value: string }[];
  timeline: { label: string; desc: string }[];
};

const Hero: React.FC = () => {
  const { t }: any = useTranslation();
  const rawStats = t('hero.stats', { returnObjects: true });
  const stats = Array.isArray(rawStats) ? (rawStats as Stat[]) : [];
  const rawChannels = t('contact.channels', { returnObjects: true });
  const channels = Array.isArray(rawChannels) ? (rawChannels as Channel[]) : [];
  const rawCaseStudy = t('hero.caseStudy', { returnObjects: true }) as CaseStudy | string;
  const caseStudy = typeof rawCaseStudy === 'object' && rawCaseStudy !== null ? rawCaseStudy : { badge: '', title: '', metrics: [], timeline: [] };
  const caseStudyMetrics = Array.isArray(caseStudy.metrics) ? caseStudy.metrics : [];
  const caseStudyTimeline = Array.isArray(caseStudy.timeline) ? caseStudy.timeline : [];
  const primaryPhone = channels.find((ch) => ch.href?.startsWith('tel'))?.value || '+90 532 123 45 67';

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(14,165,233,0.3),transparent_55%)]"
      />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-24 md:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-sky-200">
            <span>{t('hero.tagline')}</span>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="max-w-2xl text-base text-slate-200 sm:text-lg">
              {t('hero.subtitle')}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/iletisim"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 px-7 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:scale-[1.02]"
            >
              {t('hero.cta')}
            </Link>
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-300/60"
            >
              <span>{t('hero.secondaryCta')}</span>
              <span className="text-sky-300">{primaryPhone}</span>
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-300">{t('hero.secondaryNote')}</p>
            <div className="mt-5 grid gap-5 text-center sm:grid-cols-3">
              {stats.map((stat, idx) => (
                <div key={stat.label} className="space-y-2">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="text-3xl font-semibold text-sky-200"
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex flex-col gap-6"
        >
          <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-sky-400/20 blur-3xl" aria-hidden />
          <div className="absolute -right-4 bottom-10 h-16 w-16 rounded-full bg-cyan-300/30 blur-2xl" aria-hidden />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/75 to-slate-800/55 p-6 shadow-2xl backdrop-blur">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
                {caseStudy.badge}
              </p>
              <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">{caseStudy.title}</h3>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {caseStudyMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex h-24 flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/25 px-3 py-4 text-center text-sm text-slate-200"
                >
                  <p className="text-[11px] leading-tight uppercase tracking-[0.25em] text-slate-400">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-base font-semibold text-white sm:text-lg">{metric.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-xs text-slate-400">{t('owner.license')}</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="space-y-5">
              {caseStudyTimeline.map((item, idx) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/20 text-sm font-semibold text-sky-100">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                    <p className="text-sm text-white">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
