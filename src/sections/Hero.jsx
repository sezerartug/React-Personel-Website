import React from "react";
import Button from "../components/Button";
import AnimatedBorderButton from "../components/AnimatedBorderButton.jsx";
import { FaLinkedin, FaGithub, FaChevronDown } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "GraphQL", 
  "PostgreSQL", "MongoDB", "Vercel", "Tailwind CSS", 
  "Figma", "Git", "GitHub Actions",
];

// 1. Rastgele değerleri bileşen dışına taşıyarak 'impure function' hatasını engelliyoruz.
const BACKGROUND_DOTS = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: `${15 + Math.random() * 20}s`,
  delay: `${Math.random() * 5}s`,
}));

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="../hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots - Fixed via Global Constant */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {BACKGROUND_DOTS.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer
                <span className="animate-pulse">• Frontend Developer</span>
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
                Simple <span className="text-primary glow-text">solutions</span>
                <br /> for complex <br />
                <span className="font-serif italic font-normal text-white">problems.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in">
                I'm John Doe - crafting clean code and scalable interfaces.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Button size="lg">
                Contact Me
                <img src="https://img.icons8.com/?size=100&id=7789&format=png&color=ffffff" className="w-5 h-5 ml-2" alt="" />
              </Button>
              <AnimatedBorderButton>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Download CV
                  <img src="https://img.icons8.com/?size=100&id=59783&format=png&color=ffffff" className="w-5 h-5" alt="" />
                </span>
              </AnimatedBorderButton>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative animate-fade-in">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2">
                <img src="../profile.png" alt="Profile" className="w-full aspect-4/5 object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Marquee */}
        <div className="mt-20">
          <div className="flex animate-marquee">
            {[...skills, ...skills].map((skill, idx) => (
              <div key={idx} className="shrink-0 px-8 py-4">
                <span className="text-xl font-semibold text-muted-foreground/50">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <FaChevronDown className="w-6 h-6 animate-bounce text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;