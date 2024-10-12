import AnimatedHeroSlider from "./client/animated-slider";

const HeroSection = () => {
  return (
    <section
      style={{ height: "calc(100vh - 64px)" }}
      className="mt-16 bg-white text-foreground"
    >
      <AnimatedHeroSlider />
    </section>
  );
};

export default HeroSection;
