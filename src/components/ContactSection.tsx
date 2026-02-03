"use client";

import { Button } from "@/components/ui/Button";
import { Github, Linkedin, Mail, Send, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const inputClass =
    "w-full rounded-md border border-border bg-indigo-400/10 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 disabled:opacity-50";

  const textareaClass =
    "w-full rounded-md border border-border bg-indigo-400/10 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 disabled:opacity-50 resize-none";

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/AdityaG1912",
      color: "hover:bg-slate-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aditya-gaikwad21/",
      color: "hover:bg-sky-400",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:aditya.gaikwad2013@gmail.com",
      color: "hover:bg-red-600",
    },
  ];

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "aditya.gaikwad2013@gmail.com",
      href: "mailto:aditya.gaikwad2013@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune",
      href: "#",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9657512131",
      href: "tel:+919657512131",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16 flex flex-col justify-center items-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have a project in mind? I&apos;d love to hear from you. Get in touch
            and let&apos;s build something impactful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  className="group flex items-start gap-4 p-4 rounded-lg border border-border bg-card/50 transition-all hover:border-indigo-400 hover:shadow-md hover:shadow-indigo-500/10"
                >
                  <div className="p-3 rounded-lg bg-indigo-400/10 text-indigo-400 group-hover:bg-indigo-400 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {method.label}
                    </p>
                    <p className="font-medium text-foreground group-hover:text-indigo-400 transition-colors">
                      {method.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Socials */}
            <div className="pt-4">
              <p className="text-sm font-medium text-muted-foreground mb-4">
                Follow me
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`p-3 rounded-lg border border-border bg-card ${social.color} hover:text-white transition-all`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    disabled={isLoading}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="example@example.com"
                    required
                    disabled={isLoading}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  required
                  disabled={isLoading}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project or just say hi..."
                  required
                  disabled={isLoading}
                  className={textareaClass}
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-indigo-400 hover:bg-indigo-500 text-white gap-2 group"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>

              {submitted && (
                <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/10">
                  <p className="text-sm text-green-400 font-medium">
                    ✓ Message sent successfully. I&apos;ll get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
