import { useState } from "react";

type FieldState = "default" | "focused" | "filled" | "error" | "success";

interface Field {
  label: string;
  type: string;
  value: string;
  state: FieldState;
  multiline?: boolean;
}

export default function Contact() {
  const [fields, setFields] = useState<Field[]>([
    { label: "Name", type: "text", value: "", state: "default" },
    { label: "Email", type: "email", value: "", state: "default" },
    { label: "Message", type: "text", value: "", state: "default", multiline: true },
  ]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const hasError = fields.some((f) => !f.value.trim());
    if (hasError) {
      setFields((prev) =>
        prev.map((f) => (f.value.trim() ? f : { ...f, state: "error" }))
      );
      return;
    }
    setSubmitted(true);
  };

  const updateField = (i: number, value: string) => {
    setFields((prev) =>
      prev.map((f, idx) =>
        idx === i ? { ...f, value, state: value ? "filled" : "focused" } : f
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#F5EFE4] pt-24">
      {/* Header */}
      <div className="px-8 lg:px-16 xl:px-24 py-16 max-w-7xl mx-auto">
        <span className="text-[#A8906F] text-xs tracking-[0.2em] uppercase font-sans block mb-8">Contact</span>
        <h1 className="font-display text-[clamp(4rem,10vw,9rem)] font-light text-[#2B1C0D] leading-none">
          Come say<br />
          <em className="italic">hello.</em>
        </h1>
      </div>

      <div className="px-8 lg:px-16 xl:px-24 pb-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
        {/* Info */}
        <div>
          <div className="space-y-8 mb-12">
            <div>
              <p className="text-[#A8906F] text-xs tracking-widest uppercase font-sans mb-3">Address</p>
              <p className="font-display text-2xl text-[#2B1C0D] font-light mb-1">Kora Coffee Co.</p>
              <p className="text-[#7C5C3A] font-sans text-sm">Mumbai, India</p>
            </div>
            <div>
              <p className="text-[#A8906F] text-xs tracking-widest uppercase font-sans mb-3">Hours</p>
              <p className="text-[#7C5C3A] font-sans text-sm">8AM–10PM</p>
              <p className="text-[#7C5C3A] font-sans text-sm">Monday–Sunday</p>
            </div>
            <div>
              <p className="text-[#A8906F] text-xs tracking-widest uppercase font-sans mb-3">Contact</p>
              <p className="text-[#7C5C3A] font-sans text-sm">+91 90000 00000</p>
              <p className="text-[#7C5C3A] font-sans text-sm">hello@koracoffee.co</p>
            </div>
          </div>

          {/* Map-style block */}
          <div
            className="w-full aspect-video bg-[#E5D9C8] relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, #7C5C3A 0, #7C5C3A 1px, transparent 0, transparent 40px), repeating-linear-gradient(90deg, #7C5C3A 0, #7C5C3A 1px, transparent 0, transparent 40px)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
              <div className="w-4 h-4 rounded-full bg-[#C06B45] relative">
                <div className="absolute inset-0 rounded-full bg-[#C06B45] animate-ping opacity-40" />
              </div>
              <span className="text-[#2B1C0D] font-sans text-xs tracking-widest uppercase">Kora Coffee Co. · Mumbai</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          {submitted ? (
            <div className="flex flex-col items-start justify-center h-full py-16">
              <div className="w-8 h-px bg-[#C06B45] mb-6" />
              <h2 className="font-display text-4xl font-light text-[#2B1C0D] mb-4">We'll be in touch.</h2>
              <p className="text-[#7C5C3A] font-sans text-sm leading-relaxed max-w-xs">
                Thanks for writing. We read everything and typically respond within a day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {fields.map((field, i) => (
                <div key={i} className="group">
                  <label
                    className={`block text-xs tracking-[0.15em] uppercase font-sans mb-2 transition-colors ${
                      field.state === "error"
                        ? "text-[#C06B45]"
                        : field.state === "focused"
                        ? "text-[#2B1C0D]"
                        : "text-[#A8906F]"
                    }`}
                  >
                    {field.label}
                    {field.state === "error" && " — required"}
                  </label>
                  {field.multiline ? (
                    <textarea
                      rows={5}
                      value={field.value}
                      onFocus={() =>
                        setFields((prev) =>
                          prev.map((f, idx) => (idx === i ? { ...f, state: "focused" } : f))
                        )
                      }
                      onBlur={() =>
                        setFields((prev) =>
                          prev.map((f, idx) =>
                            idx === i ? { ...f, state: f.value ? "filled" : "default" } : f
                          )
                        )
                      }
                      onChange={(e) => updateField(i, e.target.value)}
                      className={`w-full bg-transparent border-b text-[#2B1C0D] font-sans text-sm py-3 outline-none resize-none transition-colors ${
                        field.state === "error"
                          ? "border-[#C06B45]"
                          : field.state === "focused"
                          ? "border-[#2B1C0D]"
                          : "border-[#E5D9C8]"
                      }`}
                      placeholder=""
                    />
                  ) : (
                    <input
                      type={field.type}
                      value={field.value}
                      onFocus={() =>
                        setFields((prev) =>
                          prev.map((f, idx) => (idx === i ? { ...f, state: "focused" } : f))
                        )
                      }
                      onBlur={() =>
                        setFields((prev) =>
                          prev.map((f, idx) =>
                            idx === i ? { ...f, state: f.value ? "filled" : "default" } : f
                          )
                        )
                      }
                      onChange={(e) => updateField(i, e.target.value)}
                      className={`w-full bg-transparent border-b text-[#2B1C0D] font-sans text-sm py-3 outline-none transition-colors ${
                        field.state === "error"
                          ? "border-[#C06B45]"
                          : field.state === "focused"
                          ? "border-[#2B1C0D]"
                          : "border-[#E5D9C8]"
                      }`}
                      placeholder=""
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="border border-[#2B1C0D] text-[#2B1C0D] text-xs tracking-[0.18em] uppercase px-8 py-4 hover:bg-[#2B1C0D] hover:text-[#F5EFE4] transition-colors font-sans mt-4"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
