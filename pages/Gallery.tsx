import { useState, useEffect, useCallback } from "react";

const categories = ["All", "Coffee", "Space", "Food", "Details"] as const;
type GalleryCategory = typeof categories[number];

interface GalleryImage {
  src: string;
  alt: string;
  cat: GalleryCategory;
  span: "wide" | "tall" | "normal";
  caption: string;
  title: string;
  body: string;
}

const images: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1680381792123-676305af82d8?w=900&h=1100&fit=crop&auto=format",
    alt: "Cappuccino on wooden table",
    cat: "Coffee",
    span: "tall",
    caption: "The daily cap",
    title: "Cappuccino",
    body: "Equal thirds — espresso, steamed milk, and foam. We pull a double ristretto as the base, which gives it a little more sweetness and body than a standard shot. The milk is steamed to around 60°C, thick enough to hold its shape but not stiff. It's one of the harder drinks to do well, which is exactly why we care about it.",
  },
  {
    src: "https://images.unsplash.com/photo-1685602729695-0664ea4e5c06?w=1200&h=700&fit=crop&auto=format",
    alt: "Cafe interior with natural light",
    cat: "Space",
    span: "wide",
    caption: "The main room",
    title: "Our Space in Bandra",
    body: "We found this room by accident. A narrow corner unit with one good window and a lot of potential. We kept the walls warm and the furniture honest — nothing too curated, nothing disposable. The idea was a place that feels lived-in without feeling tired. We think we got close.",
  },
  {
    src: "https://images.unsplash.com/photo-1784924535258-c9d4e65e2718?w=600&h=800&fit=crop&auto=format",
    alt: "Latte with sun shadows",
    cat: "Coffee",
    span: "normal",
    caption: "Morning light, 9am",
    title: "Sea Salt Latte",
    body: "Our most-ordered drink. Oat milk, a single pinch of fleur de sel, and a thin line of house caramel underneath the foam. The salt doesn't make it taste salty — it rounds out the bitterness and makes the sweetness land differently. We tested twelve versions before landing on this one.",
  },
  {
    src: "https://images.unsplash.com/photo-1692188839940-8521dc455e0f?w=600&h=800&fit=crop&auto=format",
    alt: "Coffee and bread",
    cat: "Food",
    span: "normal",
    caption: "Simple breakfast",
    title: "Mushroom Toast",
    body: "Garlic butter mushrooms on thick-cut sourdough with fresh thyme. We use a mix of cremini and oyster mushrooms, cooked slowly until they're dark and concentrated. The bread is from a small bakery two streets away — we go through about forty loaves a week. It's on the menu every day, no exceptions.",
  },
  {
    src: "https://images.unsplash.com/photo-1787833149492-ec055610f5f7?w=800&h=1000&fit=crop&auto=format",
    alt: "Espresso machine detail",
    cat: "Details",
    span: "tall",
    caption: "La Marzocco, 2019",
    title: "The Machine",
    body: "A La Marzocco Linea PB that we bought secondhand from a closing cafe in Colaba. We had it serviced, repainted the panels, and fitted it with wooden knobs. It runs dual boilers — one for espresso extraction, one for steam. It was the biggest spend we made in year one and we have no regrets.",
  },
  {
    src: "https://images.unsplash.com/photo-1738214344374-bfac4208640b?w=1200&h=700&fit=crop&auto=format",
    alt: "Tables and chairs",
    cat: "Space",
    span: "wide",
    caption: "Afternoon seating",
    title: "The Afternoon Crowd",
    body: "From about 1pm to 4pm, Kora fills with people who are here to work or to think. Laptops open, headphones in, the occasional quiet conversation. We have good Wi-Fi and no time limit on seating. Some regulars have been coming every weekday for two years. We know their orders by heart.",
  },
  {
    src: "https://images.unsplash.com/photo-1786383820876-abf726eac685?w=600&h=800&fit=crop&auto=format",
    alt: "Latte art overflowing",
    cat: "Coffee",
    span: "normal",
    caption: "Poured with care",
    title: "Latte Art",
    body: "Our baristas train on latte art not for the aesthetics but because good poured art means the milk texture is right. A clean rosette or tulip only works when the steamed milk is at the correct consistency — silky, fluid, and poured at the right height. It's a technical marker more than a decorative one.",
  },
  {
    src: "https://images.unsplash.com/photo-1749937393049-d0a0dbaed903?w=600&h=800&fit=crop&auto=format",
    alt: "Coffee on table",
    cat: "Details",
    span: "normal",
    caption: "Still life, 8am",
    title: "Before Service",
    body: "Every morning before we open, there's a brief window when the cafe is completely quiet. The machine is warming up, the music isn't on yet, and the light is coming through at a low angle. We dial in the espresso, make one cup each, and sit for ten minutes before the first customer arrives. That ritual matters to us.",
  },
  {
    src: "https://images.unsplash.com/photo-1680381724318-c8ac9fe3a484?w=700&h=900&fit=crop&auto=format",
    alt: "Person holding coffee",
    cat: "Details",
    span: "normal",
    caption: "Warmth in hand",
    title: "The First Cup",
    body: "There's something about holding a warm cup that slows you down. We think about this when we choose our ceramics — weight, texture, how they hold heat. Most of our cups are from a small studio in Pune. Each one is slightly different. Some customers ask to keep their favourite. We don't say no.",
  },
  {
    src: "https://images.unsplash.com/photo-1714328101501-3594de6cb80f?w=1200&h=700&fit=crop&auto=format",
    alt: "Cafe seating area",
    cat: "Space",
    span: "wide",
    caption: "The corner tables",
    title: "Corner Seats",
    body: "The corner tables are the most requested. They have the best light in the morning, a view of the street, and enough distance from the counter that conversations feel private. We added a small shelf above each one for bags and books. It was a tiny detail — people noticed immediately.",
  },
  {
    src: "https://images.unsplash.com/photo-1648071588218-e757daf1678b?w=600&h=800&fit=crop&auto=format",
    alt: "Breakfast plate with egg",
    cat: "Food",
    span: "normal",
    caption: "Breakfast bowl",
    title: "Breakfast Bowl",
    body: "Quinoa, a soft poached egg, seasonal greens, and tahini. The greens change with what's available — sometimes spinach, sometimes watercress, sometimes something more unusual depending on the market. The tahini is made in-house with sesame paste and lemon. It's the dish we're most quietly proud of.",
  },
];

