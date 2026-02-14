import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { Award, GraduationCap, Globe, CheckCircle2, Stethoscope } from "lucide-react";

export default function AcademicExcellence() {
    return (
        <section id="academic" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading
                    title="About Dr. Samarth Ajay Thakkar"
                    subtitle="Combining clinical expertise with leading international training to advance the field of Foot and Ankle Surgery."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    {/* Left Column: Combined Card */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col gap-10">

                        {/* 1. International Specialized Training (USA) */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-slate-900 p-3 rounded-xl text-white">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold font-heading text-slate-900">International Specialized Training (USA)</h3>
                            </div>
                            <div className="space-y-6 pl-2">
                                <div className="border-l-4 border-slate-900 pl-6">
                                    <h4 className="font-bold text-lg text-slate-900 mb-1">Duke University, North Carolina</h4>
                                    <p className="text-slate-600">Fellowship in Foot and Ankle Surgery.</p>
                                </div>
                                <div className="border-l-4 border-slate-900 pl-6">
                                    <h4 className="font-bold text-lg text-slate-900 mb-1">Northwestern University, Chicago</h4>
                                    <p className="text-slate-600">Specialized training in Foot and Ankle Surgery.</p>
                                </div>
                                <div className="border-l-4 border-slate-900 pl-6">
                                    <h4 className="font-bold text-lg text-slate-900 mb-1">University of Washington, Seattle</h4>
                                    <p className="text-slate-600">Fellowship in Foot and Ankle Surgery.</p>
                                </div>
                            </div>
                        </div>

                        <hr className="border-slate-100" />

                        {/* 2. Clinical Expertise */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                                    <Stethoscope className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold font-heading text-slate-900">Clinical Expertise</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                                    <span className="text-slate-700">1-Year Clinical Fellowship in Foot and Ankle Surgery, Gujarat.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                                    <span className="text-slate-700">Fellowship in Diabetic Foot Surgery, Raheja Hospital, Mumbai.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                                    <span className="text-slate-700">Senior Residency, Dr. R.N. Cooper Hospital & H.B.T. Medical College, Mumbai.</span>
                                </li>
                            </ul>
                        </div>

                        <hr className="border-slate-100" />

                        {/* 3. Academic Excellence */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-secondary/10 p-3 rounded-xl text-secondary">
                                    <Award className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold font-heading text-slate-900">Academic Excellence</h3>
                            </div>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <GraduationCap className="w-6 h-6 text-secondary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Gold Medalist, M.S. Orthopedics</h4>
                                        <p className="text-slate-600">Kasturba Medical College, Mangalore.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <GraduationCap className="w-6 h-6 text-secondary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">M.B.B.S.</h4>
                                        <p className="text-slate-600">Seth G.S. Medical College and KEM Hospital, Mumbai (One of India's most prestigious institutes).</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative h-full min-h-[400px] lg:min-h-full rounded-3xl overflow-hidden shadow-xl group">
                        <Image
                            src="/media/surgery_image.jpeg"
                            alt="Dr. Samarth Ajay Thakkar performing surgery"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}
