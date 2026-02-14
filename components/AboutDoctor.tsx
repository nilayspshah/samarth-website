import Image from "next/image";
import Link from "next/link";
import { FileText, Award, Stethoscope } from "lucide-react";

export default function AboutDoctor() {
    return (
        <section id="about" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Column */}
                    <div className="relative mx-auto w-full max-w-md lg:max-w-full">
                        <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/media/surgery_image.jpeg"
                                alt="Dr. Samarth Ajay Thakkar performing surgery"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        {/* Experience Badge */}
                        <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs animate-in slide-in-from-bottom-8 duration-700 delay-300 hidden md:flex items-center gap-4 z-10 border border-slate-50">
                            <div className="bg-primary/10 p-3 rounded-full text-primary">
                                <Award className="w-8 h-8" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Experience</p>
                                <p className="text-2xl font-bold text-slate-900">10+ Years</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:pl-10">
                        <div className="inline-block bg-primary/10 text-primary font-semibold px-4 py-1.5 rounded-full mb-4 text-sm">
                            Meet the Expert
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-6 leading-tight">
                            Dr. Samarth Ajay Thakkar <br />
                            <span className="text-slate-500 text-2xl font-medium block mt-2">Consultant Foot and Ankle (Podiatric) Surgeon</span>
                        </h2>
                        <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                            Dr. Samarth Ajay Thakkar is a leading authority in foot and ankle surgery, dedicated to restoring mobility and improving the quality of life for his patients. With specialized training and extensive experience, he offers advanced treatments for complex foot deformities, sports injuries, and diabetic foot conditions.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-slate-100 p-2 rounded-lg text-primary mt-1">
                                    <Stethoscope className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Advanced Care</h4>
                                    <p className="text-sm text-slate-500">Minimally invasive techniques for faster recovery.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-slate-100 p-2 rounded-lg text-primary mt-1">
                                    <Award className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Recognized Expert</h4>
                                    <p className="text-sm text-slate-500">Award-winning researcher and speaker.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/#contact"
                                className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-8 rounded-full shadow-lg transition-all text-center hover:scale-105 active:scale-95 duration-200"
                            >
                                Book Consultation
                            </Link>
                            <a
                                href="/media/CV Samarth december 2025.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white border-2 border-slate-200 hover:border-primary text-slate-700 hover:text-primary font-semibold py-3.5 px-8 rounded-full transition-all text-center flex items-center justify-center gap-2 hover:bg-slate-50"
                            >
                                <FileText className="w-4 h-4" /> Download Full CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
