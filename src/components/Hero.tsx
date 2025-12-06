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

const Hero: React.FC = () => {
  const { t }: any = useTranslation();
  const rawStats = t('hero.stats', { returnObjects: true });
  const stats = Array.isArray(rawStats) ? (rawStats as Stat[]) : [];
  const rawChannels = t('contact.channels', { returnObjects: true });
  const channels = Array.isArray(rawChannels) ? (rawChannels as Channel[]) : [];

  const primaryPhone = channels.find((ch) => ch.href?.startsWith('tel'))?.value || '+90 532 123 45 67';
  const bgImage = process.env.PUBLIC_URL + '/img/hero-bg.jpg';

  return (
    <section id="hero" className="relative isolate flex min-h-[90vh] flex-col justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={bgImage}
          alt="Office Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60" />
        <div className="absolute inset-0 bg-slate-950/30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-20 text-center sm:pt-24 lg:pt-32">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8 max-w-4xl"
        >
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-sky-300 backdrop-blur-md">
            <span>{t('hero.tagline')}</span>
          </div>

          {/* Headlines */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              {t('hero.title')}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-200/90 sm:text-xl leading-relaxed font-light">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-4 flex flex-col w-full sm:w-auto sm:flex-row items-center justify-center gap-4">
            <Link
              to="/iletisim"
              className="group relative inline-flex h-14 w-full sm:w-auto items-center justify-center overflow-hidden rounded-full bg-white px-8 font-semibold text-slate-950 shadow-2xl transition duration-300 hover:bg-sky-50 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <span className="relative z-10">{t('hero.cta')}</span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-200 to-cyan-100 opacity-0 transition group-hover:opacity-100" />
            </Link>

            <a
              href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
              className="inline-flex h-14 w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white/10 hover:border-white/40"
            >
              <span>{t('hero.secondaryCta')}</span>
              <span className="text-sky-300">{primaryPhone}</span>
            </a>
          </div>
        </motion.div>

        {/* Stats / Credentials Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative mt-20 w-full lg:mt-32"
        >
          {/* Decorative separator line */}
          <div className="absolute -top-12 left-1/2 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-sky-500/50 to-transparent opacity-50" />

          <div className="mx-auto max-w-5xl rounded-3xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-500 hover:border-white/10 hover:bg-white/[0.06] md:p-8">
            <div className="grid gap-8 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {stats.map((stat, idx) => (
                <div key={stat.label} className="flex flex-col items-center justify-center gap-1 pt-6 sm:pt-0 first:pt-0 group">
                  <p className="text-4xl font-bold tracking-tight text-white transition group-hover:text-sky-200">{stat.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 group-hover:text-sky-100/70 transition">{stat.label}</p>
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
