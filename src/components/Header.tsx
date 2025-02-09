/**
 * /src/components/Header.tsx
 *
 * This component renders the header for the app, including the dynamic page headline
 * based on the current prompt type and a settings button that launches the
 * settings modal.
 *
 * Features:
 * - Displays the current prompt type name dynamically based on the active page.
 * - Provides a settings button with an icon to open the user preferences modal.
 * - Responsive design with Tailwind CSS for consistent styling.
 *
 * Usage:
 * - Used at the top of the app to display navigation context and provide quick access
 *   to user settings.
 */

"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { FaCog } from "react-icons/fa";
import SettingsModal from "@/components/SettingsModal";
import promptTypes from "@/constants/promptTypes";

export default function Header() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentSection =
    promptTypes.find((item) => item.path === pathname) || promptTypes[0];

  return (
    <header className="w-full bg-slate-800 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Dynamic Title Based on Current Section */}
        <Link
          href={currentSection.path}
          className="text-2xl font-bold text-sky-100">
          {currentSection.name}
          {pathname === "/prompts/enhancements" && (
            <span className="text-sm text-gray-400 ml-2">
              (Click to copy text)
            </span>
          )}
        </Link>

        {/* Current Section Display */}
        <div className="flex items-center space-x-4">
          <span className="text-gray-100 text-lg hidden">
            {currentSection.name}
          </span>

          {/* Settings Button with Popover Text */}
          <div className="relative">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center space-x-2 bg-slate-600 hover:bg-slate-500 text-white px-4 py-2 rounded-lg shadow-sm transition group">
              <FaCog />
              <span>Settings</span>

              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-gray-800 text-gray-200 p-4 rounded-lg shadow-lg z-10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                <p className="text-sm">
                  Adjust the default settings for programming language,
                  framework, etc. These will auto-fill form fields.
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
}
