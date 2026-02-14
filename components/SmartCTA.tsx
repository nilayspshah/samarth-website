"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SmartCTA({ className }: { className?: string }) {
    const [isCallActive, setIsCallActive] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkTime = () => {
            const now = new Date();
            // Convert to IST (UTC+5:30)
            const istTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
            const hours = istTime.getHours();
            const minutes = istTime.getMinutes();
            const timeInDecimal = hours + minutes / 60;

            // Active between 9:30 AM (9.5) and 8:30 PM (20.5)
            if (timeInDecimal >= 9.5 && timeInDecimal < 20.5) {
                setIsCallActive(true);
            } else {
                setIsCallActive(false);
            }
        };

        checkTime();
        const interval = setInterval(checkTime, 60000); // Check every minute
        return () => clearInterval(interval);
    }, []);

    // Render nothing during hydration to avoid mismatch
    if (!mounted) return null;

    if (isCallActive) {
        return (
            <div className={cn("flex items-center gap-3", className)}>
                <a
                    href="tel:+919876543210"
                    className="flex items-center gap-2 bg-primary hover:bg-teal-700 text-white font-bold py-2.5 px-5 rounded-full transition-all shadow-md hover:shadow-lg animate-pulse"
                >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                </a>
                <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2.5 px-5 rounded-full transition-all shadow-md hover:shadow-lg"
                >
                    <img src="/media/whatsapp_icon_svg.svg" alt="WhatsApp" className="w-6 h-6 object-contain" />
                    <span className="hidden sm:inline">WhatsApp</span>
                </a>
            </div>
        );
    }

    return (
        <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2.5 px-6 rounded-full transition-all shadow-md hover:shadow-lg",
                className
            )}
        >
            <img src="/media/whatsapp_icon_svg.svg" alt="WhatsApp" className="w-6 h-6 object-contain" />
            <span>Chat on WhatsApp</span>
        </a>
    );
}
