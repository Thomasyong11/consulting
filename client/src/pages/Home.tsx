import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { CheckCircle2, Server, ShieldCheck, Wrench } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_modern_cloud_technology_background_for_hero_section.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-muted py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <img 
                src={heroBg} 
                alt="Abstract Cloud Background" 
                className="w-full h-full object-cover"
            />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-6 max-w-4xl">
            Practical cloud consulting for small businesses in Ontario.
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            We help small businesses move to and manage the cloud without the cost of a full-time IT team. Simple, secure, and reliable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8">
              <a href="#services">View Services</a>
            </Button>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 font-semibold px-8 w-full">
                Book a Free Consult
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="container mx-auto px-4 md:px-6">
        <SectionTitle subtitle="Core services designed for efficiency and growth." align="center">
          Our Expertise
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            title="Cloud Migration"
            description="Move your local systems to Google Cloud, AWS, or Azure with a clear roadmap and zero stress."
            icon={<Server className="h-10 w-10 text-primary" />}
          />
          <ServiceCard
            title="Maintenance & Support"
            description="Regular performance checks, monitoring, and fixes to keep your business running smoothly."
            icon={<Wrench className="h-10 w-10 text-primary" />}
          />
          <ServiceCard
            title="Backup & Recovery"
            description="Automated cloud backups and disaster recovery plans to ensure your data is always safe."
            icon={<ShieldCheck className="h-10 w-10 text-primary" />}
          />
        </div>
      </section>

      {/* Why MEGHA */}
      <section className="bg-primary/5 py-16 border-t-4 border-primary">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle align="center">Why Choose MEGHA?</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {[
              { title: "Small Business Focus", desc: "Tailored solutions for Ontario's entrepreneurs." },
              { title: "No Jargon", desc: "Clear explanations in plain English." },
              { title: "Flexible Support", desc: "Project-based or ongoing help when you need it." },
              { title: "Reliable Security", desc: "Enterprise-grade protection for your data." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full shadow-sm mb-4 border-2 border-primary/30">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="bg-primary rounded-2xl p-8 md:p-16 text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">Ready to simplify your IT?</h2>
            <p className="text-lg mb-8 text-white/95 max-w-2xl mx-auto drop-shadow">
              Book a free 30-minute discovery call. No pressure, just answers.
            </p>
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold border-none">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
