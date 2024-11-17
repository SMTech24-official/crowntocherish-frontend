import React from 'react';

import { articles } from '@/lib/blogs'
import SingleBlogs from '@/components/singleBLog/SingleBlogs';


// Generate dynamic metadata for the page
export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const post = articles.find(post => post.slug === params.slug)
  return {
    title: post?.title,
    description: post?.excerpt,
  }
}


const SingleBlogsPage = () => {
  return (
    <div>
      <SingleBlogs/>
    </div>
  );
};

export default SingleBlogsPage;