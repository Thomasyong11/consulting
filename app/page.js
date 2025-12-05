import { Button } from "@/components/ui/button";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Server, ShieldCheck, Wrench, ArrowRight } from "lucide-react";
import posts from "@/content/blog.json";

export default function Home() {
  const latestPost = posts[0];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-green-50 py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 mb-6">
            Your IT Partner
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl leading-tight">
            Practical cloud consulting for <span className="text-primary">small businesses</span> in Ontario.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
            We help small businesses move to and manage the cloud without the cost of a full-time IT team. Simple, secure, and reliable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 h-12 text-base shadow-lg hover:shadow-xl transition-all">
              <a href="#services">View Services</a>
            </Button>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-slate-200 text-slate-700 hover:bg-slate-50 font-bold px-8 h-12 text-base w-full sm:w-auto">
                Book a Free Consult
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-24 bg-white container mx-auto px-4 md:px-6">
        <SectionTitle subtitle="Core services designed for efficiency and growth." align="center">
          Our Expertise
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-slate-50 group">
            <CardContent className="p-8 flex flex-col items-center text-center h-full">
              <div className="bg-white p-4 rounded-full shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                <Server className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Cloud Migration</h3>
              <p className="text-slate-600 mb-8 flex-grow">
                Move your local systems to Google Cloud, AWS, or Azure with a clear roadmap and zero stress.
              </p>
              <Link href="/services">
                <Button variant="link" className="text-primary font-semibold p-0 h-auto group-hover:translate-x-1 transition-transform">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-slate-50 group">
            <CardContent className="p-8 flex flex-col items-center text-center h-full">
              <div className="bg-white p-4 rounded-full shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Maintenance & Support</h3>
              <p className="text-slate-600 mb-8 flex-grow">
                Regular performance checks, monitoring, and fixes to keep your business running smoothly.
              </p>
              <Link href="/services">
                <Button variant="link" className="text-secondary font-semibold p-0 h-auto group-hover:translate-x-1 transition-transform">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-slate-50 group">
            <CardContent className="p-8 flex flex-col items-center text-center h-full">
              <div className="bg-white p-4 rounded-full shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Backup & Recovery</h3>
              <p className="text-slate-600 mb-8 flex-grow">
                Automated cloud backups and disaster recovery plans to ensure your data is always safe.
              </p>
              <Link href="/services">
                <Button variant="link" className="text-accent font-semibold p-0 h-auto group-hover:translate-x-1 transition-transform">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why MEGHA */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose MEGHA?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">We understand the unique challenges of small businesses.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Small Business Focus", desc: "Tailored solutions for Ontario's entrepreneurs." },
              { title: "No Jargon", desc: "Clear explanations in plain English." },
              { title: "Flexible Support", desc: "Project-based or ongoing help when you need it." },
              { title: "Reliable Security", desc: "Enterprise-grade protection for your data." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="bg-primary/20 p-4 rounded-full mb-6 ring-1 ring-primary/50">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Highlight */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Latest Insights</h2>
              <p className="text-slate-600">Practical advice for managing your business technology.</p>
            </div>
            <Link href="/blog">
              <Button variant="outline" className="hidden md:flex">View all articles</Button>
            </Link>
          </div>

          {latestPost && (
            <Link href={`/blog/${latestPost.slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border-none shadow-md group">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="bg-slate-200 min-h-[250px] md:min-h-[350px] relative overflow-hidden">
                    {/* Abstract pattern or color block */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-primary/20 font-bold text-9xl opacity-20">BLOG</span>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="uppercase tracking-wider text-xs font-bold text-primary mb-4">Featured Post</div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors">
                      {latestPost.title}
                    </h3>
                    <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                      {latestPost.excerpt}
                    </p>
                    <span className="text-primary font-bold flex items-center">
                      Read Article <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          )}
          
          <div className="mt-8 md:hidden">
             <Link href="/blog">
              <Button variant="outline" className="w-full">View all articles</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 md:px-6 pb-24">
        <div className="bg-primary rounded-3xl p-8 md:p-20 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to simplify your IT?</h2>
            <p className="text-xl mb-10 text-white/90 font-medium">
              Book a free 30-minute discovery call. No pressure, just answers.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-bold border-none h-14 px-10 text-lg shadow-lg">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
