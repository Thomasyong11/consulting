import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-none shadow-sm hover:border-l-4 hover:border-l-primary">
      <CardHeader>
        {icon && <div className="mb-4 text-primary">{icon}</div>}
        <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Link href="/services">
          <Button variant="link" className="p-0 h-auto font-semibold text-primary hover:text-primary/80 group">
            Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
