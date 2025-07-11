"use client";

import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import Image from "next/image";

export default function TranslucentNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md">
            <div className="flex items-center justify-between max-w-7xl mx-auto px-6 sm:px-8 h-14">
                {/* logo */}
                <a href="#" className="text-gray-200 text-xl">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={32}
                        height={32}
                        className="object-contain"
                    />
                </a>
                {/* nav links */}
                <div className="hidden md:flex items-center gap-6">
                    <a
                        href="#home"
                        className="text-gray-200 text-sm hover:text-white transition"
                    >
                        Home
                    </a>
                    <a
                        href="#education"
                        className="text-gray-200 text-sm hover:text-white transition"
                    >
                        Education
                    </a>
                    <a
                        href="#projects"
                        className="text-gray-200 text-sm hover:text-white transition"
                    >
                        Projects
                    </a>
                    <a
                        href="#skills"
                        className="text-gray-200 text-sm hover:text-white transition"
                    >
                        Skills
                    </a>
                    <a
                        href="https://linkedin.com/in/prabhmeet-singh-742189319"
                        className="text-gray-200 text-sm hover:text-white transition"
                    >
                        Contact
                    </a>
                </div>
                {/* mobile view */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-200 text-2xl focus:outline-none"
                >
                    {menuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-black/80 backdrop-blur-md px-6 py-4 space-y-3">
                    <a
                        onClick={() => setMenuOpen(false)}
                        href="#home"
                        className="block text-gray-200 text-sm hover:text-white"
                    >
                        Home
                    </a>
                    <a
                        onClick={() => setMenuOpen(false)}
                        href="#education"
                        className="block text-gray-200 text-sm hover:text-white"
                    >
                        Education
                    </a>
                    <a
                        onClick={() => setMenuOpen(false)}
                        href="#projects"
                        className="block text-gray-200 text-sm hover:text-white"
                    >
                        Projects
                    </a>
                    <a
                        onClick={() => setMenuOpen(false)}
                        href="#skills"
                        className="block text-gray-200 text-sm hover:text-white"
                    >
                        Skills
                    </a>
                    <a
                        onClick={() => setMenuOpen(false)}
                        href="https://linkedin.com/in/prabhmeet-singh-742189319"
                        className="block text-gray-200 text-sm hover:text-white"
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
}
