'use client'
import React from 'react'

import { useParams } from 'next/navigation';

const page = () => {
    // Use useParams to get the dynamic route parameter
    const params = useParams();
    // Extract the id from params
    // Note: In Next.js 13, you can directly access params in the component props
    // but here we are using useParams for demonstration
    // If you are using Next.js 14 or later, you can directly destructure params
    // from the component props like this: ({ params: { id } })
    // const { id } = params;
    // For Next.js 13, you can use the following line to get the id:
    // const id = params.id;
    // If you are using Next.js 14 or later, you can directly destructure params
    // from the component props like this: ({ params: { id } })
    const { id } = params;
  return (
    <div>Blog page {id}</div>
  )
}

export default page