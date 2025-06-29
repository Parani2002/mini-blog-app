
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu } from "lucide-react";
import Link from "next/link";


export default function Header() {
   
  return (
    <header className="bg-slate-900 text-white px-6 py-4 shadow-md sticky w-full ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / App Name */}
        <div className="text-xl font-semibold">Mini-Blog</div>
        {/* Navigation (Optional for Desktop) */}
        <nav className="hidden md:flex gap-6 items-center">
        
            <Link href="/about" scroll={true} className="hover:text-slate-300 transition">Home</Link>
       
         
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
