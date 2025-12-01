import { Cloud } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t bg-white py-12 text-muted-foreground">
      <div className="container mx-auto px-4 md:px-6 grid gap-8 md:grid-cols-4">
        <div className="col-span-2">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground mb-4">
            <Cloud className="h-6 w-6 text-primary fill-current" />
            MEGHA
          </Link>
          <p className="text-sm max-w-xs">
            Practical cloud consulting for small businesses in Ontario. We make cloud technology manageable and dependable.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold text-foreground mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link href="/services" className="hover:text-primary">Services</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Ontario, Canada</li>
            <li><a href="mailto:hello@meghacloud.ca" className="hover:text-primary">hello@meghacloud.ca</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t text-center text-xs">
        © {new Date().getFullYear()} MEGHA Cloud Consulting. All rights reserved.
      </div>
    </footer>
  );
}
