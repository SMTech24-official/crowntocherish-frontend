'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Mail, Search, Calendar, Send } from 'lucide-react'
import DashboardHeader from '@/components/shared/dashboardHeader/DashboardHeader'

// Mock data for subscribers
const initialSubscribers = [
    { id: 1, email: 'john@example.com', subscribedAt: '2023-11-01T10:00:00Z' },
    { id: 2, email: 'jane@example.com', subscribedAt: '2023-11-02T14:30:00Z' },
    { id: 3, email: 'bob@example.com', subscribedAt: '2023-11-03T09:15:00Z' },
    { id: 4, email: 'alice@example.com', subscribedAt: '2023-11-04T16:45:00Z' },
    { id: 5, email: 'charlie@example.com', subscribedAt: '2023-11-05T11:20:00Z' },
]

export default function SubscriberTable() {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredSubscribers = initialSubscribers.filter((subscriber) =>
        subscriber.email.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleSendEmail = (email: string) => {
        console.log(`Sending email to ${email}`)

    }

    return (
        <div className="dashboard-containers">
                <DashboardHeader
                    title="Engage with Your Subscribers"
                    toolText="Subscriber"
                    subtitle="Reach out via email and connect with subscribers and address their needs."
                />

            <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center mb-6">
                <div className="text-lg font-semibold flex items-center gap-2">
                    Total Subscribers: {initialSubscribers.length}
                </div>
                <div className="relative max-w-sm">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        type="search"
                        placeholder="Search subscribers..."
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="">
                                <div className='flex items-center gap-2'>
                                    <Mail className="h-4 w-4" />
                                    Email
                                </div>
                            </TableHead>
                            <TableHead className="">
                                <div className='flex items-center gap-2'>
                                    <Calendar className="h-4 w-4" />
                                    Subscribed At
                                </div>
                            </TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredSubscribers.map((subscriber) => (
                            <TableRow key={subscriber.id}>
                                <TableCell className="font-medium">{subscriber.email}</TableCell>
                                <TableCell className='text-nowrap'>
                                    {new Date(subscriber.subscribedAt).toLocaleString()}
                                </TableCell>
                                <TableCell className="flex items-center justify-end">
                                    <button
                                        className='flex items-center justify-end bg-button_bg hover:bg-button_hover_bg text-white rounded-lg px-2 lg:px-3 py-2'
                                        onClick={() => handleSendEmail(subscriber.email)}
                                    >
                                        <Send className="mr-2 h-4 w-4" />
                                        <span className='text-nowrap'>Send Email</span>
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}