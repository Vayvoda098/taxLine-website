import React from 'react';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const ContactPage: React.FC = () => {
  return (
    <>
      <SEO
        title="İletişim"
        description="Bize ulaşın. Adres, telefon ve e-posta bilgilerimiz. Sorularınız için buradayız."
      />
      <Contact />
    </>
  );
};

export default ContactPage;

