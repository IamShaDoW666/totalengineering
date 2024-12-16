import type { Metadata } from "next";
import AboutUs from "../../_components/about-us";
import { IMAGE, NAME, URL } from "@/lib/constants";
import type { Graph } from "schema-dts";

const description =
  "Learn more about our journey in metal fabrication, architectural metal works, CNC machining, stainless steel projects, and facade cladding expertise";
const title =
  "About Us | Metal Fabrication Experts | CNC & Stainless Steel Specialists";
const keywords =
  "Metal fabrication services|Architectural metal works|Stainless steel fabrication";
export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: keywords,
  robots:
    "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  openGraph: {
    type: "website",
    url: URL,
    title: title,
    description: description,
    siteName: NAME,
    images: [
      {
        url: "https://totaleng.in/_next/image?url=%2Flogo.webp&w=128&q=75",
      },
    ],
  },

  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const AboutPage = () => {
  const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://totaleng.in/#organization",
        name: NAME,
        url: "https://totaleng.in",
      },
      {
        "@type": "WebSite",
        "@id": "https://totaleng.in/#website",
        url: "https://totaleng.in",
        name: NAME,
        publisher: { "@id": "https://totaleng.in/#organization" },
        inLanguage: "en-US",
      },
      {
        "@type": "ImageObject",
        "@id": IMAGE,
        url: IMAGE,
        width: "200",
        height: "200",
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://totaleng.in/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: { "@id": "https://totaleng.in", name: "Home" },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: { "@id": "https://totaleng.in", name: "About" },
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://totaleng.in/#webpage",
        url: URL,
        name: NAME,
        datePublished: "2025-02-05T11:26:39+00:00",
        dateModified: "2025-12-12T19:17:19+00:00",
        about: { "@id": "https://totaleng.in/#organization" },
        isPartOf: { "@id": "https://totaleng.in/#website" },
        primaryImageOfPage: { "@id": IMAGE },
        inLanguage: "en-US",
      },
      {
        "@type": "Person",
        "@id": URL,
        name: "Johns Abraham",
        url: URL,
        image: {
          "@type": "ImageObject",
          "@id": URL,
          url: URL,
          caption: NAME,
          inLanguage: "en-US",
        },
        sameAs: [URL],
        worksFor: { "@id": "https://totaleng.in/#organization" },
      },
      {
        "@type": "Article",
        headline: title,
        keywords: keywords,
        datePublished: "2024-02-05T11:26:39+00:00",
        dateModified: "2025-12-12T19:17:19+00:00",
        author: { "@id": URL, name: "Johns Abraham" },
        publisher: { "@id": "https://totaleng.in/#organization" },
        description: description,
        name: NAME,
        "@id": "https://totaleng.in/#richSnippet",
        isPartOf: { "@id": "https://totaleng.in/#webpage" },
        image: { "@id": IMAGE },
        inLanguage: "en-US",
        mainEntityOfPage: { "@id": "https://totaleng.in/#webpage" },
      },
    ],
  };
  return (
    <div className="pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutUs />
    </div>
  );
};

export default AboutPage;
