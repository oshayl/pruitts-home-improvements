import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="accent-bar" />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="text-lg font-extrabold tracking-wide text-white">PRUITT&apos;S</span>
              <span className="text-[9px] tracking-[0.25em] text-accent uppercase font-semibold">Home Improvements</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Home improvements, maintenance, and repairs. Serving Springfield and surrounding areas.
            </p>
            <div className="mt-4 inline-block px-3 py-1 bg-accent/20 text-accent text-[10px] tracking-[0.15em] uppercase font-bold rounded">
              Free Quotes
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] text-accent uppercase mb-4 font-bold">Services</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Deck Building &amp; Repairs</p>
              <p>Power Washing</p>
              <p>Plumbing</p>
              <p>Demolition &amp; Haul Offs</p>
              <p>Yard &amp; Property Clean Up</p>
              <p>Gutter Cleaning</p>
              <p>Garage &amp; Storage Cleanouts</p>
              <p>Moving</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] text-accent uppercase mb-4 font-bold">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/#services" className="block text-sm text-gray-400 hover:text-white transition-colors">Services</Link>
              <Link href="/#about" className="block text-sm text-gray-400 hover:text-white transition-colors">About</Link>
              <Link href="/#gallery" className="block text-sm text-gray-400 hover:text-white transition-colors">Gallery</Link>
              <Link href="/#contact" className="block text-sm text-gray-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] text-accent uppercase mb-4 font-bold">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <a href="tel:+14178182104" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                (417) 818-2104
              </a>
              <a href="mailto:jacobpruitt14@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                jacobpruitt14@gmail.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>Springfield, MO</span>
              </div>
            </div>
            <a href="tel:+14178182104" className="mt-5 inline-block px-5 py-2.5 bg-accent text-white text-xs tracking-[0.12em] uppercase font-bold hover:bg-accent-light transition-all">
              Call Now
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Pruitt&apos;s Home Improvements. All rights reserved.</p>
          <p className="text-xs text-gray-500">Springfield, Missouri &mdash; Serving the Ozarks</p>
        </div>
      </div>
    </footer>
  );
}