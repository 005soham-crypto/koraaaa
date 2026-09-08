import { useState, useEffect, useRef } from "react";

interface HomeProps {
  navigate: (page: string) => void;
}

const HERO_IMG = "https://images.unsplash.com/photo-1680381724318-c8ac9fe3a484?w=1400&h=900&fit=crop&auto=format";
const LATTE_IMG = "https://images.unsplash.com/photo-1784924535258-c9d4e65e2718?w=800&h=1000&fit=crop&auto=format";
const INTERIOR_IMG = "https://images.unsplash.com/photo-1685602729695-0664ea4e5c06?w=1400&h=900&fit=crop&auto=format";
const ESPRESSO_IMG = "https://images.unsplash.com/photo-1680381792123-676305af82d8?w=600&h=800&fit=crop&auto=format";
const MACHINE_IMG = "https://images.unsplash.com/photo-1787833149492-ec055610f5f7?w=600&h=800&fit=crop&auto=format";
const FOOD_IMG = "https://images.unsplash.com/photo-1692188839940-8521dc455e0f?w=600&h=800&fit=crop&auto=format";
const INTERIOR2_IMG = "https://images.unsplash.com/photo-1738214344374-bfac4208640b?w=800&h=1000&fit=crop&auto=format";

const menuItems = [
  {
    name: "Kora Espresso",
    desc: "Double shot, bright and clean. A daily ritual.",
    price: "₹180",
    img: "https://images.unsplash.com/photo-1680381792123-676305af82d8?w=400&h=500&fit=crop&auto=format",
  },
  {
    name: "Sea Salt Latte",
    desc: "Oat milk, a touch of sea salt, light caramel.",
    price: "₹320",
    img: "https://images.unsplash.com/photo-1784924535258-c9d4e65e2718?w=400&h=500&fit=crop&auto=format",
  },
  {
    name: "Honey Cinnamon Flat White",
    desc: "Whole milk, wildflower honey, a thin layer of cinnamon.",
    price: "₹340",
    img: "https://images.unsplash.com/photo-1786383820876-abf726eac685?w=400&h=500&fit=crop&auto=format",
  },
  {
    name: "Cold Brew",
    desc: "Steeped 18 hours. Heavy on patience, light on bitterness.",
    price: "₹280",
    img: "https://images.unsplash.com/photo-1749937393049-d0a0dbaed903?w=400&h=500&fit=crop&auto=format",
  },
  {
    name: "House Chai",
    desc: "Kora spice blend, whole milk. Works every morning.",
    price: "₹220",
    img: "https://images.unsplash.com/photo-1787099812023-c9636ca620dc?w=400&h=500&fit=crop&auto=format",
  },
];

const testimonials = [
  {
    quote: "Best place to disappear with a book for a couple of hours.",
    name: "Riya M.",
    loc: "Bandra",
  },
  {
    quote: "The Sea Salt Latte is the only reason I wake up on Saturdays.",
    name: "Arjun K.",
    loc: "Worli",
  },
  {
    quote: "Quiet enough to think. Good enough to stay.",
    name: "Priya S.",
    loc: "Lower Parel",
  },
];

