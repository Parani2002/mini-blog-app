import React from 'react'
import blogs from '../../data/blog'
import Blog from '@/app/components/Blog'
import { Button } from "@/components/ui/button"

const Posts = () => {
  return (
    <div className='p-4'>
<h1 className='font-xl font-bold text-center '>Blogs List</h1>
<section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
    {blogs.map((post) => (
        <div key={post.id} className="">
            <Blog 
                title={post.title} 
                description={post.content} />
        </div>
    ))}

</section>
    </div>
)
}

export default Posts