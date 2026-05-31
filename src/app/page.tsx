'use client';
import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Phone, Mail, MapPin, Hammer, Droplets, Wrench, Trash2,
  TreePine, Home, Truck, ArrowRight, CheckCircle2, Star, Shield
} from 'lucide-react';

const SERVICES = [
  { icon: Hammer, title: 'Deck Building, Repairs & Staining', desc: 'Custom decks built to last, plus expert staining, sealing, and repair services.' },
  { icon: Droplets, title: 'Power Washing', desc: 'Driveways, siding, decks, and more — we make it look new again.' },
  { icon: Wrench, title: 'Plumbing', desc: 'Repairs, installations, and fixture replacements. No job too small.' },
  { icon: Trash2, title: 'Demolition & Haul Offs', desc: 'Clean removal and responsible disposal of unwanted structures and debris.' },
  { icon: TreePine, title: 'Yard Clean Up', desc: 'Brush clearing, leaf removal, and full property cleanup services.' },
  { icon: Home, title: 'Gutter Cleaning', desc: 'Keep your gutters flowing and your home protected from water damage.' },
  { icon: Truck, title: 'Garage & Storage Cleanouts', desc: 'Clear out the clutter. We handle the heavy lifting and the hauling.' },
  { icon: ArrowRight, title: 'Moving', desc: 'Residential moves and heavy item transport across Springfield and surrounding areas.' },
  { icon: Shield, title: 'Property Clean Up & More', desc: 'Vacant lots, foreclosure cleanouts, and any job that needs getting done.' },
];

const TRUST_ITEMS = [
  'Free Quotes on Every Job',
  'Locally Owned & Operated',
  'Springfield & Surrounding Areas',
  'No Job Too Big or Too Small',
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className={className}>{children}</div>
    </div>
  );
}

