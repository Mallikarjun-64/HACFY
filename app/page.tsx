import React from 'react';
import Hero from '@/components/sections/Hero';
import ModernBusinesses from '@/components/sections/ModernBusinesses';
import SMESectors from '@/components/sections/SMESectors';
import TrustedServices from '@/components/sections/TrustedServices';
import Testimonials from '@/components/sections/Testimonials';
import Resources from '@/components/sections/Resources';
import Careers from '@/components/sections/Careers';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <ModernBusinesses />
      <SMESectors />
      <TrustedServices />
      <Testimonials />
      <Resources />
      <Careers />
      <Footer />
    </>
  );
}
