import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Calendar } from "lucide-react";

const articles = [
    {
        title: "Understanding Flat Foot in Children & Adults",
        excerpt: "Learn about the causes, symptoms, and modern treatment options for flat foot deformities.",
        date: "Oct 12, 2025",
        category: "Patient Education",
        image: "/media/surgery_image.jpeg",
        slug: "understanding-flat-foot"
    },
    {
        title: "5 Signs You Might Need Ankle Replacement",
        excerpt: "Is ankle pain limiting your life? Discover if total ankle replacement is the right choice for you.",
        date: "Sep 28, 2025",
        category: "Surgery Insights",
        image: "/media/presentation_talk.jpeg",
        slug: "ankle-replacement-signs"
    },
    {
        title: "Preventing Sports Injuries: A Comprehensive Guide",
        excerpt: "Expert tips on how to protect your ankles and feet during high-impact sports activities.",
        date: "Sep 15, 2025",
        category: "Wellness",
        image: "/media/group.jpeg",
        slug: "preventing-sports-injuries"
    },
];

export default function BlogPreview() {
    return (
        <section id="blog" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading
                    title="Latest from the Expert"
                    subtitle="Stay informed with the latest updates, medical insights, and foot care tips from Dr. Samarth Ajay Thakkar."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all group flex flex-col h-full">
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                                    {article.category}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-3">
                                    <Calendar className="w-3.5 h-3.5" />
                                    <span>{article.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    {article.title}
                                </h3>
                                <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow">
                                    {article.excerpt}
                                </p>
                                <Link
                                    href={`/blog/${article.slug}`}
                                    className="text-slate-900 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all mt-auto group-hover:text-primary"
                                >
                                    Read Full Article <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-slate-600 hover:text-primary font-medium border-b border-slate-300 hover:border-primary pb-0.5 transition-all"
                    >
                        View All Articles <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
