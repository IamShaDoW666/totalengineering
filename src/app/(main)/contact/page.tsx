import type { Metadata } from "next";
import ContactUs from "../../_components/contact-us";
import { IMAGE, NAME, URL } from "@/lib/constants";
import type { Graph} from "schema-dts";


const description ="Specializing in custom metal fabrication for architectural and industrial projects. Our engineers bring your vision to life with precision and attention to detail"
const title = "Contact Us | Custom Metal Works for Architecture and Design"
const keywords = "Facade Cladding Services in Coimbatore|Stainless Steel Fabrication in Coimbatore|CNC Lathe Turning Services in"

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: keywords,
  robots:"follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  openGraph:{
    type:"website",
    url: URL,
    title: title,
    description: description,
    siteName:NAME,
    images:[{
     url: URL
    }]
  },
  
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const ContactPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://totaleng.in/#organization",
        "name": NAME,  
        "url": "https://totaleng.in",
        "logo": "https://totaleng.in/logo.png",  
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+919514399331",
          "contactType": "Sales",
          "areaServed": "IN",
          "availableLanguage": "English",
          "email": "Info@totaleng.in"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No.4/68H Sri Kanika Garden Senthampalayam",  
          "addressLocality": "Coimbatore",  
          "addressRegion": "Thamilnadu", 
          "postalCode": "12345",  
          "addressCountry": "IN"  
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://totaleng.in/#website",
        "url": "https://totaleng.in",
        "name": "Your Business Name",  
        "publisher": {
          "@id": "https://totaleng.in/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "ImageObject",
        "@id": "https://totaleng.in/#image",
        "url": "https://totaleng.in/image.jpg",  
        "width": "200",
        "height": "200",
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://totaleng.in/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@id": "https://totaleng.in",
              "name": "Home"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@id": "https://totaleng.in/about",
              "name": "About"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@id": "https://totaleng.in/contact",
              "name": "Contact"
            }
          }
        ]
      }
    ]
  };
  
  return (
    <div className="pt-24">
    <ContactUs />
    </div>
  );
};

export default ContactPage;
