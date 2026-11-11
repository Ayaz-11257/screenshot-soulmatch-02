import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

interface EnquiryContextValue {
  interest: string;
  setInterest: (value: string) => void;
  /** Pre-select an interest (optional) and scroll to the enquiry form. */
  openEnquiry: (interest?: string) => void;
}

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [interest, setInterest] = useState("");

  const openEnquiry = useCallback((value?: string) => {
    if (value) setInterest(value);
    const el = document.getElementById("enquire");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => document.getElementById("enquiry-name")?.focus({ preventScroll: true }), 600);
  }, []);

  return (
    <EnquiryContext.Provider value={{ interest, setInterest, openEnquiry }}>
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiry must be used inside EnquiryProvider");
  return ctx;
}
