"use client"

import React from 'react'
import DashboardHeader from '@/components/shared/dashboardHeader/DashboardHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TestimonialsCard } from '@/components/testimonialsCard/TestimonialsCard'
import DashBoardStates from '@/components/dashboard/DashBoardStates'
import {  useGetPublishedFeedbackQuery } from '@/redux/api/feedbacksApi'
import { id, TestimonialProps } from '@/types/types'





export default function DashboardPage() {
    const { data: testimonials, isLoading } = useGetPublishedFeedbackQuery("published");
    console.log(testimonials);
    if (isLoading) {
        return <p className='h-screen w-full flex items-center justify-center'>Loading....</p>
    }

    return (
        <div className="dashboard-containers">
            <DashboardHeader
                title="Reach out to us for personalized assistance"
                toolText="Dashboard"
                subtitle="Email, call, or complete the form to learn how we can solve your needs."
            />

            <div className="mt-10">
                <DashBoardStates />
            </div>

            <Card className='mt-10'>
                <CardHeader>
                    <CardTitle>Active Feedbacks</CardTitle>
                </CardHeader>
                <CardContent className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                    {
                        isLoading ? <p className='h-screen w-full flex items-center justify-center'>Loading....</p> :
                            testimonials.data?.map((data: TestimonialProps & id, idx: number) => <TestimonialsCard isAdmin={true} idx={idx} data={data} key={idx} />)
                    }
                </CardContent>
            </Card>
        </div>
    )
}