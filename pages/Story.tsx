const IMG1 = "https://images.unsplash.com/photo-1787833149492-ec055610f5f7?w=900&h=1200&fit=crop&auto=format";
const IMG2 = "https://images.unsplash.com/photo-1685602729695-0664ea4e5c06?w=1200&h=800&fit=crop&auto=format";
const IMG3 = "https://images.unsplash.com/photo-1784924535258-c9d4e65e2718?w=600&h=800&fit=crop&auto=format";
const IMG4 = "https://images.unsplash.com/photo-1680381724318-c8ac9fe3a484?w=800&h=1000&fit=crop&auto=format";

const timeline = [
  { year: "2022", event: "The first idea", desc: "Two friends, a shared obsession with good coffee, and a notebook full of floor plans." },
  { year: "2023", event: "Kora opens its first space", desc: "We found a narrow room in Bandra, painted the walls a warm cream, and opened on a quiet Tuesday." },
  { year: "2024", event: "New coffee partnerships", desc: "We began sourcing directly from two farms in Coorg and one in Chikmagalur." },
  { year: "2025", event: "Community events and collaborations", desc: "Monthly cupping sessions, a resident ceramicist, and a small lending library." },
];

export default function Story() {
  return (
    <div className="min-h-screen bg-[#F5EFE4] pt-24">
      {/* Hero */}
      <div className="px-8 lg:px-16 xl:px-24 py-20 max-w-7xl mx-auto">
        <span className="text-[#A8906F] text-xs tracking-[0.2em] uppercase font-sans block mb-8">Our Story</span>
        <h1 className="font-display text-[clamp(3rem,7vw,7rem)] font-light text-[#2B1C0D] leading-[1] mb-0 max-w-4xl">
          Built around good coffee<br />
          <em className="italic">and better days.</em>
        </h1>
      </div>

      {/* Full width image */}
      <div className="w-full aspect-[21/9] overflow-hidden">
        <img src={IMG2} alt="Kora cafe interior" className="w-full h-full object-cover" />
      </div>

      {/* How Kora Started */}
      <section className="py-24 px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          <div>
            <span className="text-[#A8906F] text-xs tracking-[0.2em] uppercase font-sans block mb-6">How Kora Started</span>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-[#2B1C0D] leading-tight mb-8">
              It started as a feeling, not a business plan.
            </h2>
          </div>
          <div className="space-y-5">
            <p className="text-[#7C5C3A] font-sans text-base font-light leading-relaxed">
              Kora began with a simple frustration: most coffee shops in Mumbai were either too loud, too trend-conscious, or too quick to usher you out. We wanted a place where the coffee was genuinely good and the atmosphere genuinely calm.
            </p>
            <p className="text-[#7C5C3A] font-sans text-base font-light leading-relaxed">
              We weren't chasing a concept. We were building a place we'd actually want to spend the morning in. That idea was the brief, the investor deck, and the design direction all at once.
            </p>
            <p className="text-[#7C5C3A] font-sans text-base font-light leading-relaxed">
              We opened in 2023 with six tables, a secondhand espresso machine, and a menu we'd been testing in our kitchens for eight months.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-8 lg:px-16 xl:px-24 bg-[#EDE4D5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-[4/5] overflow-hidden">
            <img src={IMG1} alt="Espresso machine" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-[#A8906F] text-xs tracking-[0.2em] uppercase font-sans block mb-6">Our Approach</span>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-[#2B1C0D] leading-tight mb-8">
              Careful about the coffee. Relaxed about everything else.
            </h2>
            <p className="text-[#7C5C3A] font-sans text-sm font-light leading-relaxed mb-4">
              We dial in our espresso daily. We change the brew ratio when the seasons shift. We train our team on extraction, not just milk pouring.
            </p>
            <p className="text-[#7C5C3A] font-sans text-sm font-light leading-relaxed">
              But once the cup reaches you, we step back. How you drink it, when you leave, how loud you talk — none of that is our business.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#A8906F] text-xs tracking-[0.2em] uppercase font-sans block mb-16">Timeline</span>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-[120px_1fr_1fr] gap-4 lg:gap-12 py-8 border-t border-[#E5D9C8]"
              >
                <div className="font-display text-2xl text-[#C06B45] font-light">{item.year}</div>
                <h3 className="font-display text-2xl lg:text-3xl font-light text-[#2B1C0D]">{item.event}</h3>
                <p className="text-[#A8906F] font-sans text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
            <div className="border-t border-[#E5D9C8]" />
          </div>
        </div>
      </section>

      {/* Our People */}
      <section className="py-16 px-8 lg:px-16 xl:px-24 bg-[#2B1C0D]" data-cursor-dark>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#C06B45] text-xs tracking-[0.2em] uppercase font-sans block mb-8">Our People</span>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-[#F5EFE4] leading-tight mb-8">
              The team is small.<br />The care is not.
            </h2>
            <p className="text-[#A8906F] font-sans text-sm font-light leading-relaxed max-w-md">
              We're a team of eight. A few baristas who've worked in specialty coffee for years. A cook who keeps the food honest. And front-of-house who remember how you take yours.
            </p>
          </div>
          <div className="aspect-[4/5] overflow-hidden">
            <img src={IMG4} alt="Barista" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
