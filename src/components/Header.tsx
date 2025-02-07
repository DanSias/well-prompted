"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
// import { ChevronDown } from "lucide-react";
import promptTypes from "@/constants/promptTypes";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const currentSection =
    promptTypes.find((item) => item.path === pathname) || promptTypes[0];

  return (
    <header className="w-full bg-slate-800 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand Title */}
        <Link href="/" className="text-2xl font-bold text-sky-100">
          Well Prompted
        </Link>

        {/* Navigation Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-200 transition">
            <span className="text-gray-800">{currentSection.name}</span>
            {/* <ChevronDown className="w-5 h-5 text-gray-600" /> */}
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50">
              {promptTypes.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    router.push(item.path);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition">
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
