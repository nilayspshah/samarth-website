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
                    <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4">Clinic Gallery</h3>
                    <p className="text-slate-600">Glimpses of our achievements and patient care.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px]">
                    <div className="relative rounded-2xl overflow-hidden group h-full">
                        <Image
                            src="/media/feliciation.jpeg"
                            alt="Dr. Samarth Ajay Thakkar Felicitation"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6">
                            <p className="text-white font-medium">Awards & Recognition</p>
                        </div>
                    </div>
                    <div className="grid grid-rows-2 gap-4 h-full">
                        <div className="relative rounded-2xl overflow-hidden group h-full">
                            <Image
                                src="/media/presentation_talk.jpeg"
                                alt="Conference Presentation"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6">
                                <p className="text-white font-medium">Medical Conferences</p>
                            </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden group h-full bg-slate-100 flex items-center justify-center">
                            <p className="text-slate-400 font-medium">More images coming soon...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
