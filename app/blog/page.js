import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import posts from "@/content/blog.json";

export default function Blog() {
  return (
    <div className="py-20 md:py-28 container mx-auto px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <SectionTitle align="center" subtitle="Practical advice, guides, and news for small business owners in Ontario.">
          Cloud Insights
        </SectionTitle>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <Link key={index} href={`/blog/${post.slug}`}>
            <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer border-none shadow-md bg-white group overflow-hidden flex flex-col">
              <div className="h-48 bg-slate-100 relative overflow-hidden">
                {/* Placeholder abstract pattern */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-100"></div>
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -mr-10 -mt-10 ${
                    index % 3 === 0 ? 'bg-primary/30' : index % 3 === 1 ? 'bg-secondary/30' : 'bg-accent/30'
                  }`}>
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-medium uppercase tracking-wider">
                  <Calendar className="h-3 w-3" />
                  <span>Article</span>
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-primary font-bold text-sm mt-auto">
                  Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
