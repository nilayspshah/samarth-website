"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import SmartCTA from "@/components/SmartCTA";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/", id: "home" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Credentials & Resume", href: "/#academic", id: "academic" },
    { name: "Treatments", href: "/#treatments", id: "treatments" },
    { name: "Hospitals", href: "/#hospitals", id: "hospitals" },
    { name: "Gallery", href: "/#patient-corner", id: "patient-corner" },
    { name: "FAQ", href: "/#faq", id: "faq" },
    { name: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeId, setActiveId] = useState("home");

    // Scroll-spy: highlight the nav link for the section currently in view.
    useEffect(() => {
        const sections = navLinks
            .filter((link) => link.id !== "home")
            .map((link) => document.getElementById(link.id))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            // Activate the section crossing roughly the upper-middle of the viewport.
            { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));

        const handleScroll = () => {
            if (window.scrollY < 100) setActiveId("home");
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="font-heading font-bold text-2xl md:text-3xl text-primary tracking-tight">
                        DOC <span className="text-secondary">Foot & Ankle</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex gap-6 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                aria-current={activeId === link.id ? "page" : undefined}
                                className={cn(
                                    "relative text-sm font-medium transition-colors uppercase tracking-wide hover:text-primary",
                                    activeId === link.id ? "text-primary" : "text-slate-600"
                                )}
                            >
                                {link.name}
                                <span
                                    className={cn(
                                        "absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-primary transition-all duration-300",
                                        activeId === link.id ? "w-full" : "w-0"
                                    )}
                                />
                            </Link>
                        ))}
                        <Link
                            href="/#appointment"
                            className="bg-primary hover:bg-teal-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors whitespace-nowrap"
                        >
                            Book An Appointment
                        </Link>
                        <SmartCTA />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-slate-600 focus:outline-none hover:text-primary transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full left-0 top-20 shadow-xl animate-in slide-in-from-top-2 z-40">
                    <div className="flex flex-col p-6 gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                aria-current={activeId === link.id ? "page" : undefined}
                                className={cn(
                                    "text-lg font-medium py-3 px-4 block rounded-xl border-l-4 transition-colors",
                                    activeId === link.id
                                        ? "text-primary bg-primary/5 border-primary"
                                        : "text-slate-700 border-transparent hover:text-primary hover:bg-slate-50"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/#appointment"
                            onClick={() => setIsOpen(false)}
                            className="mt-3 bg-primary hover:bg-teal-700 text-white text-center font-semibold py-3 rounded-full transition-colors"
                        >
                            Book An Appointment
                        </Link>
                        <div className="pt-2">
                            <SmartCTA className="w-full justify-center py-3" />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
