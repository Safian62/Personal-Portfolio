import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { Experience, Title } from "../data";

const heroParticles = [...Array(30)].map((_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: `${15 + Math.random() * 20}s`,
  delay: `${Math.random() * 5}s`,
}));

export const Hero = () => {
  const particles = heroParticles;

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Animated hero background for Muhammad Safian, MERN Stack Developer"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: particle.left,
              top: particle.top,
              animation: `slow-drift ${particle.duration} ease-in-out infinite`,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {Title}
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building modern
                <span className="text-primary glow-text">
                  {" "}
                  web applications
                </span>
                <br />
                with
                <span className="font-serif italic font-normal text-white">
                  {" "}
                  MERN Stack.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Muhammad Safian — a {Title} specializing in React, Next,
                Node, Express and MongoDB. I build scalable, performant web
                applications that users love.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                <a href="#contact">Let's Connect</a>
              </Button>
              <AnimatedBorderButton>
                <a href="#projects">View My Work</a>
              </AnimatedBorderButton>
            </div>
          </div>
          <div className="relatice animate-fade-in animation-delay-300">
            <div className="relative max-w-sm mx-auto -translate-y-10">
              <div
                className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/assests/safian-photo.png"
                  alt="Portrait of Muhammad Safian, MERN Stack Developer"
                  className="w-full h-[70vh]  object-cover rounded-2xl"
                />

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">
                    {Experience}+
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
