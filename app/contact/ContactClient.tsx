// This file stays in app/contact/page.tsx
// Move the ContactPage component to app/contact/ContactClient.tsx
// and import it here — this keeps metadata working with 'use client'

import ContactClient from "./ContactClient"

export const metadata = {
  title: "Contact | YT Giveaway Picker",
  description:
    "Contact YT Giveaway Picker for support, verification review, feedback or business inquiries. We reply within 48 hours.",
}

export default function ContactPage() {
  return <ContactClient />
}