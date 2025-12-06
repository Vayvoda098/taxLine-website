import React from 'react';
import About from '../components/About';
import ProcessRoadmap from '../components/ProcessRoadmap';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Hakkımızda"
        description="TaxEurope hakkında detaylı bilgi, vizyonumuz, misyonumuz ve uzman ekibimiz."
      />
      <About />
    </>
  );
};

export default AboutPage;

