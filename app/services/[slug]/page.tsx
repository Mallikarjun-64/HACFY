import React from 'react';
import { notFound } from 'next/navigation';
import { services } from '@/lib/services-data';
import ServicePageClient from './ServicePageClient';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const service = services.find(
    (s) => s.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}
