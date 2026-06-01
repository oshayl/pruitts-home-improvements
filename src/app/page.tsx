'use client';
import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Phone, Mail, MapPin, Hammer, Droplets, Wrench, Trash2,
  TreePine, Home, Truck, ArrowRight, CheckCircle2, Shield,
  ChevronRight
} from 'lucide-react';
import Marquee from '@/components/Marquee';

const FEATURED_SERVICE = {
  icon: Hammer,
  title: 'Deck Building, Repairs & Staining',
  tags: ['Custom Decks', 'Staining', 'Sealing', 'Repairs'],
};

const PRIMARY_SERVICES = [
  { icon: Droplets, title: 'Power Washing', tags: ['Driveways', 'Siding', 'Decks'] },
  { icon: Wrench, title: 'Plumbing', tags: ['Repairs', 'Installations', 'Fixtures'] },
];

const OTHER_SERVICES = [
  { icon: Trash2, title: 'Demolition & Haul Offs' },
  { icon: TreePine, title: 'Yard Clean Up' },
  { icon: Home, title: 'Gutter Cleaning' },
  { icon: Truck, title: 'Garage & Storage Cleanouts' },
  { icon: ArrowRight, title: 'Moving' },
  { icon: Shield, title: 'Property Clean Up & More' },
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
        {/* Diagonal accent stripe */}
        <div className="absolute -right-40 top-1/4 w-[600px] h-[600px] -rotate-12 bg-accent/[0.03] blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 right-0 h-1 accent-bar" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20 pb-8">
          <Reveal>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter leading-[0.88] mb-5">
              <span className="text-accent">HOME IMPROVEMENTS</span>
              <br />
              <span className="text-white">DONE RIGHT</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-8">
              Decks. Plumbing. Power washing. Demolition. Moving. <strong className="text-white">Whatever you need.</strong>
            </p>
          </Reveal>

          <Reveal delay={350}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+14178182104" className="group px-8 py-4 bg-accent text-white text-sm font-bold tracking-[0.12em] uppercase hover:bg-accent-light transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02]">
                <Phone className="w-4 h-4 inline mr-2 -mt-0.5 group-hover:animate-pulse" />(417) 818-2104
              </a>
              <a href="/#services" className="px-8 py-4 border-2 border-white/20 text-white text-sm font-bold tracking-[0.12em] uppercase hover:border-accent hover:text-accent transition-all duration-300">
                View Services
              </a>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400 uppercase tracking-widest font-semibold">
              {TRUST_ITEMS.map((item) => (
                <span key={item} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" />{item}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Marquee 1 ── */}
      <div className="bg-navy border-y border-accent/20 py-3.5">
        <Marquee items={['DECKS', 'POWER WASHING', 'PLUMBING', 'DEMOLITION', 'GUTTER CLEANING', 'YARD CLEAN UP', 'MOVING', 'HAUL OFFS', 'FREE QUOTES', 'SPRINGFIELD MO', 'CLEANOUTS', 'STAINING & SEALING', 'HOME REPAIRS', 'PROPERTY CLEAN UP']} />
      </div>

      {/* ── Services ── */}
      <section id="services" className="py-24 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="text-[11px] tracking-[0.25em] text-accent uppercase font-bold">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-3">Our Services</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
            </div>
          </Reveal>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* ── Featured: Deck Building ── */}
            <Reveal delay={0}>
              <div className="group md:col-span-2 lg:col-span-2 md:row-span-2 bg-accent/10 border border-accent/20 p-8 md:p-10 hover:border-accent/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <FEATURED_SERVICE.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">{FEATURED_SERVICE.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {FEATURED_SERVICE.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-accent/15 border border-accent/25 text-accent text-[11px] tracking-wider uppercase font-bold rounded-sm">{tag}</span>
                    ))}
                  </div>
                  <a href="tel:+14178182104" className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-xs font-bold tracking-[0.12em] uppercase hover:bg-accent-light transition-all">
                    <Phone className="w-3.5 h-3.5" />Get a Free Quote
                  </a>
                </div>
              </div>
            </Reveal>

            {/* ── Primary Services ── */}
            {PRIMARY_SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Reveal key={svc.title} delay={100 + i * 80}>
                  <div className="group bg-navy/60 border border-white/5 p-6 hover:border-accent/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-accent transition-all duration-500" />
                    <Icon className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-white mb-3">{svc.title}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {svc.tags.map((tag) => (
                        <span key={tag} className="text-[10px] tracking-wider text-gray-500 uppercase font-semibold">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}

            {/* ── Other Services ── */}
            {OTHER_SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Reveal key={svc.title} delay={300 + i * 60}>
                  <div className="group bg-navy/30 border border-white/5 p-5 hover:border-accent/25 hover:bg-navy/50 transition-all duration-300 flex items-center gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-colors">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{svc.title}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={400}>
            <div className="text-center mt-10">
              <a href="tel:+14178182104" className="inline-flex items-center gap-2 text-accent text-sm font-bold tracking-wider uppercase hover:text-accent-light transition-colors group">
                <Phone className="w-4 h-4" />Don&apos;t see it? Ask us &mdash; it&apos;s free
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
                  Pruitt&apos;s Home Improvements is a locally owned, full-service home improvement company serving Springfield and the surrounding Ozarks area. From deck builds to plumbing, demolition to yard cleanups &mdash; <strong className="text-white">if it needs doing, we&apos;re the ones to call.</strong>
                </p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  No runaround. No surprise charges. Just honest work, clear communication, and results you can see. Every quote is free, and every job gets done right.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-charcoal/50 border border-white/5 p-5 text-center group hover:border-accent/30 transition-colors">
                    <div className="text-3xl font-extrabold text-accent">100+</div>
                    <div className="text-[10px] tracking-[0.15em] text-gray-400 uppercase font-semibold mt-1">Jobs Completed</div>
                  </div>
                  <div className="bg-charcoal/50 border border-white/5 p-5 text-center group hover:border-accent/30 transition-colors">
                    <div className="text-3xl font-extrabold text-accent">$0</div>
                    <div className="text-[10px] tracking-[0.15em] text-gray-400 uppercase font-semibold mt-1">To Get A Quote</div>
                  </div>
                  <div className="bg-charcoal/50 border border-white/5 p-5 text-center group hover:border-accent/30 transition-colors">
                    <div className="text-3xl font-extrabold text-accent">417</div>
                    <div className="text-[10px] tracking-[0.15em] text-gray-400 uppercase font-semibold mt-1">Local &amp; Here To Stay</div>
                  </div>
                  <div className="bg-charcoal/50 border border-white/5 p-5 text-center group hover:border-accent/30 transition-colors">
                    <div className="text-3xl font-extrabold text-accent">1</div>
                    <div className="text-[10px] tracking-[0.15em] text-gray-400 uppercase font-semibold mt-1">Call Gets It Done</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="space-y-4">
                {[
                  { title: 'Straightforward Pricing', desc: 'Free quotes with no hidden fees. You know the cost before we start.', icon: '💰' },
                  { title: 'Reliable Scheduling', desc: 'We show up when we say we will. Period.', icon: '📅' },
                  { title: 'Quality Workmanship', desc: 'We don\'t cut corners. Every job is done to last.', icon: '🔨' },
                  { title: 'Full-Service Convenience', desc: 'One call handles it all. Decks, plumbing, pressure washing, demo — you name it.', icon: '📞' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-5 bg-charcoal/50 border border-white/5 hover:border-accent/25 transition-all duration-300 group cursor-default">
                    <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-accent transition-colors">{item.title}</h4>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-accent ml-auto shrink-0 transition-colors mt-1" />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Marquee 2 ── */}
      <div className="bg-charcoal border-y border-accent/10 py-2.5 overflow-hidden">
        <Marquee items={['FREE QUOTES ✦ NO JOB TOO SMALL ✦ CALL 417-818-2104 ✦ LOCALLY OWNED ✦ SPRINGFIELD & SURROUNDING AREAS ✦ HONEST WORK ✦ DEPENDABLE SERVICE ✦ ONE CALL HANDLES IT ALL ✦']} speed="slow" />
      </div>

      {/* ── CTA Banner ── */}
      <section className="py-20 px-6 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.12),_transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23fff\' fill-opacity=\'1\'%3E%3Cpath d=\'M0 0h1v1H0z\'/%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Need Something Done?</h2>
          <p className="text-white/80 text-lg mb-10">Every quote is free. Every job is personal. Give us a call.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+14178182104" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-accent text-sm font-extrabold tracking-[0.12em] uppercase hover:bg-gray-100 transition-all duration-300 shadow-lg group">
              <Phone className="w-4 h-4 group-hover:animate-pulse" />(417) 818-2104
            </a>
            <a href="mailto:jacobpruitt14@gmail.com" className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white/40 text-white text-sm font-bold tracking-[0.12em] uppercase hover:border-white hover:bg-white/10 transition-all duration-300">
              <Mail className="w-4 h-4" />Email Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section id="gallery" className="py-24 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.25em] text-accent uppercase font-bold">Our Work</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-3">Recent Projects</h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4" />
              <p className="text-gray-500 text-sm mt-4">Photos coming soon &mdash; in the meantime, <a href="tel:+14178182104" className="text-accent hover:text-accent-light transition-colors underline underline-offset-2">call us</a> to see our work in person.</p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Deck Build', desc: 'Before & After' },
              { label: 'Power Washing', desc: 'Driveway Cleanup' },
              { label: 'Plumbing Repair', desc: 'Fixture Install' },
              { label: 'Demolition', desc: 'Full Removal' },
              { label: 'Yard Clean Up', desc: 'Property Transform' },
              { label: 'Moving Day', desc: 'Full Service' },
            ].map((item) => (
              <div key={item.label} className="group aspect-[4/3] bg-navy border border-white/5 flex flex-col items-center justify-center hover:border-accent/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Hammer className="w-8 h-8 text-accent/15 group-hover:text-accent/30 transition-colors mb-2 relative z-10" />
                <span className="text-xs text-gray-500 group-hover:text-gray-300 uppercase tracking-wider relative z-10 transition-colors">{item.label}</span>
                <span className="text-[10px] text-gray-700 group-hover:text-gray-500 mt-0.5 relative z-10 transition-colors">{item.desc}</span>
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
              <p className="text-gray-400 text-sm mt-4">Give us a call or send a message. We respond fast.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            <Reveal delay={100}>
              <a href="tel:+14178182104" className="block p-8 bg-charcoal/50 border border-white/5 text-center hover:border-accent/40 hover:bg-charcoal/80 transition-all duration-300 group">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Call Us</h3>
                <p className="text-accent text-xl font-extrabold">(417) 818-2104</p>
                <p className="text-xs text-gray-500 mt-3">Free quotes &mdash; no obligation</p>
              </a>
            </Reveal>

            <Reveal delay={200}>
              <a href="mailto:jacobpruitt14@gmail.com" className="block p-8 bg-charcoal/50 border border-white/5 text-center hover:border-accent/40 hover:bg-charcoal/80 transition-all duration-300 group">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email Us</h3>
                <p className="text-accent text-sm font-semibold break-all">jacobpruitt14@gmail.com</p>
                <p className="text-xs text-gray-500 mt-3">We respond fast</p>
              </a>
            </Reveal>

            <Reveal delay={300}>
              <div className="p-8 bg-charcoal/50 border border-white/5 text-center hover:border-accent/40 hover:bg-charcoal/80 transition-all duration-300 group">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Location</h3>
                <p className="text-white font-semibold">Springfield, MO</p>
                <p className="text-xs text-gray-500 mt-3">Serving Springfield &amp; surrounding areas</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={400}>
            <div className="mt-14 p-6 bg-charcoal/30 border border-accent/10 text-center">
              <p className="text-gray-400 text-sm mb-4"> Prefer to talk it out? Give us a call and we&apos;ll come take a look &mdash; <strong className="text-white">no charge, no pressure.</strong></p>
              <a href="tel:+14178182104" className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-white text-sm font-bold tracking-[0.12em] uppercase hover:bg-accent-light transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/30">
                <Phone className="w-4 h-4" />Call (417) 818-2104
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Mobile Sticky CTA ── */}
      <a href="tel:+14178182104" className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-accent text-white text-center py-3.5 font-bold text-sm tracking-[0.1em] uppercase hover:bg-accent-light transition-colors flex items-center justify-center gap-2 shadow-[0_-2px_10px_rgba(0,0,0,0.3)]">
        <Phone className="w-4 h-4" />Call Now — Free Quote
      </a>
      {/* Bottom padding for mobile sticky CTA */}
      <div className="h-14 md:hidden" />

      <Footer />
    </>
  );
}