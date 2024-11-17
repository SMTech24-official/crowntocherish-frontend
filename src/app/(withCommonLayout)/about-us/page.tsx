import AboutUsPage from '@/components/aboutUs/AboutUs';
import { Metadata } from 'next';
import React from 'react';



export const metadata: Metadata = {
  title: 'About Us | Explain My Meds',
}
const page = () => {
  return (
    <div>
      <AboutUsPage/>
    </div>
  );
};

export default page;