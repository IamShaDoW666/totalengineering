import type { Metadata } from "next";
import AboutUs from "../../_components/about-us";

export const metadata: Metadata = {
  title: "TotalEngineering - About",
};
const AboutPage = () => {
  return (
    <div className="pt-24">
      <AboutUs />
    </div>
  );
};

export default AboutPage;
