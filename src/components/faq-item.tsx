"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { faqs } from "@/content/faqs";

const FaqContext = createContext<{
  active: number | null;
  setActive: (index: number | null) => void;
}>({ active: null, setActive: () => {} });

export function FaqGroup({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<number | null>(null);
  return (
    <FaqContext.Provider value={{ active, setActive }}>
      {children}
    </FaqContext.Provider>
  );
}

// This plus is the original reference SVG, preserved verbatim.
export function FaqItem({ index }: { index: number }) {
  const { active, setActive } = useContext(FaqContext);
  const open = active === index;
  const item = faqs[index];
  const parts = item.answer.split("nenad@popadic.co");
  return (
    <div className="faq w-dropdown">
      <button
        type="button"
        id={`faq-toggle-${index}`}
        className={`faq-toggle w-dropdown-toggle${open ? " w--open" : ""}`}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        onClick={() => setActive(open ? null : index)}
      >
        <span className="faq-heading">{item.question}</span>
        <span className="faq-icon" aria-hidden="true">
          <svg
            className="faq-icon-item"
            fill="none"
            viewBox="0 0 15 15"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="faq-icon-v-line"
              d="M6.5625 0.9375C6.5625 0.419733 6.98223 0 7.5 0C8.01777 0 8.4375 0.419733 8.4375 0.9375V14.0625C8.4375 14.5803 8.01777 15 7.5 15C6.98223 15 6.5625 14.5803 6.5625 14.0625V0.9375Z"
              fill="currentColor"
            />
            <path
              d="M0.9375 8.4375C0.419733 8.4375 2.26323e-08 8.01777 0 7.5C-2.26323e-08 6.98223 0.419733 6.5625 0.9375 6.5625L14.0625 6.5625C14.5803 6.5625 15 6.98223 15 7.5C15 8.01777 14.5803 8.4375 14.0625 8.4375L0.9375 8.4375Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </button>
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-toggle-${index}`}
        aria-hidden={!open}
        className={`faq-list w-dropdown-list${open ? " w--open" : ""}`}
      >
        <div className="faq-answer-wrap">
          <div className="faq-answer-item">
            <p className="faq-answer">
              {parts[0]}
              {parts.length > 1 && (
                <>
                  <a
                    href="mailto:nenad@popadic.co?subject=Not%20Sure%20Which%20Plan%20to%20Choose"
                    tabIndex={open ? 0 : -1}
                  >
                    nenad@popadic.co
                  </a>
                  {parts[1]}
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
