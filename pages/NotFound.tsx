interface NotFoundProps {
  navigate: (page: string) => void;
}

export default function NotFound({ navigate }: NotFoundProps) {
  return (
    <div className="min-h-screen bg-[#F5EFE4] flex flex-col items-start justify-center px-8 lg:px-24 pt-24">
      <span className="text-[#A8906F] text-xs tracking-[0.2em] uppercase font-sans block mb-8">404</span>
      <h1 className="font-display text-[clamp(4rem,10vw,10rem)] font-light text-[#2B1C0D] leading-none mb-6">
        This corner<br />
        <em className="italic">is empty.</em>
      </h1>
      <p className="text-[#7C5C3A] font-sans text-sm leading-relaxed mb-12 max-w-xs">
        The page you're looking for has moved, or never existed. Easy to do. Happens to us with the seasonal tart too.
      </p>
      <button
        onClick={() => navigate("home")}
        className="border border-[#2B1C0D] text-[#2B1C0D] text-xs tracking-[0.18em] uppercase px-8 py-4 hover:bg-[#2B1C0D] hover:text-[#F5EFE4] transition-colors font-sans"
      >
        Back Home
      </button>
    </div>
  );
}
