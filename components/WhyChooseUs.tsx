import SectionHeading from "@/components/SectionHeading";
import { Microscope, Clock, UserCheck, ShieldCheck } from "lucide-react";

// Features: Advanced Technology, Patient-Centric, Quick Recovery, Proven Results
const features = [
    {
        title: "Advanced Tech",
        description: "Utilizing latest diagnostic and surgical equipment for precision outcomes.",
        icon: Microscope
    },
    {
        title: "Minimally Invasive",
        description: "Focus on key-hole surgeries for faster healing, less pain, and minimal scarring.",
        icon: ShieldCheck
    },
    {
        title: "Patient-Centric",
        description: "Personalized treatment plans tailored to your specific lifestyle and goals.",
        icon: UserCheck
    },
    {
        title: "Proven Results",
        description: "High success rates in complex foot and ankle reconstructions and surgeries.",
        icon: Clock
    }
];

export default function WhyChooseUs() {
    return (
        <section id="why-us" className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4 tracking-tight">Why Choose Us?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        We combine medical expertise with compassionate care to get you back on your feet.
                    </p>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mt-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:bg-slate-800 transition-all text-center group"
                        >
                            <div className="bg-primary/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
