"use client"
import { useChat } from 'ai/react';
import { useRef, useEffect } from 'react'
import { motion } from "framer-motion"
import { Bot, Send, Sparkles } from "lucide-react"

export default function MedsAiPage() {

    const { messages, input, handleInputChange, handleSubmit } = useChat();


    const messagesContainerRef = useRef<HTMLDivElement>(null)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesContainerRef.current?.scrollTo({
            top: messagesContainerRef.current.scrollHeight,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    console.log(messages);
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#FFE4E6] to-white  section-gap lg:mt-0  md:mt-10 mt-24">


            {/* AI Chat Interface */}
            <section className="py-12 md:py-20">
                <div className="container ">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className=" bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="p-6 bg-gradient-to-r from-[#DB2777] to-[#BE185D] text-white flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-white rounded-full">
                                    <Bot className="h-6 w-6 text-[#DB2777]" />
                                </div>
                                <h2 className="text-2xl font-bold">Meds AI Assistant</h2>
                            </div>
                            <Sparkles className="h-6 w-6 animate-pulse" />
                        </div>
                        <div
                            ref={messagesContainerRef}
                            className="h-[50vh] overflow-y-auto p-4 space-y-4 chatScroll"
                        >
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[70%] rounded-lg p-3 ${message.role === 'user'
                                            ? 'bg-[#DB2777] text-white'
                                            : 'bg-gray-100 text-gray-800'
                                            }`}
                                    >
                                        {message.content}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                        <form onSubmit={handleSubmit} className="p-4 border-t">
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={handleInputChange}
                                    placeholder="Type your message here..."
                                    className="flex-grow px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#DB2777]"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#DB2777] text-white p-2 rounded-full hover:bg-[#BE185D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#DB2777] focus:ring-offset-2"
                                >
                                    <Send className="h-6 w-6" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
