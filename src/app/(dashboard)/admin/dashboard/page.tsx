import React from 'react'
import DashboardHeader from '@/components/shared/dashboardHeader/DashboardHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TestimonialsCard } from '@/components/testimonialsCard/TestimonialsCard'
import { testimonials } from '@/lib/testimonials'

// Mock data for demonstration
const stats = [
    { title: 'Total Feedbacks', value: 1234 },
    { title: 'Active Feedbacks', value: 789 },
    { title: 'Total Subscribers', value: 5678 },
]


const StatCard = ({ title, value }: { title: string; value: number }) => (
    <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">{value.toLocaleString()}</div>
        </CardContent>
    </Card>
)



export default function DashboardPage() {
    return (
        <div className="space-y-8 p-8">
            <DashboardHeader
                title="Reach out to us for personalized assistance"
                toolText="Dashboard"
                subtitle="Email, call, or complete the form to learn how we can solve your needs."
            />

            <div className="grid gap-4 md:grid-cols-3">
                {stats.map((stat) => (
                    <StatCard key={stat.title} {...stat} />
                ))}
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