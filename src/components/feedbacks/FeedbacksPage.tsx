"use client"



import { useGetAllFeedbacksQuery } from '@/redux/api/feedbacksApi';
import React from 'react';
import DashboardHeader from '../shared/dashboardHeader/DashboardHeader';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { TestimonialsCard } from '../testimonialsCard/TestimonialsCard';
import { id, TestimonialProps } from '@/types/types';

const FeedBacksPage =  () => {
    const { data: testimonials, isLoading } = useGetAllFeedbacksQuery(undefined);

    if(isLoading){
        return <p className='h-screen w-full flex items-center justify-center'>Loading....</p>
    }
    return (
        <div className='dashboard-containers'>
            <DashboardHeader
                title="Reach out to us for personalized assistance"
                toolText="Contact Us"
                subtitle="Email, call, or complete the form to learn how we can solve your needs."
            />
            <Card className='mt-10'>
                <CardHeader>
                    <CardTitle>Total FeedBacks {testimonials?.data.length}</CardTitle>
                </CardHeader>
                <CardContent className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                    {
                        testimonials?.data?.map((data : TestimonialProps & id, idx: number) => <TestimonialsCard isAdmin={true} idx={idx} data={data} key={idx} />)
                    }
                </CardContent>
            </Card>
        </div>
    );
};

export default FeedBacksPage;