"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS, FAQ_CATEGORIES } from "@/data/faq";
import { cn } from "@/lib/utils";

export default function FAQAccordion() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered =
    activeCategory === "all"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((f) => f.category === activeCategory);

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <div>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {FAQ_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5"
            )}
            style={
              activeCategory === cat.id
                ? {
                    backgroundColor: "var(--color-primary)",
                    color: "#fff",
                  }
                : {
                    backgroundColor: "var(--color-surface-alt)",
                    color: "var(--color-text-muted)",
                  }
            }
          >
            <span>{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Questions */}
      <div className="space-y-3">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border overflow-hidden transition-all"
            style={{
              borderColor: openId === item.id ? "var(--color-primary)" : "var(--color-surface-alt)",
              backgroundColor: "var(--color-surface)",
            }}
          >
            <button
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
              onClick={() => toggle(item.id)}
            >
              <span
                className="font-medium text-sm leading-snug pr-2"
                style={{ color: "var(--color-text-main)" }}
              >
                {item.question}
              </span>
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                style={{
                  backgroundColor:
                    openId === item.id ? "var(--color-primary)" : "var(--color-surface-alt)",
                  color: openId === item.id ? "#fff" : "var(--color-text-muted)",
                }}
              >
                {openId === item.id ? <Minus size={13} /> : <Plus size={13} />}
              </span>
            </button>

            <div
              className={cn(
                "overflow-hidden transition-all duration-300",
                openId === item.id ? "max-h-[600px]" : "max-h-0"
              )}
            >
              <div className="px-5 pb-5 border-t" style={{ borderColor: "var(--color-surface-alt)" }}>
                <p
                  className="text-sm leading-relaxed faq-answer pt-4"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-3xl mb-3">🤔</p>
          <p className="font-medium" style={{ color: "var(--color-text-muted)" }}>
            Tidak ada FAQ di kategori ini
          </p>
        </div>
      )}
    </div>
  );
}
