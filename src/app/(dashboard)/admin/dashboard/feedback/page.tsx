import DashboardHeader from '@/components/shared/dashboardHeader/DashboardHeader';
import React from 'react';

const page = () => {
    return (
        <div className='dashboard-containers'>
            <DashboardHeader
                title="Reach out to us for personalized assistance"
                toolText="Contact Us"
                subtitle="Email, call, or complete the form to learn how we can solve your needs."
            />

        </div>
    );
};

export default page;