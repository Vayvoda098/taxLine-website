import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { newsItems } from '../data/news';
import SEO from '../components/SEO';

// Tekil haber detay sayfası. /haberler/:slug rotası için kullanılır.

const NewsDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { i18n, t }: any = useTranslation();
  const lang = i18n.resolvedLanguage || i18n.language || 'tr';

  const news = newsItems.find((item) => item.slug === slug);

  if (!news) {
    return (
      <main className="mx-auto max-w-4xl px-4 pt-14 pb-4 text-slate-100">
        <SEO title="Haber Bulunamadı" description="Aradığınız haber sistemimizde bulunamadı." />
        <p className="text-sm text-slate-400">{t('news.notFound') || 'İstediğiniz haber bulunamadı.'}</p>
        <Link to="/haberler" className="mt-4 inline-flex text-sm text-sky-300 underline underline-offset-4">
          {t('news.backToList') || 'Tüm haberlere dön'}
        </Link>
      </main>
    );
  }

  const content = lang === 'en' ? news.en : news.tr;

  return (
    <main className="relative border-t border-white/5 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO
        title={content.title}
        description={content.excerpt}
        type="article"
      />
      <div className="mx-auto max-w-4xl px-4 pt-14 pb-4">
        <div className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
          {news.category} • {news.date}
        </div>
        <h1 className="text-3xl font-semibold sm:text-4xl">{content.title}</h1>
        <p className="mt-4 text-sm text-slate-300">{content.excerpt}</p>

        <div className="mt-10 space-y-5 text-sm leading-relaxed text-slate-100">
          {content.body.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {news.sources && news.sources.length > 0 && (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 text-xs text-slate-300">
            <p className="mb-2 font-semibold uppercase tracking-[0.25em] text-sky-300">{t('news.sources') || 'Kullanılan kaynaklar'}</p>
            <ul className="list-disc space-y-1 pl-5">
              {news.sources.map((src) => (
                <li key={src.url}>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-300 hover:text-sky-200 underline underline-offset-4"
                  >
                    {src.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-10 flex items-center justify-between text-xs text-slate-400">
          <Link
            to="/haberler"
            className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.3em] text-sky-300 hover:text-sky-200"
          >
            ← {t('news.backToList') || 'Tüm haberlere dön'}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NewsDetailPage;
