import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative min-h-[85vh] flex items-center bg-slate-900 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-[url('/media/surgery_image.jpeg')] bg-cover bg-center opacity-30 mix-blend-overlay"
                aria-hidden="true"
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/40" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
                <div className="max-w-3xl">
                    <div className="inline-block bg-primary/20 text-primary-foreground font-semibold px-4 py-1.5 rounded-full mb-6 border border-primary/30 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                        #1 Foot & Ankle Clinic in Mumbai
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                        Restoring Mobility, <br />
                        <span className="text-primary">Renewing Lives.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
                        Expert Foot and Ankle (Podiatric) Surgeon specialized in Minimally Invasive Surgery, Ankle Replacement, and Sports Injuries. Trust your feet to Dr. Samarth Ajay Thakkar.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
                        <Link
                            href="/#appointment"
                            className="bg-primary hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-primary/25 transition-all text-center flex items-center justify-center"
                        >
                            Book an Appointment
                        </Link>
                        <Link
                            href="/#treatments"
                            className="bg-transparent border border-slate-600 hover:border-white text-white hover:bg-white/5 font-semibold py-4 px-8 rounded-full transition-all text-center flex items-center justify-center"
                        >
                            Explore Treatments
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce hidden md:block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
