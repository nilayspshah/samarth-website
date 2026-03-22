import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const opdHospitals = [
    {
        name: "DOC (Dependable Ortho Care)",
        location: "Ghatkopar West",
        href: "tel:+917710039780",
        logo: "/media/DOC_Logo.png",
        website: "/", // Self link
        isPrimary: true,
        scale: 2.5
    },
    {
        name: "Zynova Works Hospital",
        location: "Ghatkopar West",
        href: "tel:02268900000",
        logo: "/media/hospital_logos/zynova_shalby_logo.png",
        website: "https://zynovashalbyhospital.com/",
        scale: 1.5
    },
    {
        name: "Zen Multi Speciality",
        location: "Chembur",
        href: "tel:+918691010383",
        logo: "/media/hospital_logos/Zen-hospital-logo.png",
        website: "https://zenhospital.in/"
    },
    {
        name: "Pinnacle Orthocare",
        location: "Thane West",
        href: "tel:+912240763001",
        logo: "/media/hospital_logos/pinnacle_orthocare_logo.jpg",
        website: "https://pinnacleorthocentre.org/"
    },
    {
        name: "Coras Hospital",
        location: "Guwahati",
        href: "tel:7896767426",
        logo: "/media/hospital_logos/coras_hospital_logo.jpeg",
        website: "https://corashospital.com/"
    }
];

const affiliatedHospitals = [
    {
        name: "Criticare Asia",
        location: "Kurla West",
        href: "",
        logo: "/media/hospital_logos/criticare_asia.svg",
        website: "https://criticareasiahospital.com/"
    },
    {
        name: "Sushrut Hospital",
        location: "Chembur",
        href: "",
        logo: "/media/hospital_logos/sushrut_logo.png",
        website: "https://sushruthospital.org/"
    },
    {
        name: "SRV Hospital",
        location: "Chembur",
        href: "",
        logo: "/media/hospital_logos/srv_hospital_logo.png",
        website: "https://srvhospitals.com/"
    },
    {
        name: "Parakh Hospital",
        location: "Ghatkopar East",
        href: "",
        logo: "/media/hospital_logos/Parakh-Hospital-Logo-300x96.png",
        website: "https://parakhhospital.com/"
    },
    {
        name: "Ashirwad Hospital",
        location: "Ambernath",
        href: "",
        logo: "",
        website: ""
    },
    {
        name: "Adi Arogyam Superspeciality Hospital",
        location: "Vikhroli East",
        href: "",
        logo: "/media/hospital_logos/adi_arogyam_logo.jpg",
        website: "https://adiarogyamsuperspecialityhospital.org/"
    }
];

function HospitalCard({ hospital }: { hospital: any }) {
    return (
        <div
            className={cn(
                "bg-white p-6 rounded-2xl shadow-sm border transition-all group flex flex-col items-center text-center duration-300 relative overflow-hidden",
                hospital.isPrimary
                    ? "border-primary shadow-md ring-1 ring-primary/20 scale-[1.02]"
                    : "border-slate-100 hover:shadow-lg hover:border-primary/20"
            )}
        >
            {hospital.isPrimary && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-xl shadow-sm z-10">
                    Primary Clinic
                </div>
            )}

            <div className={cn(
                "h-32 w-full rounded-2xl flex items-center justify-center mb-6 transition-colors relative bg-white",
                hospital.isPrimary ? "" : ""
            )}>
                {hospital.logo ? (
                    <Image
                        src={hospital.logo}
                        alt={`${hospital.name} Logo`}
                        fill
                        className="object-contain px-2"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ transform: `scale(${hospital.scale || 1})` }}
                    />
                ) : (
                    <Building2 className={cn(
                        "w-8 h-8 transition-colors",
                        hospital.isPrimary ? "text-primary" : "text-slate-400 group-hover:text-primary"
                    )} />
                )}
            </div>

            <h3 className="font-bold text-slate-900 mb-1 line-clamp-2 min-h-[3rem] items-center flex">{hospital.name}</h3>
            <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>{hospital.location}</span>
            </div>

            <div className="w-full space-y-2 mt-auto">
                {hospital.href && (
                    <a
                        href={hospital.href}
                        target={hospital.href.startsWith('http') ? '_blank' : undefined}
                        rel={hospital.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={cn(
                            "text-xs font-bold py-2 px-4 rounded-full transition-all w-full flex items-center justify-center gap-2",
                            hospital.isPrimary
                                ? "bg-primary text-white hover:bg-teal-700 shadow-sm"
                                : "text-slate-700 bg-slate-100 hover:bg-slate-200"
                        )}
                    >
                        <Calendar className="w-3.5 h-3.5" /> Book Appointment
                    </a>
                )}

                {hospital.website && (
                    <a
                        href={hospital.website}
                        target={hospital.website.startsWith('http') ? '_blank' : undefined}
                        rel={hospital.website.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-xs font-bold py-2 px-4 rounded-full transition-all w-full flex items-center justify-center gap-2 border border-slate-200 text-slate-600 hover:border-primary hover:text-primary bg-white hover:bg-slate-50"
                    >
                        <ExternalLink className="w-3.5 h-3.5" /> Visit Website
                    </a>
                )}
            </div>
        </div>
    );
}

export default function HospitalAffiliations() {
    return (
        <section id="hospitals" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading
                    title="Hospital Affiliations"
                    subtitle="Dr. Samarth Ajay Thakkar is associated with leading hospitals across Mumbai ensuring convenient access to world-class care."
                />

                <div className="mb-16">
                    <h3 className="text-2xl font-bold font-heading text-slate-900 mb-8 pb-4 border-b border-slate-200 flex items-center gap-3">
                        <span className="bg-primary/10 text-primary p-2 rounded-lg">
                            <Calendar className="w-6 h-6" />
                        </span>
                        OPD Consultation
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {opdHospitals.map((hospital, index) => (
                            <HospitalCard key={`opd-${index}`} hospital={hospital} />
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold font-heading text-slate-900 mb-8 pb-4 border-b border-slate-200 flex items-center gap-3">
                        <span className="bg-slate-200 text-slate-600 p-2 rounded-lg">
                            <Building2 className="w-6 h-6" />
                        </span>
                        Affiliations
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {affiliatedHospitals.map((hospital, index) => (
                            <HospitalCard key={`affil-${index}`} hospital={hospital} />
                        ))}

                        <div
                            className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 hover:shadow-lg transition-all group flex flex-col items-center text-center justify-center min-h-[14rem]"
                        >
                            <h3 className="font-bold text-white mb-2 text-lg">Need Assistance?</h3>
                            <p className="text-slate-400 text-sm mb-4">Find the nearest clinic to you.</p>

                            <Link
                                href="/#contact"
                                className="text-slate-900 bg-white hover:bg-slate-200 py-2 px-6 rounded-full transition-all font-bold text-sm w-full"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
