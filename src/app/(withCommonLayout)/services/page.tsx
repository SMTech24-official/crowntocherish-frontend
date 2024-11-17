import ServicesPage from '@/components/service/ServicesPage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Services | Explain My Meds',
}



const page = () => {
  return (
    <div>
      <ServicesPage/>
    </div>
  );
};

export default page;