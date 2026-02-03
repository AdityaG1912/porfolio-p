"use client";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-pretty">
          About Me
        </h2>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I&apos;m a full-stack developer with hands-on experience building
            production-grade web applications using Next.js, React, and the MERN
            stack. I&apos;ve worked on systems serving thousands of users,
            focusing on performance, SEO, and scalable integrations like GraphQL
            CMS and CRM workflows. I care about clean UI, efficient data flow,
            and measurable improvements in user experience and system
            reliability.
          </p>
        </div>
      </div>
    </section>
  );
}
