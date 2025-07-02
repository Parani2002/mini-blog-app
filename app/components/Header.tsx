
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel, } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu } from "lucide-react";
import Link from "next/link";
import { auth } from "../../auth"

export default async function Header() {
  const session = await auth();
  console.log(session);
  
   
  return (
    <header className="bg-slate-900 text-white px-6 py-4 shadow-md sticky w-full ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / App Name */}
        <div className="text-xl font-semibold"><Link href="/">Mini-Blog</Link></div>
        {/* Navigation (Optional for Desktop) */}
        <nav className="hidden md:flex gap-6 items-center">
        
          <Link href="/" className="hover:text-slate-300 transition">Home</Link>
          <Link href="/about" className="hover:text-slate-300 transition">About</Link>
          <Link href="/blogs" className="hover:text-slate-300 transition">Blogs</Link>
        </nav>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-slate-800 text-white border-slate-700">
             <DropdownMenuLabel>{session?.user?.name ?? session?.user?.email ?? "User"}</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu />
        </Button>
      </div>
    </header>
  );
}
