import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function HomePage() {
  return (


  
      <main className="flex flex-1 items-center justify-center px-4 p-16">
        <div className="text-center max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to MiniBlog ✍️
          </h1>
          <p className="text-slate-400 text-lg mb-6">
            A simple, elegant space to share your thoughts and read from others.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Button variant="default" asChild>
              <Link href={"/blogs"}> View Blog Posts</Link>
              </Button>

            <Button variant="secondary">
              <Link href={"/blogs/create"}> Write a Post</Link>
            </Button>
          
          </div>
        </div>
      </main>

       
  
  );
}
