import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function LocationSection() {
    return (
        <section id="contact" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading title="Visit Our Clinic" subtitle="Conveniently located to serve patients from Ghatkopar, Chembur, Tilak Nagar, and Thane." />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Details Card */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <h3 className="text-2xl font-bold font-heading text-slate-900 mb-8">Clinic Information</h3>

                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <div className="bg-primary/10 p-3.5 rounded-2xl text-primary shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2 text-lg">Address</h4>
                                    <p className="text-slate-600 leading-relaxed mb-3">
                                        DOC (Dependable Ortho Care) Clinic - Dr. Samarth Ajay Thakkar<br />
                                        B wing 201, DOC Clinic O and S Business Suites<br />
                                        Hirachand Desai Rd, Near Ghatkopar Metro Station<br />
                                        Near Sarvoday Hospital, Ghatkopar West<br />
                                        Mumbai, Maharashtra 400086
                                    </p>
                                    <a
                                        href="https://maps.app.goo.gl/wQVbKYYuDA8CaL8M8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white bg-primary hover:bg-teal-700 px-4 py-2 rounded-full text-sm font-semibold transition-colors inline-flex items-center gap-2"
                                    >
                                        <MapPin className="w-4 h-4" /> Get Directions
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="bg-primary/10 p-3.5 rounded-2xl text-primary shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2 text-lg">Phone & WhatsApp</h4>
                                    <p className="text-slate-600 mb-1">Call us for appointments:</p>
                                    <a href="tel:+919876543210" className="text-xl font-bold text-slate-900 hover:text-primary transition-colors block mb-1">
                                        +91 98765 43210
                                    </a>
                                    <p className="text-sm text-slate-500 mb-2">(Available 10:00 AM - 8:00 PM)</p>
                                    <a
                                        href="https://wa.me/919876543210"
                                        target="_blank"
                                        className="text-[#25D366] font-semibold hover:underline inline-flex items-center gap-1"
                                    >
                                        <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="bg-primary/10 p-3.5 rounded-2xl text-primary shrink-0">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2 text-lg">Timings</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        Monday - Saturday: 10:00 AM - 8:00 PM<br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Embed using iframe */}
                    <div className="h-full min-h-[500px] w-full bg-slate-200 rounded-3xl overflow-hidden shadow-sm border border-slate-100 relative grayscale-[0.2] hover:grayscale-0 transition-all duration-500">
                        <iframe
                            src="https://maps.google.com/maps?q=19.0881057,72.9077398&t=&z=17&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "500px" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Clinic Location Map"
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