export default function Gallery() {
  const [active, setActive] = useState<GalleryCategory>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = active === "All" ? images : images.filter((img) => img.cat === active);

  const openLightbox = (globalIdx: number) => setLightboxIdx(globalIdx);
  const closeLightbox = () => setLightboxIdx(null);

  const goPrev = useCallback(() => {
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx - 1 + filtered.length) % filtered.length);
  }, [lightboxIdx, filtered.length]);

  const goNext = useCallback(() => {
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx + 1) % filtered.length);
  }, [lightboxIdx, filtered.length]);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIdx, goPrev, goNext]);

  const activeImage = lightboxIdx !== null ? filtered[lightboxIdx] : null;

  return (
    <div className="min-h-screen bg-[#F5EFE4] pt-24">
      {/* Header */}
      <div className="px-8 lg:px-16 xl:px-24 py-16 max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
        <div>
          <span className="text-[#A8906F] text-xs tracking-[0.2em] uppercase font-sans block mb-6">Gallery</span>
          <h1 className="font-display text-[clamp(4rem,9vw,8rem)] font-light text-[#2B1C0D] leading-none">
            Visual<br />Kora.
          </h1>
        </div>
        <div className="flex gap-2 flex-wrap pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActive(cat); setLightboxIdx(null); }}
              className={`text-xs tracking-[0.15em] uppercase font-sans px-4 py-2 border transition-colors ${
                active === cat
                  ? "border-[#2B1C0D] bg-[#2B1C0D] text-[#F5EFE4]"
                  : "border-[#E5D9C8] text-[#A8906F] hover:border-[#7C5C3A] hover:text-[#2B1C0D]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="px-8 lg:px-16 xl:px-24 pb-24 max-w-7xl mx-auto">
        <div className="columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <div
              key={`${active}-${i}`}
              className="break-inside-avoid overflow-hidden cursor-pointer group relative"
              onClick={() => openLightbox(i)}
              data-cursor="View"
            >
              <div className="relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  style={{ aspectRatio: img.span === "wide" ? "16/9" : img.span === "tall" ? "3/4" : "1/1" }}
                />
                {/* Caption overlay on hover */}
                <div className="absolute inset-0 bg-[#2B1C0D]/0 group-hover:bg-[#2B1C0D]/40 transition-all duration-400 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
                  <span className="text-[#F5EFE4] font-sans text-xs tracking-widest uppercase block">{img.cat}</span>
                  <span className="text-[#F5EFE4] font-display text-lg font-light leading-snug">{img.title}</span>
                </div>
              </div>
              {/* Static caption below image */}
              <div className="pt-2 pb-1">
                <p className="text-[#A8906F] font-sans text-xs tracking-wide">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-[#1A0E05]/97 flex items-center justify-center"
          data-cursor-dark
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-8 text-[#A8906F] text-xs tracking-[0.2em] uppercase font-sans hover:text-[#F5EFE4] transition-colors z-10"
            onClick={closeLightbox}
          >
            Close
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-8 text-[#A8906F] font-sans text-xs tracking-widest z-10">
            {(lightboxIdx! + 1).toString().padStart(2, "0")} / {filtered.length.toString().padStart(2, "0")}
          </div>

          {/* Prev */}
          <button
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 text-[#A8906F] hover:text-[#F5EFE4] transition-colors p-4"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M18 4L8 14L18 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Next */}
          <button
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 text-[#A8906F] hover:text-[#F5EFE4] transition-colors p-4"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M10 4L20 14L10 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Content */}
          <div
            className="grid grid-cols-1 lg:grid-cols-[1fr_380px] w-full max-w-6xl mx-auto px-16 lg:px-20 gap-0 h-full max-h-screen py-20 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="flex items-center justify-center h-full">
              <img
                src={activeImage.src.replace(/w=\d+&h=\d+/, "w=900&h=1100")}
                alt={activeImage.alt}
                className="max-h-[75vh] max-w-full object-contain"
              />
            </div>

            {/* Info panel */}
            <div className="bg-[#F5EFE4] h-full max-h-[75vh] flex flex-col justify-between p-10 lg:p-12">
              <div>
                <span className="text-[#C06B45] text-xs tracking-[0.2em] uppercase font-sans block mb-6">{activeImage.cat}</span>
                <h2 className="font-display text-3xl lg:text-4xl font-light text-[#2B1C0D] leading-tight mb-4">
                  {activeImage.title}
                </h2>
                <div className="w-8 h-px bg-[#E5D9C8] mb-6" />
                <p className="text-[#7C5C3A] font-sans text-base font-light leading-relaxed">
                  {activeImage.body}
                </p>
              </div>
              <div className="pt-8 border-t border-[#E5D9C8]">
                <p className="text-[#A8906F] font-sans text-xs tracking-wide italic">{activeImage.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
