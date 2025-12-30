import React from "react";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "nguyen.qchuc@gmail.com",
      href: "mailto:nguyen.qchuc@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/quangchuc",
      href: "https://linkedin.com/in/quangchuc",
      external: true,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/quangchuc",
      href: "https://github.com/quangchuc",
      external: true,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Paris (remote-friendly)",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title">Contact Me</h2>
        </Reveal>

        <div className="max-w-2xl mx-auto text-center">
          <Reveal delay={100}>
            <p className="text-xl text-muted-foreground mb-10">
              Let's talk if you're building serious DeFi infrastructure.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactLinks.map((link, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-6 rounded-xl",
                    "border border-border",
                    "bg-background/50",
                    "hover:border-primary/30 transition-colors duration-300"
                  )}
                >
                  <link.icon className="h-6 w-6 text-primary mb-3 mx-auto" />
                  <p className="font-medium mb-1">{link.label}</p>
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{link.value}</p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
