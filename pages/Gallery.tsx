import { useState } from "react";

const categories = ["All", "Coffee", "Space", "Food", "Details"] as const;
type GalleryCategory = typeof categories[number];

const images = [
  { src: "https://images.unsplash.com/photo-1680381792123-676305af82d8?w=800&h=1000&fit=crop&auto=format", alt: "Cappuccino on wooden table", cat: "Coffee", span: "tall" },
  { src: "https://images.unsplash.com/photo-1685602729695-0664ea4e5c06?w=1200&h=700&fit=crop&auto=format", alt: "Cafe interior with natural light", cat: "Space", span: "wide" },
  { src: "https://images.unsplash.com/photo-1784924535258-c9d4e65e2718?w=600&h=800&fit=crop&auto=format", alt: "Latte with sun shadows", cat: "Coffee", span: "normal" },
  { src: "https://images.unsplash.com/photo-1692188839940-8521dc455e0f?w=600&h=800&fit=crop&auto=format", alt: "Coffee and bread", cat: "Food", span: "normal" },
  { src: "https://images.unsplash.com/photo-1787833149492-ec055610f5f7?w=800&h=1000&fit=crop&auto=format", alt: "Espresso machine detail", cat: "Details", span: "tall" },
  { src: "https://images.unsplash.com/photo-1738214344374-bfac4208640b?w=1200&h=700&fit=crop&auto=format", alt: "Tables and chairs", cat: "Space", span: "wide" },
  { src: "https://images.unsplash.com/photo-1786383820876-abf726eac685?w=600&h=800&fit=crop&auto=format", alt: "Latte art overflowing", cat: "Coffee", span: "normal" },
  { src: "https://images.unsplash.com/photo-1749937393049-d0a0dbaed903?w=600&h=800&fit=crop&auto=format", alt: "Coffee on table", cat: "Details", span: "normal" },
  { src: "https://images.unsplash.com/photo-1680381724318-c8ac9fe3a484?w=700&h=900&fit=crop&auto=format", alt: "Person holding coffee", cat: "Details", span: "normal" },
  { src: "https://images.unsplash.com/photo-1714328101501-3594de6cb80f?w=1200&h=700&fit=crop&auto=format", alt: "Cafe seating area", cat: "Space", span: "wide" },
];

export default function Gallery() {
  const [active, setActive] = useState<GalleryCategory>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? images : images.filter((img) => img.cat === active);

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
              onClick={() => setActive(cat)}
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

      {/* Masonry Grid */}
      <div className="px-8 lg:px-16 xl:px-24 pb-24 max-w-7xl mx-auto">
        <div className="columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid overflow-hidden cursor-pointer group relative"
              onClick={() => setLightbox(img.src)}
              data-cursor="Open"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                style={{ aspectRatio: img.span === "wide" ? "16/9" : img.span === "tall" ? "3/4" : "1/1" }}
              />
              <div className="absolute inset-0 bg-[#2B1C0D]/0 group-hover:bg-[#2B1C0D]/20 transition-colors duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                <span className="text-[#F5EFE4] text-xs font-sans tracking-widest uppercase">{img.cat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-[#2B1C0D]/95 flex items-center justify-center p-8"
          data-cursor-dark
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-8 right-8 text-[#F5EFE4] text-xs tracking-widest uppercase font-sans"
            onClick={() => setLightbox(null)}
          >
            Close
          </button>
          <img
            src={lightbox}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
