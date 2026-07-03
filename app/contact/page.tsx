import ContactClient from "./ContactClient";
import { colors } from "@/lib/subpage-styles";

export const metadata = {
  title: "Contact",
  description: "Contact YT Giveaway Picker — send us a message.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-16" style={colors.page}>
      <div className="max-w-4xl mx-auto">
        <span
          className="font-black uppercase tracking-[0.2em] text-xs mb-3 block"
          style={colors.label}
        >
          Contact
        </span>
        <h1
          className="text-5xl md:text-6xl font-black leading-tight"
          style={colors.h}
        >
          Contact Us
        </h1>
        <p className="mt-4 max-w-xl" style={colors.body}>
          Questions, feedback or partnership inquiries — we're here to help.
        </p>

        <div className="mt-10">
          <ContactClient />
        </div>
      </div>
    </main>
  );
}
