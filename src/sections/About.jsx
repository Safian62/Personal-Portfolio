import { highlights, Title } from "../data";


export const About = () => {
  return (
    <section id="about" className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            About Me
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Passionate about
            <span className="font-serif italic font-normal text-white">
              {" "}
              building modern web apps.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            I’m a MERN stack developer focused on creating responsive, scalable,
            and user-friendly web applications using modern JavaScript
            technologies.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a passionate {Title} focused on building modern and
                responsive web applications. My journey started with curiosity
                about how websites work, which led me to specialize in
                full-stack web development.
              </p>
              <p>
                I work mainly with the MERN stack — MongoDB, Express.js, React,
                and Node.js — building scalable applications and RESTful APIs. I
                enjoy creating clean user interfaces and writing efficient
                backend logic.
              </p>
              <p>
                I'm always learning new technologies, improving my skills, and
                exploring modern tools in the JavaScript ecosystem to build
                better digital experiences.
              </p>
            </div>

            {/* <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div> */}
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
