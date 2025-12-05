import SectionTitle from "@/components/SectionTitle";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Server, Wrench, ShieldCheck, Check, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Cloud Migration & Optimization",
      icon: <Server className="h-12 w-12 text-primary" />,
      description: "Helping small businesses move from older or local systems to modern cloud platforms like Google Cloud, AWS, or Microsoft Azure.",
      forWho: "Businesses ready to modernize or reduce reliance on physical hardware.",
      included: [
        "Assessment of existing workloads",
        "Migration strategy and roadmap",
        "Secure execution of migration",
        "Cost and performance optimization"
      ],
      deliverable: "A clear migration roadmap and post-migration performance report."
    },
    {
      title: "Cloud Maintenance & Support",
      icon: <Wrench className="h-12 w-12 text-secondary" />,
      description: "A short-term 'mini project' for businesses that cannot afford a full-time IT staff but need reliable systems.",
      forWho: "Owners who want peace of mind without a salary overhead.",
      included: [
        "Regular performance monitoring",
        "Security patch management",
        "Troubleshooting and bug fixes",
        "User access management"
      ],
      deliverable: "Monthly summary of maintenance activities and key performance indicators."
    },
    {
      title: "Data Backup & Disaster Recovery",
      icon: <ShieldCheck className="h-12 w-12 text-accent" />,
      description: "Setting up automated cloud-based backups and robust recovery plans so your important business data is never lost.",
      forWho: "Any business that stores customer data or critical records.",
      included: [
        "Backup strategy design",
        "Automated configuration setup",
        "Recovery plan documentation",
        "Restoration testing"
      ],
      deliverable: "Fully configured backup setup plus a successful recovery test report."
    }
  ];

  return (
    <div className="py-20 md:py-28 container mx-auto px-4 md:px-6">
      <SectionTitle align="center" subtitle="Comprehensive cloud solutions tailored for your needs.">
        Our Services
      </SectionTitle>

      <div className="grid gap-16 mt-16">
        {services.map((service, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white">
            <div className="grid md:grid-cols-12 gap-0">
              <div className="md:col-span-4 bg-slate-50 p-10 flex flex-col items-center justify-center text-center border-r border-slate-100">
                <div className="bg-white p-6 rounded-full shadow-sm mb-6 ring-1 ring-slate-100">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold mb-3 text-slate-900">{service.title}</CardTitle>
              </div>
              <div className="md:col-span-8 p-10">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">What it is</h4>
                    <p className="text-xl text-slate-700 leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Who it's for</h4>
                      <p className="text-sm text-slate-600">{service.forWho}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Deliverable</h4>
                      <p className="text-sm font-bold text-primary flex items-center">
                        <Check className="h-4 w-4 mr-2" />
                        {service.deliverable}
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-xl">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">What's included</h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {service.included.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                          <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-32 max-w-3xl mx-auto">
        <SectionTitle align="center" className="mb-12">Frequently Asked Questions</SectionTitle>
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border rounded-lg px-4 shadow-sm bg-white">
            <AccordionTrigger className="text-lg font-medium hover:text-primary py-4">Do I need to already use the cloud?</AccordionTrigger>
            <AccordionContent className="text-slate-600 pb-4">
              No, not at all! We specialize in helping businesses make their first move to the cloud. We'll assess your current setup and guide you through the entire process.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border rounded-lg px-4 shadow-sm bg-white">
            <AccordionTrigger className="text-lg font-medium hover:text-primary py-4">Can you work remotely?</AccordionTrigger>
            <AccordionContent className="text-slate-600 pb-4">
              Yes, 100%. Cloud consulting is perfectly suited for remote work. We can manage, monitor, and migrate your systems securely without ever needing to step foot in your office.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border rounded-lg px-4 shadow-sm bg-white">
            <AccordionTrigger className="text-lg font-medium hover:text-primary py-4">How long does a migration take?</AccordionTrigger>
            <AccordionContent className="text-slate-600 pb-4">
              It depends on the complexity of your data and systems. A simple migration might take a few weeks, while larger projects can take a couple of months. We'll provide a clear timeline during our initial assessment.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border rounded-lg px-4 shadow-sm bg-white">
            <AccordionTrigger className="text-lg font-medium hover:text-primary py-4">Is my data safe during the process?</AccordionTrigger>
            <AccordionContent className="text-slate-600 pb-4">
              Security is our top priority. We use industry-standard encryption and secure transfer protocols to ensure your data remains protected at every stage of the project.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mt-32 text-center bg-slate-900 text-white rounded-3xl p-16 shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to talk?</h2>
        <p className="text-slate-300 mb-10 max-w-xl mx-auto text-lg">
          Let's discuss how we can help your business grow with the right technology.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 h-14 px-10 text-lg font-bold shadow-lg shadow-primary/20">
            Book a Consultation
          </Button>
        </Link>
      </div>
    </div>
  );
}
