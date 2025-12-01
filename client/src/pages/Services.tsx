import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Server, Wrench, ShieldCheck, Check } from "lucide-react";

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
    <div className="py-16 container mx-auto px-4 md:px-6">
      <SectionTitle align="center" subtitle="Comprehensive cloud solutions tailored for your needs.">
        Our Services
      </SectionTitle>

      <div className="grid gap-12 mt-12">
        {services.map((service, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
            <div className="grid md:grid-cols-12 gap-0">
              <div className="md:col-span-4 bg-muted p-8 flex flex-col items-center justify-center text-center border-r border-border/50">
                <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold mb-2">{service.title}</CardTitle>
              </div>
              <div className="md:col-span-8 p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-2">What it is</h4>
                    <p className="text-lg">{service.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-2">Who it's for</h4>
                      <p className="text-sm">{service.forWho}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-2">Deliverable</h4>
                      <p className="text-sm font-medium text-primary">{service.deliverable}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">What's included</h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {service.included.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-accent mt-1 shrink-0" />
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

      <div className="mt-24 max-w-3xl mx-auto">
        <SectionTitle align="center" className="mb-8">Frequently Asked Questions</SectionTitle>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Do I need to already use the cloud?</AccordionTrigger>
            <AccordionContent>
              No, not at all! We specialize in helping businesses make their first move to the cloud. We'll assess your current setup and guide you through the entire process.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can you work remotely?</AccordionTrigger>
            <AccordionContent>
              Yes, 100%. Cloud consulting is perfectly suited for remote work. We can manage, monitor, and migrate your systems securely without ever needing to step foot in your office.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How long does a migration take?</AccordionTrigger>
            <AccordionContent>
              It depends on the complexity of your data and systems. A simple migration might take a few weeks, while larger projects can take a couple of months. We'll provide a clear timeline during our initial assessment.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is my data safe during the process?</AccordionTrigger>
            <AccordionContent>
              Security is our top priority. We use industry-standard encryption and secure transfer protocols to ensure your data remains protected at every stage of the project.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mt-24 text-center bg-muted rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to talk?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Let's discuss how we can help your business grow with the right technology.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
            Book a Consultation
          </Button>
        </Link>
      </div>
    </div>
  );
}
