import { Send } from "lucide-react";
import { Button } from "@/components/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { contactInfo } from "../data";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ type: null, message: "" });

  useEffect(() => {
    if (toast.type) {
      const timer = setTimeout(
        () => setToast({ type: null, message: "" }),
        4000,
      );
      return () => clearTimeout(timer);
    }
  }, [toast]);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post(
        "https://api.web3forms.com/submit",
        {
          access_key: "df6e25c2-1fde-4fbb-a98f-f140b52539c3",
          name,
          email,
          subject,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      );

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setToast({ type: "success", message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setToast({ type: "error", message: "Failed to send message." });
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {toast.type && (
        <div
          className="fixed bottom-6 right-6 flex items-center gap-3 p-4 rounded-xl shadow-lg z-50 transition-opacity duration-300"
          style={{
            backgroundColor:
              toast.type === "success"
                ? "rgba(16,185,129,0.9)"
                : "rgba(239,68,68,0.9)",
            color: "#fff",
          }}
        >
          <span className="font-semibold">
            {toast.type === "success" ? "✔" : "✖"}
          </span>
          <p className="text-sm">{toast.message}</p>
        </div>
      )}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>

        <div className="flex justify-center items-start flex-col sm:flex-row-reverse gap-10">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300 w-full sm:w-[45%]">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  type="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>

          <div className="space-y-6 animate-fade-in animation-delay-400 w-full sm:w-[45%]">
            <div className="glass rounded-3xl p-4">
              <h3 className="text-xl font-semibold mb-4">
                Let's Work Together
              </h3>
              <p>
                I'm always excited to discuss new opportunities, innovative
                projects, or potential collaborations. Whether you're looking
                for a technical leader, a full-stack developer, or a mentor for
                your team, I'd love to hear from you.
              </p>
            </div>
            <div className="glass rounded-3xl p-4">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
