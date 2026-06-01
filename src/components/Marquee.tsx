export default function Marquee({ items, speed = 'normal' }: { items: string[]; speed?: 'normal' | 'slow' }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden select-none" aria-hidden="true">
      <div className={`flex whitespace-nowrap ${speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee'}`}>
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center shrink-0 mx-4 md:mx-8">
            <span className="text-sm md:text-base font-bold tracking-[0.08em] uppercase text-white/80">{item}</span>
            <span className="w-1 h-1 rounded-full bg-accent ml-4 md:ml-8 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}