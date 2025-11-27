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
  Phone: <PhoneIcon className="h-5 w-5" />,
  'E-posta': <EnvelopeIcon className="h-5 w-5" />,
  'E-mail': <EnvelopeIcon className="h-5 w-5" />,
  WhatsApp: <PhoneIcon className="h-5 w-5" />,
};

const Contact: React.FC = () => {
  const { t }: any = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const channels: Channel[] = [
    {
      label: 'Telefon',
      value: '+90 538 281 57 01',
      href: 'tel:+905382815701',
      hint: 'Doğrudan danışma hattı',
    },
    {
      label: 'E-posta',
      value: 'info@taxeurope.com.tr',
      href: 'mailto:info@taxeurope.com.tr',
      hint: 'En geç 1 iş gününde dönüş',
    },
    {
      label: 'WhatsApp',
      value: '+90 538 281 57 01',
      href: 'https://wa.me/905382815701',
      hint: 'Hızlı mesaj desteği',
    },
  ];

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
      className="relative border-t border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 rounded-[32px] border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-8 shadow-2xl shadow-slate-200/70"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-600">{t('contact.title')}</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">{t('owner.fullName')}</h2>
            <p className="mt-3 text-base text-slate-600">{t('contact.subtitle')}</p>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                <MapPinIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  {t('contact.addressLabel')}
                </p>
                <p className="text-base font-semibold text-slate-900">{t('contact.address')}</p>
                <p className="text-xs text-slate-500">{t('contact.hoursTitle')}</p>
                <p className="text-sm text-slate-600">{t('contact.hoursValue')}</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {channels.map((channel) => (
                <div
                  key={channel.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50/95 p-5 shadow-sm shadow-slate-200"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-500">
                      {iconMap[channel.label] || <PhoneIcon className="h-5 w-5" />}
                    </span>
                    {channel.label}
                  </div>
                  <a
                    href={channel.href}
                    className="mt-2 block text-lg font-semibold text-slate-900 transition hover:text-sky-600"
                  >
                    {channel.value}
                  </a>
                  {channel.hint && <p className="text-xs text-slate-500">{channel.hint}</p>}
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-slate-100">
              <iframe
                title="Ofis Konumu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.777969824838!2d28.97247007724853!3d41.03120201777721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e06b3bf8d9%3A0xad4897de17c33f66!2sTerkos%20%C4%B0%C5%9F%20Han%C4%B1!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
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