export default function PruittsHome() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-accent)/0.08,_transparent_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1 accent-bar" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/20 border border-accent/40 rounded mb-6">
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span className="text-[11px] tracking-[0.15em] text-accent uppercase font-bold">Free Quotes &mdash; (417) 818-2104</span>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.9] mb-6">
              <span className="text-white">HOME</span><br />
              <span className="text-accent">IMPROVEMENTS</span><br />
              <span className="text-white">DONE RIGHT</span>
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-4">
              Decks. Plumbing. Power washing. Demolition. Moving.<br className="hidden md:block" />
              <strong className="text-white">Whatever you need done, we handle it.</strong>
            </p>
          </Reveal>

          <Reveal delay={450}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a href="tel:+14178182104" className="px-8 py-4 bg-accent text-white text-sm font-bold tracking-[0.12em] uppercase hover:bg-accent-light transition-all duration-300 hover:shadow-lg hover:shadow-accent/25">
                Call (417) 818-2104
              </a>
              <a href="/#services" className="px-8 py-4 border-2 border-white/20 text-white text-sm font-bold tracking-[0.12em] uppercase hover:border-accent hover:text-accent transition-all duration-300">
                View Services
              </a>
            </div>
          </Reveal>

          <Reveal delay={600}>
            <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-500 uppercase tracking-wider">
              {TRUST_ITEMS.map((item) => (
                <span key={item} className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-accent" />{item}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-24 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.25em] text-accent uppercase font-bold">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-3">Our Services</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Reveal key={svc.title} delay={i * 80}>
                  <div className="group bg-navy/50 border border-white/5 p-6 hover:border-accent/30 hover:bg-navy/80 transition-all duration-300">
                    <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{svc.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{svc.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={400}>
            <div className="text-center mt-12">
              <p className="text-gray-500 text-sm mb-4">Don&apos;t see what you need? We probably do it anyway.</p>
              <a href="tel:+14178182104" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-bold tracking-[0.12em] uppercase hover:bg-accent-light transition-all">
                <Phone className="w-4 h-4" />Ask Us — It&apos;s Free
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why Pruitt's ── */}
      <section id="about" className="py-24 px-6 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-accent)/0.06,_transparent_60%)]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <span className="text-[11px] tracking-[0.25em] text-accent uppercase font-bold">Who We Are</span>
                <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6">Springfield&apos;s<br /><span className="text-accent">Go-To Crew</span></h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Pruitt&apos;s Home Improvements is a locally owned, full-service home improvement company serving Springfield and the surrounding Ozarks area. From deck builds to plumbing, demolition to yard cleanups — <strong className="text-white">if it needs doing, we&apos;re the ones to call.</strong>
                </p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  No runaround. No surprise charges. Just honest work, clear communication, and results you can see. Every quote is free, and every job gets done right.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { num: '100+', label: 'Jobs Completed' },
                    { num: '417', label: 'Local Area Code' },
                    { num: 'Free', label: 'Every Quote' },
                    { num: '1 Call', label: 'Away' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-charcoal/50 border border-white/5 p-4 text-center">
                      <div className="text-2xl font-extrabold text-accent">{stat.num}</div>
                      <div className="text-[10px] tracking-[0.15em] text-gray-400 uppercase font-semibold mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="space-y-4">
                {[
                  { title: 'Straightforward Pricing', desc: 'Free quotes with no hidden fees. You know the cost before we start.' },
                  { title: 'Reliable Scheduling', desc: 'We show up when we say we will. Period.' },
                  { title: 'Quality Workmanship', desc: 'We don\'t cut corners. Every job is done to last.' },
                  { title: 'Full-Service', desc: 'One call handles it all. Decks, plumbing, pressure washing, demo — you name it.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-5 bg-charcoal/50 border border-white/5 hover:border-accent/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 px-6 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1),_transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Need Something Done?</h2>
          <p className="text-white/80 text-lg mb-8">Every quote is free. Every job is personal. Give us a call.</p>
          <a href="tel:+14178182104" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-accent text-sm font-extrabold tracking-[0.12em] uppercase hover:bg-gray-100 transition-all duration-300 shadow-lg">
            <Phone className="w-4 h-4" />(417) 818-2104
          </a>
        </div>
      </section>

      {/* ── Gallery Placeholder ── */}
      <section id="gallery" className="py-24 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.25em] text-accent uppercase font-bold">Our Work</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-3">Recent Projects</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[4/3] bg-navy border border-white/5 flex items-center justify-center hover:border-accent/20 transition-colors">
                <div className="text-center">
                  <Hammer className="w-8 h-8 text-accent/20 mx-auto mb-2" />
                  <span className="text-xs text-gray-600 uppercase tracking-wider">Photo Coming Soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 px-6 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-accent)/0.06,_transparent_60%)]" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-[11px] tracking-[0.25em] text-accent uppercase font-bold">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-3">Let&apos;s Get It Done</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={100}>
              <a href="tel:+14178182104" className="block p-8 bg-charcoal/50 border border-white/5 text-center hover:border-accent/30 transition-colors group">
                <Phone className="w-8 h-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-2">Call Us</h3>
                <p className="text-accent text-xl font-extrabold">(417) 818-2104</p>
                <p className="text-xs text-gray-500 mt-2">Free quotes &mdash; no obligation</p>
              </a>
            </Reveal>

            <Reveal delay={200}>
              <a href="mailto:jacobpruitt14@gmail.com" className="block p-8 bg-charcoal/50 border border-white/5 text-center hover:border-accent/30 transition-colors group">
                <Mail className="w-8 h-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-2">Email Us</h3>
                <p className="text-accent text-sm font-semibold break-all">jacobpruitt14@gmail.com</p>
                <p className="text-xs text-gray-500 mt-2">We respond fast</p>
              </a>
            </Reveal>

            <Reveal delay={300}>
              <div className="p-8 bg-charcoal/50 border border-white/5 text-center">
                <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Location</h3>
                <p className="text-white font-semibold">Springfield, MO</p>
                <p className="text-xs text-gray-500 mt-2">Serving Springfield &amp; surrounding areas</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={400}>
            <div className="mt-12 text-center">
              <p className="text-gray-400 text-sm mb-6">Prefer to talk it out? Give us a call and we&apos;ll come take a look — no charge, no pressure.</p>
              <a href="tel:+14178182104" className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-white text-sm font-bold tracking-[0.12em] uppercase hover:bg-accent-light transition-all duration-300 shadow-lg shadow-accent/20">
                <Phone className="w-4 h-4" />Call (417) 818-2104
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}