"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import SmartCTA from "@/components/SmartCTA";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Treatments", href: "/#treatments" },
    { name: "Hospitals", href: "/#hospitals" },
    { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="font-heading font-bold text-2xl md:text-3xl text-primary tracking-tight">
                        DOC <span className="text-secondary">Foot & Ankle</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors uppercase tracking-wide"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <SmartCTA />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-600 focus:outline-none hover:text-primary transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 top-20 shadow-xl animate-in slide-in-from-top-2 z-40">
                    <div className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-slate-700 hover:text-primary py-3 block border-b border-slate-50 last:border-0"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <SmartCTA className="w-full justify-center py-3" />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
