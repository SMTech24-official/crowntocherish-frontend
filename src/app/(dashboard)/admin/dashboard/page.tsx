import React from 'react'
import DashboardHeader from '@/components/shared/dashboardHeader/DashboardHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TestimonialsCard } from '@/components/testimonialsCard/TestimonialsCard'
import { testimonials } from '@/lib/testimonials'
import DashBoardStates from '@/components/dashboard/DashBoardStates'





export default function DashboardPage() {
    return (
        <div className="dashboard-containers">
            <DashboardHeader
                title="Reach out to us for personalized assistance"
                toolText="Dashboard"
                subtitle="Email, call, or complete the form to learn how we can solve your needs."
            />

            <div className="">
                <DashBoardStates />
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Active Feedbacks</CardTitle>
                </CardHeader>
                <CardContent className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                    {
                        testimonials?.map((data, idx) => <TestimonialsCard idx={idx} data={data} key={idx} />)
                    }
                </CardContent>
            </Card>
        </div>
    )
}