"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FaCog, FaChevronDown } from "react-icons/fa";
import SettingsModal from "@/components/SettingsModal";
import promptTypes from "@/constants/promptTypes";

export default function Header() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentSection =
    promptTypes.find((item) => item.path === pathname) || promptTypes[0];

  // 📌 Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <header className="w-full bg-gray-800 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Title for larger screens */}
        <Link
          href={currentSection.path}
          className="hidden md:block text-2xl font-bold text-sky-100">
          {currentSection.name}
          {pathname === "/prompts/enhancements" && (
            <span className="text-sm text-gray-400 ml-2">
              (Click to copy text)
            </span>
          )}
        </Link>

        {/* Mobile title + dropdown */}
        <div
          className="md:hidden flex flex-col flex-grow relative"
          ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center text-xl font-semibold text-sky-100">
            <span>{currentSection.name}</span>
            <FaChevronDown
              className={`ml-2 transition-transform ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {dropdownOpen && (
            <div className="absolute z-10 mt-2 w-full bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              {promptTypes.map(({ name, path }) => (
                <Link
                  key={path}
                  href={path}
                  onClick={() => setDropdownOpen(false)}>
                  <div
                    className={`px-4 py-2 text-white hover:bg-gray-600 ${
                      pathname === path ? "bg-gray-600" : ""
                    }`}>
                    {name}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Settings button */}
        <div className="flex items-center space-x-4">
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

      <SettingsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
}
