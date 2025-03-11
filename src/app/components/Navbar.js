"use client";
import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-black p-4 shadow-md flex flex-row items-center justify-between">
    
        <Link href="/" className="text-2xl font-bold">
        🏝️Lord of the Flies
        </Link>
           <div className="flex gap-3">
           <Link href="/about">About</Link>
          <Link href="/themes">Themes</Link>
          <Link href="/characters">Characters</Link>
          <Link href="/symbols">Symbols</Link>
           </div>
          

    </nav>
  );
}
