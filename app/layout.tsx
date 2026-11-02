import type { Metadata, Viewport } from "next";
import { Caveat, Figtree, Poppins } from "next/font/google";
import "./globals.css";
import { Footer, Header, JsonLd, QuickActions } from "@/components/Chrome";
import { EnquiryProvider } from "@/components/Enquiry";
import { absoluteUrl, site, siteUrl } from "@/content/site";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-poppins", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], weight: ["600"], variable: "--font-caveat", display: "swap" });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: { default: `${site.name}: ${site.tagline}`, template: `%s | ${site.name}` },
  description: `Himachal holiday packages from ${site.name}: Shimla, Manali, Dharamshala, Dalhousie, Jibhi, Spiti, Kasol and more. Call, WhatsApp or send an enquiry.`,
  // Keeps previews and unconfigured deployments out of search results.
  robots: siteUrl ? undefined : { index: false, follow: false },
  openGraph: { type: "website", locale: "en_IN", siteName: site.name },
};

export const viewport: Viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${poppins.variable} ${caveat.variable} ${figtree.variable}`}>
      <body className="min-h-dvh">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-30 focus:rounded-md focus:bg-paper focus:p-3 focus:font-semibold">
          Skip to content
        </a>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: site.name,
            url: absoluteUrl("/"),
            telephone: site.phone,
            email: site.email,
            ...(site.address ? { address: site.address } : {}),
          }}
        />
        <EnquiryProvider contact={{ phone: site.phone, phoneHref: site.phoneHref }}>
          <Header />
          <main id="main" tabIndex={-1} className="outline-none">{children}</main>
          <Footer />
          <QuickActions />
        </EnquiryProvider>
      </body>
    </html>
  );
}
