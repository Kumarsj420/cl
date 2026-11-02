import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${site.name} uses the details you share in an enquiry.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-2xl space-y-4 px-4 pt-8 pb-16 text-ink-soft sm:px-6 md:pt-16">
      <h1 className="text-landing text-ink">Privacy policy</h1>
      <h2 className="pt-4 text-2xl font-bold text-ink">What we collect</h2>
      <p>When you send an enquiry, we receive what you enter: your name, phone number, travel plans and, if you add it, your email and message. We also note which page you sent it from.</p>
      <h2 className="pt-4 text-2xl font-bold text-ink">How we use it</h2>
      <p>We use these details to reply to your enquiry and plan your trip. If you book, we share what is needed with the hotels, transport companies and other suppliers on your trip. We do not sell your details.</p>
      <h2 className="pt-4 text-2xl font-bold text-ink">How long we keep it</h2>
      <p>Enquiries arrive by email. We delete those that do not lead to a trip when they are no longer useful, and keep booking records for as long as the law requires.</p>
      <h2 className="pt-4 text-2xl font-bold text-ink">Your choices</h2>
      <p>To see, correct or delete your details, write to <a className="text-link" href={`mailto:${site.email}`}>{site.email}</a> or call <a className="text-link" href={`tel:${site.phoneHref}`}>{site.phone}</a>.</p>
    </article>
  );
}
