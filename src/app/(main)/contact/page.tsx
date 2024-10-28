import type { Metadata } from "next";
import ContactUs from "../../_components/contact-us";

export const metadata: Metadata = {
  title: "TotalEngineering - Contact",
};

const ContactPage = () => {
  return (
    <div className="pt-24">
      <ContactUs />
    </div>
  );
};

export default ContactPage;
