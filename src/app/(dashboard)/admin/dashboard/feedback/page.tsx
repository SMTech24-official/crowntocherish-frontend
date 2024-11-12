import DashboardHeader from '@/components/shared/dashboardHeader/DashboardHeader';
import { TestimonialsCard } from '@/components/testimonialsCard/TestimonialsCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { testimonials } from '@/lib/testimonials';

import React from 'react';

const page = () => {
    return (
        <div className='dashboard-containers'>
            <DashboardHeader
                title="Reach out to us for personalized assistance"
                toolText="Contact Us"
                subtitle="Email, call, or complete the form to learn how we can solve your needs."
            />
            <Card className='mt-10'>
                <CardHeader>
                    <CardTitle>Total FeedBacks</CardTitle>
                </CardHeader>
                <CardContent className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                    {
                        testimonials?.map((data, idx) => <TestimonialsCard isAdmin={true} idx={idx} data={data} key={idx} />)
                    }
                </CardContent>
            </Card>
        </div>
    );
};

export default page;