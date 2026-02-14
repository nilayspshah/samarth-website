"use client";

import React, { useState } from 'react';
import SectionHeading from "@/components/SectionHeading";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "How long is the recovery after foot surgery?",
        answer: "Recovery time varies significantly depending on the procedure. Minor surgeries may require 2-4 weeks of recovery, while complex reconstructions or ankle replacements can take 3-6 months. Dr. Samarth provides a personalized recovery plan aimed at getting you back on your feet as safely and quickly as possible."
    },
    {
        question: "Do you accept health insurance?",
        answer: "Yes, we accept major health insurance plans. We recommend contacting our clinic with your policy details so our team can verify your coverage and assist with the pre-authorization process."
    },
    {
        question: "Is surgery always necessary for foot pain?",
        answer: "No. We prioritize conservative, non-surgical treatments whenever possible. Options like physical therapy, custom orthotics, medication, and lifestyle modifications are explored first. Surgery is recommended only when these methods fail to provide relief or in cases of severe deformity or trauma."
    },
    {
        question: "How can I book an appointment?",
        answer: "Booking is easy! You can call us at +91 98765 43210 between 10 AM and 8 PM, or send us a message on WhatsApp anytime. You can also use the appointment request form on this website."
    },
    {
        question: "What should I bring to my first consultation?",
        answer: "Please bring any previous X-rays, MRI scans, or medical reports related to your condition. Also, wear comfortable clothing that allows easy examination of your foot and ankle."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading
                    title="Frequently Asked Questions"
                    subtitle="Answers to common queries about our treatments, procedures, and clinic policies."
                />

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={cn(
                                "border rounded-2xl overflow-hidden transition-all duration-300",
                                openIndex === index ? "border-primary/50 bg-primary/5 shadow-sm" : "border-slate-200 hover:border-slate-300"
                            )}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                            >
                                <span className={cn("font-bold text-lg", openIndex === index ? "text-primary" : "text-slate-900")}>
                                    {faq.question}
                                </span>
                                <span className={cn("p-1 rounded-full shrink-0 ml-4", openIndex === index ? "bg-primary text-white" : "bg-slate-100 text-slate-500")}>
                                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </span>
                            </button>

                            <div
                                className={cn(
                                    "px-6 pb-6 text-slate-600 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out",
                                    openIndex === index ? "max-h-96 opacity-100 pt-0" : "max-h-0 opacity-0 pb-0"
                                )}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
