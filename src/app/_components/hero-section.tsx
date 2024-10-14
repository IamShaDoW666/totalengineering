import AnimatedHeroSlider from "./client/animated-slider";

const HeroSection = () => {
  return (
    <section
      style={{ height: "calc(100vh - 32px)" }}
      className="pt-24 bg-background text-foreground"
    >
      <AnimatedHeroSlider />
    </section>
  );
};

export default HeroSection;
