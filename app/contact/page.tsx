import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { EnquiryForm } from "@/components/Enquiry";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact us",
  description: `Call ${site.name} or send an enquiry. Tell us where and when you want to go, and we will call you back with a plan and a price.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const rows = [
    { icon: Phone, label: "Call", value: site.phone, href: `tel:${site.phoneHref}` },
    { icon: MessageCircle, label: "WhatsApp", value: site.whatsapp ? site.phone : "", href: `https://wa.me/${site.whatsapp}` },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Clock, label: "Hours", value: site.hours },
    { icon: MapPin, label: "Office", value: site.address },
  ].filter((row) => row.value);
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-4 pt-8 pb-16 sm:px-6 md:grid-cols-2 md:pt-16 md:pb-24">
      <div>
        <p className="kicker">Contact us</p>
        <h1 className="text-hero mt-2">Say hello</h1>
        <p className="mt-5 max-w-md text-lg text-ink-soft">The quickest way to plan your Himachal trip is a phone call or a WhatsApp message. If you would rather write, send the form and we will call you back.</p>
        <dl className="mt-8 grid gap-5">
          {rows.map(({ icon: Icon, label, value, href }) => (
            <div key={label}>
              <dt className="flex items-center gap-2 text-sm text-ink-soft">
                <Icon aria-hidden="true" className="size-4 shrink-0 text-sea" /> {label}
              </dt>
              <dd className="mt-0.5 pl-6 font-medium">
                {href ? <a href={href} className="text-link inline-flex min-h-11 items-center break-all">{value}</a> : value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="card bg-cream p-5 sm:p-7">
        <h2 className="text-2xl font-bold">Send an enquiry</h2>
        <EnquiryForm contact={{ phone: site.phone, phoneHref: site.phoneHref }} className="mt-5" />
      </div>
    </section>
  );
}
