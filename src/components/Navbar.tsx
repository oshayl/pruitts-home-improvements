import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/10">
      <div className="accent-bar" />
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-lg font-extrabold tracking-wide text-white">PRUITT&apos;S</span>
          <span className="text-[9px] tracking-[0.25em] text-accent uppercase font-semibold">Home Improvements</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="text-xs tracking-[0.12em] text-gray-300 hover:text-accent transition-colors uppercase font-semibold">
              {item.label}
            </Link>
          ))}
          <a href="tel:+14178182104" className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-xs tracking-[0.12em] uppercase font-bold hover:bg-accent-light transition-all duration-300">
            <Phone className="w-3.5 h-3.5" />
            Free Quote
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-navy border-t border-white/10 px-6 py-4">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block py-2.5 text-sm tracking-[0.1em] text-gray-300 hover:text-accent transition-colors uppercase font-semibold">
              {item.label}
            </Link>
          ))}
          <a href="tel:+14178182104" onClick={() => setMenuOpen(false)} className="mt-3 block text-center px-5 py-2.5 bg-accent text-white text-xs tracking-[0.12em] uppercase font-bold hover:bg-accent-light transition-all">
            <Phone className="w-3.5 h-3.5 inline mr-2" />Free Quote
          </a>
        </div>
      </div>
    </nav>
  );
}