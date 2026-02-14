"use client";

import SectionHeading from "@/components/SectionHeading";
import { Calendar, Phone, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function AppointmentPortal() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");
        // Simulate API call
        setTimeout(() => {
            setFormStatus("success");
        }, 1500);
    };

    return (
        <section id="appointment" className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 -right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionHeading title="Book Your Appointment" subtitle="Take the first step towards pain-free movement. Schedule your consultation today." />

                <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
                    {/* Left: Contact Info / Value Prop */}
                    <div className="md:w-5/12 bg-slate-900 p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold font-heading mb-6 text-white">Fast & Easy Booking</h3>
                            <p className="text-slate-300 mb-8 leading-relaxed">
                                Avoid long wait times. Schedule your consultation online or give us a call. We are here to help you get back on your feet.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-white/10 group-hover:bg-primary rounded-2xl flex items-center justify-center text-white transition-colors">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Call Us</p>
                                        <a href="tel:+919876543210" className="text-xl font-bold hover:text-primary transition-colors">+91 98765 43210</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-white/10 group-hover:bg-[#25D366] rounded-2xl flex items-center justify-center text-white transition-colors">
                                        <MessageCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">WhatsApp</p>
                                        <a href="https://wa.me/919876543210" target="_blank" className="text-xl font-bold hover:text-[#25D366] transition-colors">+91 98765 43210</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-white/10 group-hover:bg-primary rounded-2xl flex items-center justify-center text-white transition-colors">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Timings</p>
                                        <p className="font-bold">10:00 AM - 8:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form Placeholder */}
                    <div className="md:w-7/12 p-8 md:p-12 relative">
                        {formStatus === "success" ? (
                            <div className="h-full flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle className="w-10 h-10" />
                                </div>
                                <h4 className="text-2xl font-bold text-slate-900 mb-2">Request Sent!</h4>
                                <p className="text-slate-600">
                                    Thank you for your interest. Our team will contact you shortly to confirm your appointment slot.
                                </p>
                                <button
                                    onClick={() => setFormStatus("idle")}
                                    className="mt-8 text-primary font-bold hover:underline"
                                >
                                    Book Another
                                </button>
                            </div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400" placeholder="Doe" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">+91</span>
                                        <input required type="tel" className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400" placeholder="98765 43210" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Concern</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-slate-700 bg-white appearance-none cursor-pointer">
                                        <option>Select Treatment</option>
                                        <option>Flat Foot Surgery</option>
                                        <option>Heel Pain</option>
                                        <option>Sports Injury</option>
                                        <option>Ankle Replacement</option>
                                        <option>Diabetic Foot</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <button
                                    disabled={formStatus === "submitting"}
                                    className="w-full bg-primary hover:bg-teal-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all mt-4 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {formStatus === "submitting" ? (
                                        <span className="flex items-center gap-2">
                                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                            Submitting...
                                        </span>
                                    ) : (
                                        "Request Appointment"
                                    )}
                                </button>
                                <p className="text-xs text-center text-slate-400 mt-4">
                                    By submitting, you agree to be contacted by our clinic staff.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
