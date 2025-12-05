import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { User, Award, Shield, Clock, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="py-20 md:py-28 container mx-auto px-4 md:px-6">
      {/* Mission */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-10 text-slate-900 tracking-tight">Making Cloud Simple.</h1>
        <p className="text-xl md:text-3xl text-slate-600 leading-relaxed font-light italic">
          “MEGHA helps small business owners make sense of the cloud so they can stay focused on running and growing their business. The practice focuses on simple explanations, practical advice, and setups that are safe and reliable.”
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* Consultant Bio */}
        <div>
          <SectionTitle>About the Consultant</SectionTitle>
          <div className="prose prose-lg text-slate-600">
            <div className="flex items-center gap-4 mb-8 not-prose">
              <div className="h-20 w-20 rounded-full bg-slate-200 flex items-center justify-center">
                <User className="h-10 w-10 text-slate-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Lead Consultant</h3>
                <p className="text-primary font-medium">Cloud Architect</p>
              </div>
            </div>
            <p className="mb-6">
              Hello! I'm the lead consultant at MEGHA. With a background in cloud data management and extensive hands-on experience with platforms like <strong>Microsoft Azure, AWS, and Google Cloud</strong>, I founded this practice to bridge the gap for small businesses.
            </p>
            <p className="mb-6">
              I believe that enterprise-grade technology shouldn't be reserved for big corporations. My goal is to bring the same level of security, reliability, and efficiency to your business in a way that is affordable and easy to understand.
            </p>
            <p>
              When I'm not optimizing cloud architectures, I'm likely exploring the beautiful trails of Ontario or learning about the latest in sustainable tech.
            </p>
          </div>
        </div>

        {/* Values */}
        <Card className="bg-slate-50 border-none shadow-inner">
          <CardContent className="p-10">
            <h3 className="text-2xl font-bold mb-8 text-slate-900">Core Values</h3>
            <div className="space-y-8">
              {[
                {
                  value: "Clarity",
                  desc: "We speak your language, not tech-speak. You'll always know exactly what we're doing and why.",
                  icon: <Heart className="h-6 w-6 text-primary" />
                },
                {
                  value: "Reliability",
                  desc: "Systems that work when you need them. We build for uptime and stability first.",
                  icon: <Award className="h-6 w-6 text-primary" />
                },
                {
                  value: "Security",
                  desc: "Protecting your business data is non-negotiable. We apply best practices to every project.",
                  icon: <Shield className="h-6 w-6 text-primary" />
                },
                {
                  value: "Respect",
                  desc: "We respect your time and your budget. No hidden fees, no unnecessary meetings.",
                  icon: <Clock className="h-6 w-6 text-primary" />
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100">
                      {item.icon}
                    </div>
                    {i !== 3 && <div className="w-px h-full bg-slate-200 my-2"></div>}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 mb-1">{item.value}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
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
