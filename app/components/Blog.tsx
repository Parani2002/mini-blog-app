import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatDistanceToNow } from 'date-fns';

import Link from 'next/link';
interface BlogsProps {
  id: number;
  title: string;
  description: string;
  date: string;

}

const Blog = ({ id, title, description, date }: BlogsProps) => {
  return (
    <Card>
      
      <CardHeader>
        <CardTitle>
          <div className='flex items-center gap-2'>
            <Button variant="link" className='text-blue-400'>
              <Link href={`/blogs/${id}`}>
                {title}
              </Link>
            </Button>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p>{description}</p>
      </CardContent>

      <CardFooter>
        <p>{formatDistanceToNow(new Date(date), { addSuffix: true })}</p>
      </CardFooter>

    </Card>
  )
}

export default Blog