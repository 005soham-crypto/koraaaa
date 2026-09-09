import { useState } from "react";

const categories = ["Coffee", "Signatures", "Non-Coffee", "Food", "Sweet"] as const;
type Category = typeof categories[number];

const menuData: Record<Category, { name: string; desc: string; price: string }[]> = {
  Coffee: [
    { name: "Espresso", desc: "Double shot. Clean, short, and direct.", price: "₹160" },
    { name: "Americano", desc: "Espresso over hot water. Room to think.", price: "₹180" },
    { name: "Cappuccino", desc: "Equal parts espresso, steamed milk, and foam.", price: "₹260" },
    { name: "Flat White", desc: "Microfoam milk over a double ristretto.", price: "₹280" },
    { name: "Latte", desc: "Gentle, milky, and consistent.", price: "₹280" },
    { name: "Mocha", desc: "Single-origin chocolate with our house espresso.", price: "₹320" },
  ],
  Signatures: [
    { name: "Sea Salt Latte", desc: "Oat milk, a touch of sea salt, light caramel. The most-ordered drink at Kora.", price: "₹320" },
    { name: "Honey Cinnamon Flat White", desc: "Whole milk, wildflower honey, a thin layer of cinnamon.", price: "₹340" },
    { name: "Kora Tonic", desc: "Espresso over tonic water with a lemon peel. Unexpected and sharp.", price: "₹300" },
    { name: "Brown Sugar Cold Brew", desc: "18-hour cold brew with brown sugar syrup and oat milk.", price: "₹340" },
  ],
  "Non-Coffee": [
    { name: "Matcha", desc: "Ceremonial grade matcha with steamed oat milk.", price: "₹300" },
    { name: "Hot Chocolate", desc: "Dark Valrhona with whole milk. Thick.", price: "₹280" },
    { name: "House Chai", desc: "Kora spice blend, steeped and served with whole milk.", price: "₹220" },
    { name: "Iced Tea", desc: "Cold-brewed hibiscus and green tea. Lightly sweetened.", price: "₹200" },
  ],
  Food: [
    { name: "Avocado Toast", desc: "Sourdough, whipped ricotta, sliced avocado, chilli flakes, sea salt.", price: "₹380" },
    { name: "Mushroom Toast", desc: "Garlic butter mushrooms on thick-cut sourdough with fresh thyme.", price: "₹360" },
    { name: "Grilled Cheese", desc: "Two cheeses, slow-grilled on house butter bread.", price: "₹320" },
    { name: "Breakfast Bowl", desc: "Quinoa, poached egg, seasonal greens, tahini.", price: "₹420" },
    { name: "Granola Bowl", desc: "House granola, Greek yoghurt, seasonal fruit, honey.", price: "₹340" },
  ],
  Sweet: [
    { name: "Basque Cheesecake", desc: "Burnt at the edges. Creamy at the centre. Served at room temperature.", price: "₹280" },
    { name: "Chocolate Cookie", desc: "Thick and barely baked. Served warm.", price: "₹160" },
    { name: "Banana Bread", desc: "One thick slice, lightly toasted, with cultured butter.", price: "₹200" },
    { name: "Seasonal Tart", desc: "Changes weekly. Ask your server.", price: "₹260" },
  ],
};

export default function Menu() {
  const [active, setActive] = useState<Category>("Coffee");

  return (
    <div className="min-h-screen bg-[#F5EFE4] pt-24">
      {/* Header */}
      <div className="px-8 lg:px-16 xl:px-24 py-16 border-b border-[#E5D9C8]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <div>
            <span className="text-[#A8906F] text-xs tracking-[0.2em] uppercase font-sans block mb-6">Kora Coffee Co.</span>
            <h1 className="font-display text-[clamp(4rem,10vw,9rem)] font-light text-[#2B1C0D] leading-none">
              The<br />Menu.
            </h1>
          </div>
          <div className="lg:pb-4">
            <p className="text-[#7C5C3A] font-sans text-sm leading-relaxed max-w-xs">
              All prices inclusive of taxes. We use whole milk by default — oat milk and almond milk available for all drinks.
            </p>
          </div>
        </div>
      </div>

      {/* Category Nav */}
      <div className="sticky top-[72px] z-40 bg-[#F5EFE4] border-b border-[#E5D9C8]">
        <div className="px-8 lg:px-16 xl:px-24 max-w-7xl mx-auto">
          <div className="flex gap-0 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-xs tracking-[0.15em] uppercase font-sans px-5 py-5 border-b-2 transition-colors whitespace-nowrap ${
                  active === cat
                    ? "border-[#C06B45] text-[#2B1C0D]"
                    : "border-transparent text-[#A8906F] hover:text-[#2B1C0D]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-8 lg:px-16 xl:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-0">
            {menuData[active].map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-2 py-8 border-b border-[#E5D9C8] group hover:bg-[#EDE4D5] -mx-4 px-4 transition-colors"
              >
                <div>
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-[#A8906F] font-sans text-xs tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-2xl lg:text-3xl font-light text-[#2B1C0D] group-hover:text-[#C06B45] transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-[#A8906F] font-sans text-sm font-light leading-relaxed pl-10 max-w-lg">
                    {item.desc}
                  </p>
                </div>
                <div className="flex items-center lg:items-start lg:pt-2">
                  <span className="text-[#2B1C0D] font-sans text-base font-medium">{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-[#E5D9C8]">
            <p className="text-[#A8906F] font-sans text-sm leading-relaxed max-w-lg">
              Our menu changes with the seasons. Some items may not be available. Please ask your server about allergens and dietary requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
