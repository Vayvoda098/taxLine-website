import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

type Roadmap = {
  title: string;
  subtitle: string;
  steps: {
    title: string;
    desc: string;
  }[];
};

const ProcessRoadmap: React.FC = () => {
  const { t }: any = useTranslation();
  const rawRoadmap = t('services.roadmap', { returnObjects: true }) as Roadmap | string;
  const roadmap =
    typeof rawRoadmap === 'object' && rawRoadmap !== null
      ? rawRoadmap
      : { title: '', subtitle: '', steps: [] };
  const steps = Array.isArray(roadmap.steps) ? roadmap.steps : [];

  return (
    <section className="relative border-t border-white/10 bg-slate-950 py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(14,165,233,0.2),transparent_60%)]" aria-hidden />
      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">{roadmap.title}</p>
          <h3 className="mt-4 text-3xl font-semibold text-white">{roadmap.subtitle}</h3>
        </div>
        <div className="mt-12 space-y-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative z-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
                    {step.title}
                  </p>
                  <p className="mt-2 text-base text-white">{step.desc}</p>
                </div>
                <span className="text-4xl font-semibold text-slate-700 sm:text-5xl">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessRoadmap;

