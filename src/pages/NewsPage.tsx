import React from 'react';
import NewsSection from '../components/NewsSection';

// Muhasebe haberlerinin listelendiği ayrı sayfa.
// Navbar'daki "Haberler" menü öğesi bu sayfaya yönlendirilir.

const NewsPage: React.FC = () => {
  return (
    <>
      <NewsSection />
    </>
  );
};

export default NewsPage;
