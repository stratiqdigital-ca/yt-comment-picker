// This file stays in app/contact/page.tsx
// Move the ContactPage component to app/contact/ContactClient.tsx
// and import it here — this keeps metadata working with 'use client'
'use client'
import ContactClient from "./ContactClient"

export default function ContactPage() {
  return <ContactClient />
}