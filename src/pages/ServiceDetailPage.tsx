import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Hizmet detay sayfası: URL'deki slug'a göre ilgili hizmet bilgisini çeker
// Metinler tamamen i18n üzerinden yönetilir, sayfa tasarımı ise mevcut tema ile uyumlu tutulur.
const serviceSlugs: string[] = [
  'sirket-kurulus-islemleri',
  'mali-musavirlik-hizmetleri',
  'sgk-tesvik-ve-bordrolama',
  'kdv-iadesi',
  'arge-ve-teknopark-danismanligi',
  'yabanci-calisma-izni',
  'ticaret-sicil-islemleri',
  'finansal-raporlama-hizmeti',
];

const ServiceDetailPage: React.FC = () => {
  const { t }: any = useTranslation();
  const { serviceSlug } = useParams<{ serviceSlug: string }>();

  // Slug'ı dizi içinde arayarak ilgili index'i bulur
  const serviceIndex = serviceSlug ? serviceSlugs.indexOf(serviceSlug) : -1;
  const rawDetailed = t('services.detailed.items', { returnObjects: true });
  const detailedItems = Array.isArray(rawDetailed) ? rawDetailed : [];

  // Geçersiz bir slug gelirse, kullanıcıyı genel hizmetler sayfasına yönlendirecek linkler gösterilir
  if (serviceIndex < 0 || serviceIndex >= detailedItems.length) {
    return (
      <section className="relative min-h-[60vh] bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-sky-400">
            {t('services.title')}
          </p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
            {t('services.subtitle')}
          </h1>
          <p className="mt-4 text-sm text-slate-300 max-w-2xl mx-auto">
            {t('services.description')}
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="/"
              className="rounded-full border border-white/20 px-6 py-2 text-sm font-semibold text-slate-200 hover:bg-white/5"
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/cozumler"
              className="rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 px-6 py-2 text-sm font-semibold text-slate-900 shadow-md shadow-sky-400/40 hover:opacity-90"
            >
              {t('nav.services')}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const currentService = detailedItems[serviceIndex];

  return (
    <section className="relative bg-slate-950 pb-20 pt-10 text-white">
      {/* Üst şerit ve breadcrumb alanı */}
      <div className="border-b border-sky-500/30 bg-gradient-to-r from-sky-500/40 via-sky-500/20 to-transparent py-6">
        <div className="mx-auto max-w-6xl px-4">
          <nav className="text-xs font-medium text-slate-100/80">
            <Link to="/" className="hover:underline hover:underline-offset-4">
              {t('nav.home')}
            </Link>
            <span className="mx-2 text-slate-300">/</span>
            <Link to="/cozumler" className="hover:underline hover:underline-offset-4">
              {t('nav.services')}
            </Link>
            <span className="mx-2 text-slate-300">/</span>
            <span className="text-sky-100">{currentService.title}</span>
          </nav>

          <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {currentService.title}
          </h1>
        </div>
      </div>

      {/* Ana içerik alanı */}
      <div className="relative z-10 mx-auto mt-10 max-w-6xl px-4 space-y-8">
        {/* Başlık altı açıklama bloğu */}
        <div className="max-w-3xl rounded-3xl border border-white/10 bg-slate-900/90 p-7 shadow-inner shadow-black/40">
          <p className="text-[15px] leading-relaxed text-slate-100">
            {currentService.desc}
          </p>
        </div>

        {/* İki kartlı özet alanı */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
              {t('services.detailCards.scopeTitle')}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              {t('services.detailCards.scopeText')}
            </p>
          </div>

          <div className="rounded-3xl border border-sky-500/25 bg-slate-950/80 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
              {t('services.detailCards.whyTitle')}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              {t('services.detailCards.whyText')}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                to="/iletisim"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 px-5 py-2 text-sm font-semibold text-slate-900 shadow-md shadow-sky-400/40 hover:opacity-90"
              >
                {t('hero.cta')}
              </Link>
              <Link
                to="/cozumler"
                className="rounded-full border border-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200 hover:bg-white/5"
              >
                {t('services.title')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailPage;