export default function Home({ navigate }: HomeProps) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="bg-[#F5EFE4]">
      {/* HERO */}
      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] overflow-hidden">
        {/* Left: Text */}
        <div className="flex flex-col justify-end pb-16 pt-40 px-8 lg:px-16 xl:px-24 z-10 relative">
          <div className="mb-4 flex items-center gap-4">
            <div className="w-8 h-px bg-[#C06B45]" />
            <span className="text-[#C06B45] text-xs font-medium tracking-[0.2em] uppercase font-sans">Mumbai</span>
            <span className="text-[#A8906F] text-xs tracking-widest font-sans">Mon–Sun / 8AM–10PM</span>
          </div>
          <h1 className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.92] font-light text-[#2B1C0D] mb-8">
            COFFEE,<br />
            <em className="not-italic">MADE TO</em><br />
            SLOW YOU<br />
            DOWN.
          </h1>
          <p className="text-[#7C5C3A] text-base max-w-xs leading-relaxed mb-10 font-sans font-light">
            Specialty coffee, simple food, and good mornings in the heart of the city.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => navigate("menu")}
              className="border border-[#2B1C0D] text-[#2B1C0D] text-xs tracking-[0.18em] uppercase px-7 py-3.5 hover:bg-[#2B1C0D] hover:text-[#F5EFE4] transition-colors duration-300 font-sans"
              data-cursor="Menu"
            >
              Explore Menu
            </button>
            <button
              onClick={() => navigate("contact")}
              className="text-[#7C5C3A] text-xs tracking-[0.18em] uppercase px-7 py-3.5 border border-[#E5D9C8] hover:border-[#7C5C3A] transition-colors duration-300 font-sans"
            >
              Visit Kora
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="absolute inset-0 lg:relative lg:inset-auto opacity-20 lg:opacity-100">
          <img
            src={HERO_IMG}
            alt="Barista holding coffee"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#F5EFE4] lg:hidden" />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 z-10">
          <div className="w-px h-16 bg-[#E5D9C8]" />
          <span className="text-[#A8906F] text-[10px] tracking-[0.2em] uppercase font-sans rotate-90 mt-2">Scroll</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 lg:py-36 px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="w-[280px] lg:w-full aspect-[3/4] relative">
              <img
                src={LATTE_IMG}
                alt="Latte with shadows"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-8 -right-8 w-24 h-24 border border-[#E5D9C8]" />
            </div>
          </div>
          <div>
            <span className="text-[#A8906F] text-xs tracking-[0.2em] uppercase font-sans block mb-8">About Kora</span>
            <h2 className="font-display text-[clamp(2rem,4vw,4rem)] leading-[1.05] font-light text-[#2B1C0D] mb-8">
              Good coffee doesn't need to be complicated.
            </h2>
            <p className="text-[#7C5C3A] text-base leading-relaxed mb-5 font-sans font-light max-w-lg">
              We source beans from small, independent farmers who care about what they grow. Each cup is dialled in with attention to temperature, ratio, and time.
            </p>
            <p className="text-[#7C5C3A] text-base leading-relaxed mb-10 font-sans font-light max-w-lg">
              The food is simple on purpose. The atmosphere is relaxed. You're welcome to stay as long as you like.
            </p>
            <button
              onClick={() => navigate("story")}
              className="text-[#2B1C0D] text-xs tracking-[0.18em] uppercase font-sans underline underline-offset-4 hover:text-[#C06B45] transition-colors"
            >
              Our Story →
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED MENU */}
      <section className="py-24 lg:py-36 bg-[#EDE4D5]">
        <div className="px-8 lg:px-16 xl:px-24 max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-[#A8906F] text-xs tracking-[0.2em] uppercase font-sans block mb-4">Menu</span>
              <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-light text-[#2B1C0D] leading-tight">
                What's Brewing
              </h2>
            </div>
            <button
              onClick={() => navigate("menu")}
              className="hidden lg:block text-xs tracking-[0.18em] uppercase border border-[#2B1C0D] text-[#2B1C0D] px-6 py-3 hover:bg-[#2B1C0D] hover:text-[#F5EFE4] transition-colors font-sans"
            >
              View Full Menu
            </button>
          </div>

          <div className="space-y-0">
            {menuItems.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-[80px_1fr_120px_180px] gap-4 lg:gap-8 items-center py-6 border-t border-[#D8CEBF] cursor-pointer group"
                onMouseEnter={() => setHoveredItem(i)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="text-[#A8906F] font-sans text-xs tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl lg:text-3xl font-light text-[#2B1C0D] group-hover:text-[#C06B45] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[#A8906F] text-sm font-sans font-light mt-1">{item.desc}</p>
                </div>
                <span className="text-[#2B1C0D] font-sans text-sm font-medium">{item.price}</span>
                <div
                  className="overflow-hidden h-0 lg:h-20 relative"
                  style={{
                    opacity: hoveredItem === i ? 1 : 0,
                    transform: hoveredItem === i ? "scaleX(1)" : "scaleX(0.95)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-20 w-32 object-cover absolute right-0 top-0"
                  />
                </div>
              </div>
            ))}
            <div className="border-t border-[#D8CEBF] pt-8 lg:hidden">
              <button
                onClick={() => navigate("menu")}
                className="text-xs tracking-[0.18em] uppercase border border-[#2B1C0D] text-[#2B1C0D] px-6 py-3 hover:bg-[#2B1C0D] hover:text-[#F5EFE4] transition-colors font-sans w-full"
              >
                View Full Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* KORA EXPERIENCE */}
      <section className="py-24 lg:py-36 px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#A8906F] text-xs tracking-[0.2em] uppercase font-sans block mb-8">The Experience</span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5.5rem)] font-light text-[#2B1C0D] leading-tight mb-16 max-w-2xl">
            Come for the coffee.<br />
            <em className="italic">Stay for the hours.</em>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
            <div className="aspect-[4/5] lg:aspect-[4/5]">
              <img
                src={INTERIOR2_IMG}
                alt="Kora cafe interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 content-start pt-8">
              {[
                { label: "Morning Coffee", desc: "Start with something warm and unhurried." },
                { label: "Work Afternoons", desc: "Good Wi-Fi. Better coffee. No time limits." },
                { label: "Slow Conversations", desc: "Some tables are made for long goodbyes." },
                { label: "Evening Catch-Ups", desc: "The kitchen stays open till 10." },
              ].map((m, i) => (
                <div key={i} className="border border-[#E5D9C8] p-6 hover:border-[#C06B45] transition-colors group">
                  <div className="text-[#C06B45] text-xs tracking-widest font-sans uppercase mb-3 font-medium">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-xl font-light text-[#2B1C0D] mb-2 group-hover:text-[#C06B45] transition-colors">
                    {m.label}
                  </h3>
                  <p className="text-[#A8906F] text-xs font-sans font-light leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COFFEE PROCESS */}
      <section className="py-24 lg:py-36 bg-[#2B1C0D] text-[#F5EFE4]" data-cursor-dark>
        <div className="px-8 lg:px-16 xl:px-24 max-w-7xl mx-auto">
          <span className="text-[#C06B45] text-xs tracking-[0.2em] uppercase font-sans block mb-16">How it happens</span>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8">
            {[
              {
                num: "01",
                title: "Source",
                body: "We work with small producers and thoughtful roasters. Wherever possible, we know where the bean came from.",
              },
              {
                num: "02",
                title: "Brew",
                body: "Every cup is prepared with attention to balance, temperature, and texture. Nothing is pre-automated.",
              },
              {
                num: "03",
                title: "Serve",
                body: "Good coffee should feel approachable, not intimidating. We don't make it complicated for you.",
              },
            ].map((step, i) => (
              <div key={i} className="border-t border-[#4A3020] pt-8">
                <div className="font-display text-[6rem] leading-none text-[#4A3020] font-light mb-4 select-none">
                  {step.num}
                </div>
                <h3 className="font-display text-3xl font-light text-[#F5EFE4] mb-4">{step.title}</h3>
                <p className="text-[#A8906F] text-sm font-sans font-light leading-relaxed max-w-xs">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SPACE */}
      <section className="relative py-24 lg:py-0 lg:h-[70vh] overflow-hidden">
        <div className="lg:absolute inset-0">
          <img
            src={INTERIOR_IMG}
            alt="Kora cafe space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2B1C0D]/50" />
        </div>
        <div className="relative z-10 h-full flex items-end px-8 lg:px-16 xl:px-24 py-16">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-light text-[#F5EFE4] leading-tight mb-6">
                A little space<br />
                for your everyday.
              </h2>
              <button
                onClick={() => navigate("contact")}
                className="text-xs tracking-[0.18em] uppercase border border-[#F5EFE4] text-[#F5EFE4] px-7 py-3.5 hover:bg-[#F5EFE4] hover:text-[#2B1C0D] transition-colors font-sans"
              >
                Get Directions
              </button>
            </div>
            <div className="flex gap-12 flex-wrap">
              <div>
                <p className="text-[#E5D9C8] text-xs tracking-widest uppercase font-sans mb-2">Location</p>
                <p className="text-[#F5EFE4] font-sans text-base">Mumbai, India</p>
                <p className="text-[#A8906F] font-sans text-sm mt-1">8AM–10PM, Monday–Sunday</p>
              </div>
              <div>
                <p className="text-[#E5D9C8] text-xs tracking-widest uppercase font-sans mb-2">Amenities</p>
                <p className="text-[#F5EFE4] font-sans text-sm">Wi-Fi Available</p>
                <p className="text-[#F5EFE4] font-sans text-sm">Indoor Seating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-36 px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#A8906F] text-xs tracking-[0.2em] uppercase font-sans block mb-16">People Say</span>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className={`${i === 1 ? "lg:pt-12" : ""}`}>
                <blockquote className="font-display text-2xl lg:text-3xl font-light text-[#2B1C0D] leading-snug italic mb-6">
                  "{t.quote}"
                </blockquote>
                <div className="w-8 h-px bg-[#C06B45] mb-4" />
                <p className="text-[#7C5C3A] text-xs tracking-widest uppercase font-sans">
                  {t.name} · {t.loc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="px-8 lg:px-16 xl:px-24 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-3 lg:gap-4">
            <div className="col-span-2 aspect-[16/9] overflow-hidden" data-cursor="View">
              <img
                src={INTERIOR_IMG}
                alt="Cafe interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-[9/16] lg:aspect-auto overflow-hidden">
              <img
                src={ESPRESSO_IMG}
                alt="Espresso"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-[9/16] lg:aspect-auto overflow-hidden">
              <img
                src={MACHINE_IMG}
                alt="Espresso machine"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="col-span-2 aspect-[16/9] overflow-hidden">
              <img
                src={FOOD_IMG}
                alt="Food"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <button
              onClick={() => navigate("gallery")}
              className="text-xs tracking-[0.18em] uppercase border border-[#2B1C0D] text-[#2B1C0D] px-8 py-3.5 hover:bg-[#2B1C0D] hover:text-[#F5EFE4] transition-colors font-sans"
            >
              View Gallery
            </button>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section className="py-24 lg:py-36 bg-[#EDE4D5] px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#A8906F] text-xs tracking-[0.2em] uppercase font-sans block mb-8">Visit Us</span>
            <h2 className="font-display text-[clamp(3rem,6vw,6rem)] font-light text-[#2B1C0D] leading-tight mb-10">
              Your table<br />is waiting.
            </h2>
            <div className="space-y-2 mb-10">
              <p className="font-display text-xl text-[#2B1C0D]">Kora Coffee Co.</p>
              <p className="text-[#7C5C3A] font-sans text-sm">Mumbai, India</p>
              <p className="text-[#7C5C3A] font-sans text-sm">8AM–10PM · Monday–Sunday</p>
              <p className="text-[#7C5C3A] font-sans text-sm mt-4">+91 90000 00000</p>
              <p className="text-[#7C5C3A] font-sans text-sm">hello@koracoffee.co</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => navigate("contact")}
                className="border border-[#2B1C0D] text-[#2B1C0D] text-xs tracking-[0.18em] uppercase px-7 py-3.5 hover:bg-[#2B1C0D] hover:text-[#F5EFE4] transition-colors font-sans"
              >
                Get Directions
              </button>
              <button
                onClick={() => navigate("contact")}
                className="text-[#7C5C3A] text-xs tracking-[0.18em] uppercase px-7 py-3.5 border border-[#D8CEBF] hover:border-[#7C5C3A] transition-colors font-sans"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="aspect-square bg-[#D8CEBF] relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-3 h-3 rounded-full bg-[#C06B45] mx-auto mb-4" />
                <p className="font-sans text-xs text-[#7C5C3A] tracking-widest uppercase">Kora Coffee Co.</p>
                <p className="font-sans text-xs text-[#A8906F] mt-1">Mumbai</p>
              </div>
            </div>
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "repeating-linear-gradient(0deg, #7C5C3A 0, #7C5C3A 1px, transparent 0, transparent 50%), repeating-linear-gradient(90deg, #7C5C3A 0, #7C5C3A 1px, transparent 0, transparent 50%)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
