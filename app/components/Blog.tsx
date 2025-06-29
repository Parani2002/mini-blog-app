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
interface BlogsProps {
  id: number;
  title: string;
  description: string;
  date:string;

}

const Blog = ({id,title,description,date} : BlogsProps) => {
  return (
    <Card>
  <CardHeader>
    <CardTitle>
      <Button variant="link" className='text-blue-400'>{title}</Button>
      </CardTitle>
    {/* <CardDescription>{description}</CardDescription> */}
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