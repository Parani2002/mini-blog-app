import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    //<div className="bg-slate-950 min-h-screen text-white flex flex-col">

      
<>
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="text-center max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to MiniBlog ✍️
          </h1>
          <p className="text-slate-400 text-lg mb-6">
            A simple, elegant space to share your thoughts and read from others.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Button variant="default">View Blog Posts</Button>
            <Button variant="secondary">Write a Post</Button>
          </div>
        </div>
      </main>
        </>
    //</div>
  );
}
