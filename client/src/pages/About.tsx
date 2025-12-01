import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <div className="py-16 container mx-auto px-4 md:px-6">
      {/* Mission */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Making Cloud Simple.</h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
          “MEGHA helps small business owners make sense of the cloud so they can stay focused on running and growing their business. The practice focuses on simple explanations, practical advice, and setups that are safe and reliable.”
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Consultant Bio */}
        <div>
          <SectionTitle>About the Consultant</SectionTitle>
          <div className="prose text-muted-foreground">
            <p className="mb-4">
              Hello! I'm the lead consultant at MEGHA. With a background in cloud data management and extensive hands-on experience with platforms like <strong>Microsoft Azure, AWS, and Google Cloud</strong>, I founded this practice to bridge the gap for small businesses.
            </p>
            <p className="mb-4">
              I believe that enterprise-grade technology shouldn't be reserved for big corporations. My goal is to bring the same level of security, reliability, and efficiency to your business in a way that is affordable and easy to understand.
            </p>
            <p>
              When I'm not optimizing cloud architectures, I'm likely exploring the beautiful trails of Ontario or learning about the latest in sustainable tech.
            </p>
          </div>
        </div>

        {/* Values */}
        <Card className="bg-secondary/5 border-none">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6">Core Values</h3>
            <div className="space-y-6">
              {[
                {
                  value: "Clarity",
                  desc: "We speak your language, not tech-speak. You'll always know exactly what we're doing and why."
                },
                {
                  value: "Reliability",
                  desc: "Systems that work when you need them. We build for uptime and stability first."
                },
                {
                  value: "Security",
                  desc: "Protecting your business data is non-negotiable. We apply best practices to every project."
                },
                {
                  value: "Respect",
                  desc: "We respect your time and your budget. No hidden fees, no unnecessary meetings."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-px h-full bg-border mb-2"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary">{item.value}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
