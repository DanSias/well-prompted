/**
 * /src/components/Sidebar.tsx
 *
 * This component renders the left-hand navigation for the app, allowing users to
 * switch between different AI prompt types (e.g., Code Generation, Debugging & Errors).
 * It also provides hover-based descriptions for each prompt type.
 *
 * Features:
 * - Displays navigation items for each prompt type with icons and dynamic highlighting.
 * - Shows a popover with a brief description when hovering over each navigation item.
 * - Ensures full-width clickable links and smooth transitions for better UX.
 *
 * Usage:
 * - Displayed on the left side of the prompt generation pages for easy navigation between different prompt types.
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import promptTypes from "@/constants/promptTypes";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-72 h-full min-h-screen bg-slate-800 text-white p-4 shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-left mt-2 text-sky-50">
        Well Prompted
      </h1>
      <nav className="space-y-4">
        {promptTypes.map(({ name, path, icon: Icon, description }) => (
          <div key={path} className="relative">
            <Link href={path} className="block w-full group">
              <div
                className={`flex items-center w-full p-3 mb-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-700 ${
                  pathname === path ? "bg-gray-700" : ""
                }`}>
                <Icon className="text-xl mr-3" />
                <span className="text-lg">{name}</span>

                {/* Popover inside the Link for correct hover behavior */}
                <div className="absolute top-1/2 left-full transform -translate-y-1/2 ml-2 w-64 bg-gray-800 text-gray-200 p-4 rounded-lg shadow-lg z-10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                  <p className="text-sm">{description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}
