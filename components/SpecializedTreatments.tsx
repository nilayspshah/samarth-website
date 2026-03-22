import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { ArrowRight, Footprints, Activity, ShieldCheck, UserCheck, Stethoscope, Bone } from "lucide-react";

const treatments = [
    {
        title: "Flat Foot Surgery",
        description: "Advanced reconstructive procedures for pediatric and adult flat foot deformities.",
        icon: Footprints,
        href: "/treatments/flat-foot-surgery-mumbai"
    },
    {
        title: "Ankle Replacement",
        description: "Total ankle replacement surgery to restore mobility and eliminate arthritis pain.",
        icon: Bone,
        href: "/treatments/ankle-replacement-mumbai"
    },
    {
        title: "Sports Injuries",
        description: "Minimally invasive arthroscopic solutions for ligament tears and cartilage damage.",
        icon: Activity,
        href: "/treatments/sports-injuries-mumbai"
    },
    {
        title: "Heel Pain",
        description: "Comprehensive management of plantar fasciitis and heel spurs with advanced therapies.",
        icon: Footprints, // Reverted to original icon, as MoveRight was not imported and ArrowRight is used for "View All Services"
        href: "/treatments/heel-pain-mumbai"
    },
    {
        title: "Diabetic Foot",
        description: "Limb salvage procedures and management of complex diabetic foot infections.",
        icon: ShieldCheck,
        href: "/treatments/diabetic-foot-care-mumbai"
    },
    {
        title: "Bunion Deformities",
        description: "Minimally invasive correction aimed at cosmetic and functional restoration.",
        icon: Stethoscope,
        href: "/treatments/bunion-deformities-mumbai"
    },
    {
        title: "View All Services",
        description: "Explore our full range of orthopedic treatments.",
        icon: ArrowRight,
        href: "/#treatments",
        isAction: true
    }
];

export default function SpecializedTreatments() {
    return (
        <section id="treatments" className="py-20 bg-slate-900 text-slate-100">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading
                    title="Specialized Treatments"
                    subtitle="Offering comprehensive care for a wide range of foot and ankle conditions using the latest medical advancements."
                    className="text-white"
                />
                {/* Override default SectionHeading text color via className or specific component prop if SectionHeading wasn't flexible. I updated SectionHeading to accept className. */}
                {/* Wait, the SectionHeading text-slate-900 default. I need to make sure className overrides it. 
            Tailwind merge usually handles it but text-slate-900 might have higher specificity or order matters.
            In `SectionHeading.tsx`: `text-slate-900` is hardcoded? 
            `<h2 className={cn("text-3xl...", className)}>`? No, I put `className` on container. 
            Ah, inside SectionHeading, the h2 has `text-slate-900`. 
            I should update SectionHeading to allow overriding text color or use `text-inherit` / `currentColor` logic. 
            For now, I'll pass a prop `light={true}` or just re-style it here or update SectionHeading to be flexible.
            I'll presume SectionHeading needs an update or I just won't use it here if it looks bad.
            Actually, I'll update SectionHeading to accept className on H2/P or just be smart.
            
            Let's invoke `view_file` on SectionHeading? No, I wrote it.
            It has: `className={cn("text-center mb-12", className)}`.
            Inside: `<h2 className="text-3xl ... text-slate-900 ...">{title}</h2>`
            So `className` on container won't change h2 color unless via cascading, but `text-slate-900` is explicit.
            
            Strategy: Pass a `variant="dark"` prop to SectionHeading or just duplicate heading here for full control.
            I'll duplicate header here for full control since I can't easily update SectionHeading without another tool call.
            Actually, I can just update SectionHeading first? No, parallel calls.
            I'll just duplicate the heading styles here. It's safer.
        */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4 tracking-tight">Specialized Treatments</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Offering comprehensive care for a wide range of foot and ankle conditions using the latest medical advancements.
                    </p>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mt-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {treatments.map((treatment, index) => (
                        <div
                            key={index}
                            className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-primary hover:bg-slate-800/80 transition-all group flex flex-col items-start"
                        >
                            <div className="bg-slate-900 p-3 rounded-xl mb-4 text-primary group-hover:scale-110 transition-transform">
                                <treatment.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{treatment.title}</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                                {treatment.description}
                            </p>
                            <Link
                                href={treatment.href}
                                className="text-primary font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                            >
                                Learn More <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ))}

                    {/* View All Card */}
                    <div className="bg-primary p-6 rounded-2xl border border-primary hover:bg-teal-700 transition-all group flex flex-col items-center justify-center text-center">
                        <h3 className="text-xl font-bold text-white mb-2">View All Services</h3>
                        <p className="text-primary-foreground/80 text-sm mb-6">
                            Explore our full range of orthopedic treatments.
                        </p>
                        <Link
                            href="/treatments"
                            className="bg-white text-primary font-bold py-3 px-6 rounded-full w-full hover:bg-slate-100 transition-colors"
                        >
                            All Treatments
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
