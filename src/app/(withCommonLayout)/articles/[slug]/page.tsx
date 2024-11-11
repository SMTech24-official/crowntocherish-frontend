"use client"
import { notFound, useParams } from 'next/navigation'
import Image from 'next/image'
import { CalendarDays, Clock, User } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { articles } from '@/lib/blogs'
import Subscription from '@/components/blogs/Subscribe'

export default function BlogPost() {
  const params = useParams()
  // Finding the post by slug
  const post = articles.find(post => post.slug === params.slug)

  // If no post is found, show the not found page
  if (!post) {
    notFound()
  }

  return (
    <section className='section-gap lg:mt-0 md:mt-36 mt-28'>
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="mb-4 inline-block px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20">
              {post.category}
            </p>
            <h1 className="text-4xl font-bold text-text_title mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <Card className="mb-8">
              <CardContent className="p-6">
                <p className="text-lg text-muted-foreground italic">
                  {post.excerpt}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6 md:text-lg">
              {post.description}
            </p>
            <h2 className="text-2xl font-semibold text-text_title mt-8 mb-4">
              Key Points
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {post?.keyPoints?.map((data, idx) => <li key={idx}>{data}</li>)}
            </ul>
            <Subscription />
          </div>
        </div>
      </div>
    </section>
  )
}
