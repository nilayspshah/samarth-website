import { treatments } from "@/lib/treatments";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Phone, MessageCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

// Generate static params for all treatments
export async function generateStaticParams() {
    return treatments.map((t) => ({
        slug: t.slug,
    }));
}

// Generate metadata for each treatment page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = (await params);
    const treatment = treatments.find((t) => t.slug === slug);
    if (!treatment) return {};

    return {
        title: `${treatment.title} | Dr. Samarth Ajay Thakkar`,
        description: treatment.description,
    };
}

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = (await params);
    const treatment = treatments.find((t) => t.slug === slug);

    if (!treatment) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 pb-20">
            {/* Hero/Header */}
            <div className="bg-slate-900 text-white pt-12 pb-24 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 pt-10">
                    {/* Back Link */}
                    <Link href="/#treatments" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm font-medium hover:-translate-x-1 duration-200">
                        <ArrowLeft className="w-4 h-4" /> Back to Treatments
                    </Link>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg shrink-0">
                            <treatment.icon className="w-12 h-12 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4 leading-tight">{treatment.title}</h1>
                            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">{treatment.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col lg:flex-row gap-12 -mt-16">
                {/* Main Content */}
                <div className="lg:w-2/3 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 relative z-10">
                    <div
                        className="prose prose-lg prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-slate-900 prose-ul:list-disc prose-ul:pl-5 marker:text-primary"
                        dangerouslySetInnerHTML={{ __html: treatment.content }}
                    />
                </div>

                {/* Sidebar */}
                <div className="lg:w-1/3 space-y-6 pt-8 lg:pt-0">
                    {/* CTA Card */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-primary/20 sticky top-24">
                        <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">Need Expert Advice?</h3>
                        <p className="text-slate-600 mb-6 text-sm">
                            Dr. Samarth Ajay Thakkar specializes in treating {treatment.title.toLowerCase()}. Book your consultation today.
                        </p>

                        <div className="space-y-3">
                            <a href="tel:+919876543210" className="flex items-center justify-center gap-2 bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 transition-all shadow-md hover:shadow-lg w-full">
                                <Phone className="w-4 h-4" /> Call Now
                            </a>
                            <a href="https://wa.me/919876543210" target="_blank" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 rounded-xl hover:bg-[#128C7E] transition-all shadow-md hover:shadow-lg w-full">
                                <MessageCircle className="w-5 h-5" /> WhatsApp
                            </a>
                        </div>
                        <p className="text-xs text-center text-slate-400 mt-4">
                            Available 10 AM - 8 PM
                        </p>
                    </div>

                    {/* Other treatments link */}
                    <div className="bg-slate-100 p-6 rounded-3xl text-center">
                        <h4 className="font-bold text-slate-900 mb-2">Explore Other Services</h4>
                        <Link href="/#treatments" className="text-primary font-medium hover:underline text-sm">
                            View All Treatments
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
