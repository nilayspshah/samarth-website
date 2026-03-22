"use client";

import SectionHeading from "@/components/SectionHeading";
import { Calendar, Phone, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function AppointmentPortal() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [selectedConcern, setSelectedConcern] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus("submitting");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        data.access_key = "1e739287-b452-4656-a837-5e26e54f8996";
        data.subject = `New Appointment Request from ${data['First Name']} ${data['Last Name']}`;
        data.from_name = "DOC Foot & Ankle Booking";

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();

            if (result.success) {
                setFormStatus("success");
            } else {
                console.error("Submission failed", result);
                setFormStatus("idle");
                alert("Something went wrong. Please try again or contact us directly.");
            }
        } catch (error) {
            console.error("Network error API Web3forms", error);
            setFormStatus("idle");
            alert("Network error. Please check your internet and try again.");
        }
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
                                        <a href="tel:+917710039780" className="text-xl font-bold hover:text-primary transition-colors">+91 7710039780</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-white/10 group-hover:bg-[#25D366] rounded-2xl flex items-center justify-center text-white transition-colors">
                                        <MessageCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">WhatsApp</p>
                                        <a href="https://wa.me/917710039780" target="_blank" className="text-xl font-bold hover:text-[#25D366] transition-colors">+91 7710039780</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-white/10 group-hover:bg-primary rounded-2xl flex items-center justify-center text-white transition-colors">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Calling Hours</p>
                                        <p className="font-bold">9:00AM - 9:00PM</p>
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
                                        <input name="First Name" required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                                        <input name="Last Name" required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400" placeholder="Doe" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                    <input name="Phone Number" required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400" placeholder="+91 77100 39780" />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Place of Visit</label>
                                        <select name="Place of Visit" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-slate-700 bg-white appearance-none cursor-pointer">
                                            <option value="">Select Place of Visit</option>
                                            <option>Mumbai - Ghatkopar</option>
                                            <option>Mumbai - Chembur</option>
                                            <option>Mumbai - Other</option>
                                            <option>Thane</option>
                                            <option>Guwahati</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Concern</label>
                                        <select 
                                            name="Concern" 
                                            required
                                            value={selectedConcern}
                                            onChange={(e) => setSelectedConcern(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-slate-700 bg-white appearance-none cursor-pointer"
                                        >
                                            <option value="">Select Treatment</option>
                                            <option value="Fracture">Fracture</option>
                                            <option value="Post Operative Follow-Up">Post Operative Follow-Up</option>
                                            <option value="Infection">Infection</option>
                                            <option value="Flat Foot">Flat Foot</option>
                                            <option value="Diabetic Foot">Diabetic Foot</option>
                                            <option value="Heel Pain">Heel Pain</option>
                                            <option value="Sports Injury">Sports Injury</option>
                                            <option value="Deformity">Deformity</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                
                                {selectedConcern === "Other" && (
                                    <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Please Specify</label>
                                        <input
                                            name="Other Concern Explanation"
                                            required
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400"
                                            placeholder="Briefly describe your concern"
                                        />
                                    </div>
                                )}
                                <div className="flex items-center gap-3 bg-slate-50 p-4 border border-slate-100 rounded-xl">
                                    <input type="checkbox" id="emergency" name="Emergency Consultation Needed" value="Yes" className="w-5 h-5 accent-red-500 rounded cursor-pointer" />
                                    <label htmlFor="emergency" className="text-sm font-bold text-slate-700 cursor-pointer">Emergency Consultation Needed</label>
                                </div>
                                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

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
