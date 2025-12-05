import { Link } from "wouter";
import { Cloud, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-4 md:px-6 grid gap-12 md:grid-cols-4">
        <div className="col-span-1 md:col-span-2 pr-8">
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-2xl mb-6">
            <Cloud className="h-8 w-8 text-primary fill-current" />
            <span>MEGHA</span>
          </Link>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-md">
            Practical cloud consulting for small businesses in Ontario. We help you move to the cloud, improve performance, and keep systems reliable without the overhead.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-white text-lg mb-6">Company</h3>
          <ul className="space-y-4">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white text-lg mb-6">Contact</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <span>Ontario, Canada</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:hello@meghacloud.ca" className="hover:text-primary transition-colors">hello@meghacloud.ca</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} MEGHA Cloud Consulting. All rights reserved.
      </div>
    </footer>
  );
}
