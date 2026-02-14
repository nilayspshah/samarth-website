import { cn } from "@/lib/utils";

export default function SectionHeading({ title, subtitle, className }: { title: string, subtitle?: string, className?: string }) {
    return (
        <div className={cn("text-center mb-12", className)}>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4 tracking-tight">{title}</h2>
            {subtitle && <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">{subtitle}</p>}
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mt-6" />
        </div>
    );
}
