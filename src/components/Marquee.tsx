export default function Marquee({ items, speed = 'normal' }: { items: string[]; speed?: 'normal' | 'slow' }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={`flex whitespace-nowrap ${speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee'}`}>
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="text-sm md:text-base font-bold tracking-[0.08em] uppercase text-white/90 mx-6 md:mx-10">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent mx-2 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}