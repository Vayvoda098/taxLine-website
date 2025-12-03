import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { newsItems } from '../data/news';

// Haberler bölümünün ana bileşeni
// Veri katmanı (newsItems) ile görsel katmanı (kartlar) birbirinden ayrılmıştır.

const NewsSection: React.FC = () => {
  const { t, i18n }: any = useTranslation();
  const lang = i18n.resolvedLanguage || i18n.language || 'tr';

  // Aktif dile göre haber içeriğini seçer
  const localizedNews = newsItems.map((item) => {
    const content = lang === 'en' ? item.en : item.tr;
    return { ...item, ...content };
  });

  return (
    <section
      id="news"
      className="relative border-t border-white/5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-14 pb-4 text-white"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.2),transparent_55%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Başlık alanı */}
        <div className="flex flex-col gap-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">
            {t('news.badge')}
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{t('news.title')}</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-300">{t('news.subtitle')}</p>
        </div>

        {/* Haber kartları */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {localizedNews.map((news, idx) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="h-full w-full bg-gradient-to-br from-sky-500/10 to-cyan-400/10" />
              </div>
              <div className="relative z-10 flex h-full flex-col gap-4">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  <span>{news.category}</span>
                  <span className="text-slate-500">{news.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-white sm:text-xl">{news.title}</h3>
                <p className="text-sm leading-relaxed text-slate-200">{news.excerpt}</p>
                <div className="mt-auto flex items-center justify-between pt-2 text-xs text-slate-300">
                  <Link
                    to={`/haberler/${news.slug}`}
                    className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.3em] text-sky-300 hover:text-sky-200"
                  >
                    {t('news.readMore')}
                    <span className="h-px w-6 bg-sky-400/70" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Alt bilgi alanı – nötr bilgilendirme */}
        <div className="mt-8 flex flex-col items-center gap-2 text-xs text-slate-400">
          <p>{t('news.footerNote')}</p>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
