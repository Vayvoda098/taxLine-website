import React from 'react';
import Services from '../components/Services';
import ProcessRoadmap from '../components/ProcessRoadmap';
import ConsultationBanner from '../components/ConsultationBanner';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Services />
      <ConsultationBanner />
      <ProcessRoadmap />
    </>
  );
};

export default ServicesPage;

