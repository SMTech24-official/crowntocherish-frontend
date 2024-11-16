"use client"



import { useGetAllFeedbacksQuery } from '@/redux/api/feedbacksApi';
import React from 'react';
import DashboardHeader from '../shared/dashboardHeader/DashboardHeader';
import { Card, CardContent } from '../ui/card';
import { TestimonialsCard } from '../testimonialsCard/TestimonialsCard';
import { id, TestimonialProps } from '@/types/types';
import { Star } from 'lucide-react';
import Loader from '../loader/Loader';

const FeedBacksPage = () => {
    const { data: testimonials, isLoading } = useGetAllFeedbacksQuery(undefined);

    // console.log(testimonials);
    if (isLoading) {
        return <Loader/>
    }
    return (
        <div className='dashboard-containers'>
            <DashboardHeader
                title="Reach out to us for personalized assistance"
                toolText="Contact Us"
                subtitle="Email, call, or complete the form to learn how we can solve your needs."
            />
            <Card className='mt-10'>
                <div className="w-full max-w-sm p-5">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="flex flex-col items-center sm:items-start">
                            <p className="text-sm font-medium text-muted-foreground">Total Feedbacks</p>
                            <p className="text-3xl font-bold">{testimonials?.length}</p>
                        </div>
                        <div className="h-px w-full sm:h-12 sm:w-px bg-border border" />
                        <div className="flex flex-col items-center sm:items-end">
                            <p className="text-sm font-medium text-muted-foreground">Average Rating</p>
                            <div className="flex items-center gap-1">
                                <p className="text-3xl font-bold">{testimonials?.avg_rating}</p>
                                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                            </div>
                        </div>
                    </div>
                </div>
                <CardContent className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                    {
                        testimonials?.data?.map((data: TestimonialProps & id, idx: number) => <TestimonialsCard isAdmin={true} idx={idx} data={data} key={idx} />)
                    }
                </CardContent>
            </Card>
        </div>
    );
};

export default FeedBacksPage;