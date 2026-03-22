"use client";

import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { Award, GraduationCap, Globe, CheckCircle2, Stethoscope, FileText, ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import { useState } from "react";

export default function AcademicExcellence() {
    const [isExpanded, setIsExpanded] = useState(false);

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
                                <h3 className="text-xl font-bold font-heading text-slate-900">Clinical Experience and Fellowships (8+ Years)</h3>
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

                        <hr className="border-slate-100" />

                        {/* 4. Key Awards & Highlights */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
                                    <Award className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold font-heading text-slate-900">Key Awards & Highlights</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                                    <span className="text-slate-700"><strong>Prestigious Awards:</strong> Masalawala Best Paper Award (WIROC 2025) - Total talus replacement, and Best Case Presentation (GFAS 2026) - Peritalar dislocation with calcaneus fracture.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                                    <span className="text-slate-700"><strong>Book Authorship:</strong> Author of the "Manual for Practical Exam Preparation" for undergraduate medical students.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                                    <span className="text-slate-700"><strong>Specialized Observerships:</strong> Awarded the esteemed COS Observership in Hand Surgery at Ganga Hospital, Coimbatore (2023).</span>
                                </li>
                            </ul>
                        </div>

                        <hr className="border-slate-100" />

                        {/* 5. Research & Publications */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold font-heading text-slate-900">Research & Publications</h3>
                            </div>
                            
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                    <span className="text-slate-700"><strong>Thakkar, S.</strong>, Rao, S., Hegde, A., Mane, P., Khanna, V., & Shetty, C. (2021). Comparison of scapular morphology in degenerative and traumatic rotator cuff tears. <em>Journal of Musculoskeletal Research</em>.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                    <span className="text-slate-700"><strong>Thakkar, S.</strong>, Hegde, A., Mane, P., Shetty, C., & Tripathi, A. (2023). A rare case of complete sequestration of the patella: An unusual presentation of patellar tuberculosis. <em>Infectious Diseases in Clinical Practice</em>.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                    <span className="text-slate-700">Hegde, A. S., Mane, P. P., Shetty, C. B., & <strong>Thakkar, S. A.</strong> (2021). "Screw First" Technique to Get Past Nail-Jig Mismatch in Proximal Femoral Nailing. <em>Indian Journal of Orthopaedics</em>.</span>
                                </li>
                            </ul>

                            {isExpanded && (
                                <ul className="space-y-4 mt-4 animate-in fade-in slide-in-from-top-4 duration-500">
                                    <li className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                        <span className="text-slate-700">Hegde, A. S., Shetty, C. B., Joseph, N., Mane, P., & <strong>Thakkar, S.</strong> (2023). Preoperative estimation of humerus intramedullary nail length using clinical landmarks. <em>Chinese Journal of Traumatology</em>.</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                        <span className="text-slate-700">Hegde, A., Mane, P. P., Shetty, C. B., & <strong>Thakkar, S. A.</strong> (2022). Neurogenic heterotopic ossificans of hips in a case of expanded dengue syndrome... <em>BMJ Case Reports</em>.</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                        <span className="text-slate-700">Goel, S., ... <strong>Thakkar, S.</strong>, et al. (2021). Cross-sectional assessment of cardiovascular risk factors in patients with knee osteoarthritis. <em>F1000Research</em>.</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                        <span className="text-slate-700">Agrawal, S., ... <strong>Thakkar, S.</strong>, et al. (2023). Peroneus longus tendon autograft for primary arthroscopic reconstruction of the Anterior Cruciate Ligament. <em>Muscle Ligaments and Tendons Journal</em>.</span>
                                    </li>
                                </ul>
                            )}

                            <button 
                                onClick={() => setIsExpanded(!isExpanded)} 
                                className="mt-6 flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                            >
                                {isExpanded ? (
                                    <><ChevronUp className="w-4 h-4" /> Show Less</>
                                ) : (
                                    <><ChevronDown className="w-4 h-4" /> View All 7 Publications</>
                                )}
                            </button>
                        </div>

                        {/* CV Download Button */}
                        <div className="mt-4 flex justify-center lg:justify-start">
                            <a
                                href="/media/CV Samarth_March 2026.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white border-2 border-slate-200 hover:border-primary text-slate-700 hover:text-primary font-semibold py-3.5 px-8 rounded-full transition-all text-center flex items-center justify-center gap-2 hover:bg-slate-50"
                            >
                                <FileText className="w-5 h-5" /> Download Full CV
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative h-full min-h-[400px] lg:min-h-full rounded-3xl overflow-hidden shadow-xl group">
                        <Image
                            src="/media/samarth_ladakh.jpeg"
                            alt="Dr. Samarth Ajay Thakkar"
                            fill
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}
