import React from 'react';
import Services from '../components/Services';
import ConsultationBanner from '../components/ConsultationBanner';
import SEO from '../components/SEO';

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Hizmetlerimiz"
        description="Vergi danışmanlığı, şirket kuruluşu, bordrolama ve daha fazlası. İhtiyacınıza uygun çözümler."
      />
      <Services />
      <ConsultationBanner />
    </>
  );
};

export default ServicesPage;

