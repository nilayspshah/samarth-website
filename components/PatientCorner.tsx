import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Rajesh K.",
        treatment: "Flat Foot Surgery",
        text: "Dr. Samarth is incredible. I suffered from flat foot pain for years. The surgery changed my life. I can now walk and run without pain.",
    },
    {
        name: "Sneha M.",
        treatment: "Ankle Sprain Treatment",
        text: "I had a severe ankle sprain from badminton. Dr. Thakkar's treatment plan got me back on the court in no time. Highly recommended!",
    },
    {
        name: "Amit P.",
        treatment: "Diabetic Foot Care",
        text: "My father's diabetic foot ulcer was not healing for months. Dr. Samarth's expertise saved his foot. We are forever grateful.",
    }
];

export default function PatientCorner() {
    return (
        <section id="patient-corner" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading
                    title="Patient Corner"
                    subtitle="Real stories of recovery and renewed mobility from our valued patients."
                />

                {/* Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 italic relative">
                            <Quote className="absolute top-8 right-8 text-primary/20 w-10 h-10 rotate-180" />
                            <p className="text-slate-600 mb-6 relative z-10 leading-relaxed">"{t.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{t.treatment}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Gallery Preview */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4">Conferences &amp; Achievements</h3>
                    <p className="text-slate-600">Highlights from academic lectures, medical conferences, and honours in foot &amp; ankle surgery.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[520px]">
                    {/* Delivering a lecture (tall feature) */}
                    <div className="relative rounded-2xl overflow-hidden group col-span-2 md:col-span-1 md:row-span-2 h-72 md:h-auto">
                        <Image
                            src="/media/conference_photos/BOFAS_IFAS_delivering_lecture_2026.jpeg"
                            alt="Dr. Samarth Ajay Thakkar delivering a lecture at the BOFAS-IFAS Foot & Ankle Principles Course, June 2026"
                            fill
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 25vw"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                            <p className="text-white font-semibold text-sm md:text-base">Delivering a Lecture</p>
                            <p className="text-white/80 text-xs md:text-sm">BOFAS-IFAS Foot &amp; Ankle Principles Course, 2026</p>
                        </div>
                    </div>

                    {/* Course group photo (wide) */}
                    <div className="relative rounded-2xl overflow-hidden group col-span-2 md:col-span-3 h-48 md:h-auto">
                        <Image
                            src="/media/conference_photos/BOFAS_IFAS_combined_group_photo_2026.jpeg"
                            alt="Faculty and delegates at the BOFAS-IFAS Foot & Ankle Principles Course, June 2026"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 75vw"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                            <p className="text-white font-semibold text-sm md:text-base">BOFAS-IFAS Foot &amp; Ankle Course</p>
                            <p className="text-white/80 text-xs md:text-sm">Faculty &amp; delegates, June 2026</p>
                        </div>
                    </div>

                    {/* Conference presentation */}
                    <div className="relative rounded-2xl overflow-hidden group h-48 md:h-auto">
                        <Image
                            src="/media/presentation_talk.jpeg"
                            alt="Dr. Samarth Ajay Thakkar presenting research at a medical conference"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                            <p className="text-white font-semibold text-sm md:text-base">Medical Conferences</p>
                            <p className="text-white/80 text-xs md:text-sm">Presenting research to peers</p>
                        </div>
                    </div>

                    {/* Felicitation, Pune */}
                    <div className="relative rounded-2xl overflow-hidden group h-48 md:h-auto">
                        <Image
                            src="/media/conference_photos/BOFAS_IFAS_felicitation_pune_2026.jpeg"
                            alt="Dr. Samarth Ajay Thakkar being felicitated at a foot and ankle conference in Pune, 2026"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                            <p className="text-white font-semibold text-sm md:text-base">Felicitation, Pune</p>
                            <p className="text-white/80 text-xs md:text-sm">Recognised at a foot &amp; ankle conference, 2026</p>
                        </div>
                    </div>

                    {/* Awards & Recognition */}
                    <div className="relative rounded-2xl overflow-hidden group col-span-2 md:col-span-1 h-48 md:h-auto">
                        <Image
                            src="/media/feliciation.jpeg"
                            alt="Dr. Samarth Ajay Thakkar receiving an award for academic excellence"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 25vw"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                            <p className="text-white font-semibold text-sm md:text-base">Awards &amp; Recognition</p>
                            <p className="text-white/80 text-xs md:text-sm">Honoured for academic excellence</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
