import React from 'react'
import blogs from './data/blog'
import Blog from '@/app/components/Blog'
import { Button } from "@/components/ui/button"

const Posts = () => {
    const latestBlogs = blogs.slice(0,6);
    return (
        <div className='p-4 flex flex-col gap-4'>
            <h1 className='text-4xl font-bold text-center '>Latest posts</h1>
            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
                {latestBlogs.map((post) => (
                    <div key={post.id} className="">
                        <Blog
                            title={post.title}
                            description={post.content}
                            date={post.date}
                            id={post.id}
                             />
                    </div>
                ))}

            </section>
        </div>
    )
}

export default Posts