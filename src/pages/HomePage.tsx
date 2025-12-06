import React from 'react';
import Hero from '../components/Hero';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Ana Sayfa"
        description="TaxEurope ile Avrupa'daki vergi ve muhasebe işlerinizi profesyonelce yönetin. Uzman kadromuzla yanınızdayız."
      />
      <Hero />
    </>
  );
};

export default HomePage;
