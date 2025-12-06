import React from 'react';
import NewsSection from '../components/NewsSection';
import SEO from '../components/SEO';

// Muhasebe haberlerinin listelendiği ayrı sayfa.
// Navbar'daki "Haberler" menü öğesi bu sayfaya yönlendirilir.

const NewsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Haberler"
        description="Güncel vergi, muhasebe ve ekonomi haberleri. Sektördeki son gelişmeleri takip edin."
      />
      <NewsSection />
    </>
  );
};

export default NewsPage;
