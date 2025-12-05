import { useRoute, Link } from "wouter";
import posts from "@/content/blog.json";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import NotFound from "./not-found";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="py-20 container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Button>
        </Link>

        <div className="mb-10">
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Cloud Tips</span>
            <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> Today</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-primary pl-6 italic">
            {post.excerpt}
          </p>
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          {post.content.map((block, index) => {
            if (block.startsWith("## ")) {
              return <h2 key={index} className="text-2xl font-bold text-slate-900 mt-12 mb-6">{block.replace("## ", "")}</h2>;
            }
            return <p key={index} className="mb-6 text-slate-700 leading-relaxed">{block}</p>;
          })}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-bold text-slate-900">Written by MEGHA Cloud Consulting</p>
            <p className="text-sm text-slate-500">Practical advice for small businesses.</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Share2 className="h-4 w-4" /> Share Article
          </Button>
        </div>

        <div className="mt-16 bg-slate-50 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Need help with this?</h3>
          <p className="text-slate-600 mb-6">
            We can help you implement these strategies in your business.
          </p>
          <Link href="/contact">
            <Button className="bg-primary text-white hover:bg-primary/90">Book a Free Consult</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
