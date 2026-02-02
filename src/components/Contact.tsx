import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

type Channel = {
  label: string;
  value: string;
  href?: string;
  hint?: string;
};

const iconMap: Record<string, React.ReactNode> = {
  Telefon: <PhoneIcon className="h-5 w-5" />,
  'Cep Telefonu': <PhoneIcon className="h-5 w-5" />,
  'Sabit Hat': <PhoneIcon className="h-5 w-5" />,
  Phone: <PhoneIcon className="h-5 w-5" />,
  'E-posta': <EnvelopeIcon className="h-5 w-5" />,
  'E-mail': <EnvelopeIcon className="h-5 w-5" />,
  LinkedIn: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" className="fill-sky-600" />
      <path
        d="M8.1 17.5H6V9.4h2.1v8.1ZM7 8.4A1.22 1.22 0 0 1 5.8 7.2 1.22 1.22 0 0 1 7 6a1.22 1.22 0 0 1 1.2 1.2A1.22 1.22 0 0 1 7 8.4Zm11 9.1h-2.1v-4.3c0-1.02-.37-1.7-1.29-1.7-.7 0-1.11.47-1.29.93-.07.17-.09.41-.09.65v4.42H11V9.4h2.02v1.16c.29-.45.82-1.1 2.01-1.1 1.47 0 2.97.96 2.97 3.38v4.66Z"
        className="fill-white"
      />
    </svg>
  ),
  Instagram: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" className="fill-pink-500" />
      <circle cx="12" cy="12" r="4" className="fill-white" />
      <circle cx="17" cy="7" r="1.1" className="fill-white" />
    </svg>
  ),
};

const Contact: React.FC = () => {
  const { t }: any = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const channels: Channel[] = t('contact.channels', { returnObjects: true });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form:', form);
    alert('Mesajınız alındı. Teşekkür ederiz.');
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="relative border-t border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-14 pb-4"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-2xl shadow-slate-950/70 backdrop-blur-xl"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-400">{t('contact.title')}</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">{t('owner.fullName')}</h2>
            <p className="mt-3 text-base text-slate-200">{t('contact.subtitle')}</p>
          </div>
          <div className="space-y-4">
            <a
              href="https://www.google.com/maps/place/41%C2%B001'51.7%22N+28%C2%B058'31.5%22E/@41.0310287,28.9728527,17z/data=!3m1!4b1!4m4!3m3!8m2!3d41.0310287!4d28.9754276?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm shadow-slate-950/40 transition hover:border-sky-300/60 hover:shadow-sky-500/40 hover:shadow-lg cursor-pointer"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                <MapPinIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">{t('contact.addressLabel')}</p>
                <p className="text-base font-semibold text-white">{t('contact.address')}</p>
                <p className="text-xs text-slate-300">{t('contact.hoursTitle')}</p>
                <p className="text-sm text-slate-200">{t('contact.hoursValue')}</p>
              </div>
            </a>
            <div className="grid gap-4 sm:grid-cols-2">
              {channels.map((channel) => {
                const isSocial = channel.label === 'LinkedIn' || channel.label === 'Instagram';
                const isInstagram = channel.label === 'Instagram';

                if (isSocial) {
                  return (
                    <a
                      key={channel.label}
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded-2xl border p-5 shadow-sm transition-all sm:col-span-2 ${isInstagram ? 'sm:col-span-2' : ''
                        } cursor-pointer border-white/10 bg-gradient-to-r from-slate-900 to-slate-950 text-white hover:border-sky-300/60 hover:shadow-sky-500/40 hover:shadow-lg`}
                    >
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sky-300">
                          {iconMap[channel.label] || <PhoneIcon className="h-5 w-5" />}
                        </span>
                        <span className="text-slate-50">{channel.label}</span>
                      </div>
                      <p className="mt-2 text-lg font-semibold text-slate-50">{channel.value}</p>
                      {channel.hint && <p className="text-xs text-slate-400">{channel.hint}</p>}
                    </a>
                  );
                }

                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    className={`rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-50 shadow-sm transition hover:border-sky-300/60 hover:shadow-sky-500/30 hover:shadow-lg cursor-pointer ${channel.label === 'E-posta' || channel.label === 'E-mail' ? 'sm:col-span-2' : ''
                      }`}
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sky-300">
                        {iconMap[channel.label] || <PhoneIcon className="h-5 w-5" />}
                      </span>
                      <span>{channel.label}</span>
                    </div>
                    <p className="mt-2 text-lg font-semibold text-slate-50">{channel.value}</p>
                    {channel.hint && <p className="text-xs text-slate-300">{channel.hint}</p>}
                  </a>
                );
              })}
            </div>
            <div className="rounded-2xl border border-white/10">
              <iframe
                title="Ofis Konumu"
                src="https://maps.google.com/maps?q=Terkos+İş+Hanı,+Taksim&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                className="rounded-[22px]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col rounded-[32px] border border-slate-100 bg-slate-900/90 p-8 text-white shadow-2xl shadow-slate-900/50"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">
            {t('contact.form.badge')}
          </p>
          <h3 className="mt-3 text-2xl font-semibold">{t('contact.form.title')}</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-medium uppercase tracking-[0.3em] text-slate-300" htmlFor="name">
                {t('contact.form.name')}
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
              />
            </div>
            <div>
              <label className="text-xs font-medium uppercase tracking-[0.3em] text-slate-300" htmlFor="email">
                {t('contact.form.email')}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-xs font-medium uppercase tracking-[0.3em] text-slate-300" htmlFor="phone">
              {t('contact.form.phone')}
            </label>
            <input
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
            />
          </div>
          <div className="mt-4">
            <label className="text-xs font-medium uppercase tracking-[0.3em] text-slate-300" htmlFor="message">
              {t('contact.form.message')}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-sky-400 to-cyan-300 px-4 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-sky-400/40 transition hover:scale-[1.01]"
          >
            {t('contact.form.submit')}
          </button>

          <div className="mt-5 border-t border-slate-800 pt-4 text-xs text-slate-400">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <p>
                {t('contact.form.footerPrimary', { time: t('contact.form.footerPrimaryTime') })}
              </p>
              <p className="text-[11px] text-slate-500">
                {t('contact.form.footerSecondary')}
              </p>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
