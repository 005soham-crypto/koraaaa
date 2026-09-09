import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Story from "./pages/Story";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CustomCursor from "./components/CustomCursor";

type Page = "home" | "menu" | "story" | "gallery" | "contact" | "404";

const navLinks: { label: string; page: Page }[] = [
  { label: "Menu", page: "menu" },
  { label: "Our Story", page: "story" },
  { label: "Gallery", page: "gallery" },
  { label: "Contact", page: "contact" },
];

function Footer({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <footer className="bg-[#2B1C0D] text-[#F5EFE4] px-8 lg:px-16 xl:px-24 py-16" data-cursor-dark>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-12">
        <div>
          <p className="font-display text-3xl font-light leading-tight mb-2">KORA</p>
          <p className="font-display text-3xl font-light leading-tight text-[#A8906F]">COFFEE CO.</p>
          <p className="text-[#A8906F] font-sans text-xs mt-4">Mumbai, India · 8AM–10PM</p>
        </div>
        <nav className="space-y-3">
          {navLinks.map((l) => (
            <button
              key={l.page}
              onClick={() => navigate(l.page)}
              className="block text-xs tracking-[0.18em] uppercase font-sans text-[#A8906F] hover:text-[#F5EFE4] transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>
        <div className="space-y-2">
          <p className="text-[#A8906F] text-xs tracking-widest uppercase font-sans mb-4">Social</p>
          <a
            href="#"
            className="block text-xs tracking-[0.15em] uppercase font-sans text-[#A8906F] hover:text-[#F5EFE4] transition-colors"
          >
            Instagram
          </a>
          <p className="text-[#4A3020] text-xs font-sans mt-8 pt-8 border-t border-[#3A2515]">
            © 2025 Kora Coffee Co. Mumbai.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = (p: string) => {
    setPage(p as Page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || page !== "home"
            ? "bg-[#F5EFE4]/95 backdrop-blur-sm border-b border-[#E5D9C8]"
            : "bg-transparent"
        }`}
      >
        <div className="px-8 lg:px-16 xl:px-24 h-[72px] flex items-center justify-between max-w-[1600px] mx-auto">
          {/* Logo */}
          <button
            onClick={() => navigate("home")}
            className="font-display text-xl font-light text-[#2B1C0D] tracking-wide leading-none"
          >
            KORA
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l.page}
                onClick={() => navigate(l.page)}
                className={`text-xs tracking-[0.18em] uppercase font-sans transition-colors ${
                  page === l.page ? "text-[#2B1C0D]" : "text-[#A8906F] hover:text-[#2B1C0D]"
                }`}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => navigate("contact")}
              className="text-xs tracking-[0.18em] uppercase font-sans border border-[#2B1C0D] text-[#2B1C0D] px-5 py-2.5 hover:bg-[#2B1C0D] hover:text-[#F5EFE4] transition-colors ml-4"
            >
              Visit Us
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 w-6"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
          >
            <span
              className={`block h-px bg-[#2B1C0D] transition-transform origin-center ${
                mobileOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block h-px bg-[#2B1C0D] transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px bg-[#2B1C0D] transition-transform origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#F5EFE4] border-t border-[#E5D9C8] px-8 py-8 space-y-6">
            {navLinks.map((l) => (
              <button
                key={l.page}
                onClick={() => navigate(l.page)}
                className="block text-sm tracking-[0.18em] uppercase font-sans text-[#2B1C0D] w-full text-left"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => navigate("contact")}
              className="block text-sm tracking-[0.18em] uppercase font-sans border border-[#2B1C0D] text-[#2B1C0D] px-5 py-3 hover:bg-[#2B1C0D] hover:text-[#F5EFE4] transition-colors"
            >
              Visit Us
            </button>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="flex-1">
        {page === "home" && <Home navigate={navigate} />}
        {page === "menu" && <Menu />}
        {page === "story" && <Story />}
        {page === "gallery" && <Gallery />}
        {page === "contact" && <Contact />}
        {page === "404" && <NotFound navigate={navigate} />}
      </main>

      {page !== "404" && <Footer navigate={navigate} />}
      <CustomCursor />
    </div>
  );
}
