import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 text-sm">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & About */}
                    <div>
                        <Link href="/" className="font-heading font-bold text-2xl text-white tracking-tight mb-4 block">
                            DOC <span className="text-secondary-foreground">Foot & Ankle</span>
                        </Link>
                        <p className="mb-6 leading-relaxed text-slate-400">
                            Dr. Samarth Ajay Thakkar's clinic is dedicated to providing world-class care for all foot and ankle conditions using advanced surgical and non-surgical techniques.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/#about" className="hover:text-primary transition-colors">About Dr. Samarth Ajay</Link></li>
                            <li><Link href="/#hospitals" className="hover:text-primary transition-colors">Hospital Affiliations</Link></li>
                            <li><Link href="/#patient-corner" className="hover:text-primary transition-colors">Patient Corner</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            <li><Link href="/treatments/flat-foot-surgery-mumbai" className="hover:text-primary transition-colors">Flat Foot Surgery</Link></li>
                            <li><Link href="/treatments/ankle-replacement-mumbai" className="hover:text-primary transition-colors">Ankle Replacement</Link></li>
                            <li><Link href="/treatments/diabetic-foot-care-mumbai" className="hover:text-primary transition-colors">Diabetic Foot Care</Link></li>
                            <li><Link href="/treatments/sports-injuries-mumbai" className="hover:text-primary transition-colors">Sports Injuries</Link></li>
                            <li><Link href="/treatments/heel-pain-mumbai" className="hover:text-primary transition-colors">Heel Pain Treatment</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Map */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4 mb-6">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span>
                                    DOC (Dependable Ortho Care) Clinic <br />
                                    B wing 201, DOC Clinic O and S Business Suites <br />
                                    Hirachand Desai Rd, Ghatkopar West<br />
                                    Mumbai, Maharashtra 400086
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <a href="mailto:contact@docfootandankle.com" className="hover:text-white transition-colors">contact@docfootandankle.com</a>
                            </li>
                        </ul>
                        <a
                            href="https://maps.app.goo.gl/wQVbKYYuDA8CaL8M8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-white text-sm font-medium underline underline-offset-4 flex items-center gap-2"
                        >
                            <MapPin className="w-4 h-4" /> View Location on Google Maps
                        </a>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} DOC Foot and Ankle. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
