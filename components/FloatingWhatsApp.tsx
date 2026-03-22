
"use client";

import { MessageCircle, Phone, X, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export default function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isDayTime, setIsDayTime] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
                setIsExpanded(false);
            }
        };

        const checkTime = () => {
            const now = new Date();
            // Convert to IST
            const istTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
            const hours = istTime.getHours();
            const minutes = istTime.getMinutes();
            const timeInDecimal = hours + minutes / 60;

            // Active between 9:30 AM (9.5) and 8:30 PM (20.5)
            if (timeInDecimal >= 9.5 && timeInDecimal < 20.5) {
                setIsDayTime(true);
            } else {
                setIsDayTime(false);
            }
        };

        checkTime();
        window.addEventListener("scroll", handleScroll);
        const interval = setInterval(checkTime, 60000);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearInterval(interval);
        }
    }, []);

    if (!isDayTime) {
        // Night mode: Direct WhatsApp link
        return (
            <a
                href="https://wa.me/917710039780?text=Hi, I would like to book an appointment."
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                    "fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-xl transition-all duration-300 md:hidden flex items-center justify-center animate-in fade-in zoom-in hover:scale-110 hover:shadow-2xl hover:bg-[#20bd5a]",
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
                )}
                aria-label="Chat on WhatsApp"
            >
                <img src="/media/whatsapp_icon_svg.svg" alt="WhatsApp" className="w-8 h-8 object-contain" />
            </a>
        );
    }

    // Day mode: Expandable Menu
    return (
        <div className={cn(
            "fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 md:hidden",
            isVisible ? "pointer-events-auto" : "pointer-events-none"
        )}>
            <AnimatePresence>
                {isExpanded && (
                    <>
                        <motion.a
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.8 }}
                            href="tel:+917710039780"
                            className="bg-primary text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-teal-700"
                            aria-label="Call Now"
                        >
                            <Phone className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.8 }}
                            transition={{ delay: 0.05 }}
                            href="https://wa.me/917710039780?text=Hi, I would like to book an appointment."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-[#20bd5a]"
                            aria-label="WhatsApp"
                        >
                            <img src="/media/whatsapp_icon_svg.svg" alt="WhatsApp" className="w-8 h-8 object-contain" />
                        </motion.a>
                    </>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={cn(
                    "bg-[#25D366] p-4 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-[#20bd5a] hover:shadow-2xl",
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                )}
            >
                {isExpanded ? <X className="w-8 h-8 text-white" /> : (
                    <div className="relative">
                        <img src="/media/whatsapp_icon_svg.svg" alt="WhatsApp" className="w-8 h-8 object-contain" />
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                    </div>
                )}
            </button>
        </div>
    );
}

