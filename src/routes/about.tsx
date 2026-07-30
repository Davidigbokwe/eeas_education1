import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import campus from "@/assets/campus.jpg";
import { ArrowUpRight, Award, Users, Globe } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About EEAS: ICEF accredited Study Abroad Agency" },
      {
        name: "description",
        content:
          "EEAS is an ICEF-accredited education and visa advisory agency in Nigeria helping students secure admission and visas overseas.",
      },
      { property: "og:title", content: "About EEAS" },
      { property: "og:description", content: "ICEF-accredited education and visa advisory agency in Nigeria." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-cream">
        <div className="container-x py-24 md:py-32">
          <p className="eyebrow">Our company</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] md:text-7xl">
            Guiding ambitious students to the world's most respected schools.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            EEAS is an ICEF-accredited education and visa advisory agency based in
            Lagos, Nigeria. We're committed to giving expert advice on every
            aspect of international education.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src={campus}
              alt="Ivy-covered university campus"
              width={1400}
              height={900}
              loading="lazy"
              className="aspect-[3/4] w-full rounded-sm object-cover"
            />
          </div>
          <div className="md:col-span-7 md:pt-4">
            <p className="eyebrow">Who are we?</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight">
              An advisory built on trust, precision and long relationships.
            </h2>
            <p className="mt-6 text-muted-foreground">
              We secure admission and assist in visa processing for prospective
              students into high schools, colleges and universities overseas.
              Every case is handled personally by an advisor who knows the
              institutions, the officers, and the paperwork.
            </p>

            <div className="mt-12 h-px w-full bg-border" />

            <p className="eyebrow mt-12">What do we do?</p>
            <h3 className="mt-4 font-serif text-3xl leading-tight">
              We make the complex processes simple.
            </h3>
            <p className="mt-6 text-muted-foreground">
              Making an application is not easy. You need advice and support
              during the visa and application processes to make sure you
              complete everything correctly. Why not let EEAS help? We guide
               you step by step. Call us today and you'll forever be glad you did.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background py-24">
        <div className="container-x">
          <p className="eyebrow">Why EEAS</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl md:text-5xl">
            accredited expertise. Nigerian roots. Global reach.
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              {
                icon: Award,
                t: "ICEF accredited",
                 d: "Recognized by the global body of education agents, a mark of ethical, professional practice.",
              },
              {
                icon: Globe,
                t: "Global partners",
                d: "Direct relationships with schools across the UK, US, Canada, EU, and beyond.",
              },
              {
                icon: Users,
                t: "Personal advisors",
                 d: "One-to-one guidance from application to arrival. You never navigate the system alone.",
              },
            ].map((f) => (
              <div key={f.t} className="border-t border-border pt-8">
                <f.icon className="h-7 w-7 text-gold" strokeWidth={1.2} />
                <p className="mt-6 font-serif text-2xl">{f.t}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container-x grid gap-8 py-20 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <h2 className="font-serif text-4xl md:text-5xl">
              Let's talk about where you're going.
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-gold-foreground hover:opacity-90"
            >
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="container-x">
          <p className="eyebrow">Why families choose EEAS</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl md:text-5xl">
            A calmer path to studying abroad.
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                t: "Honest guidance",
                d: "We tell you what's realistic: the right school for your goals, budget, and profile, never the most expensive option.",
              },
              {
                t: "One advisor, start to finish",
                d: "The same person walks you from first conversation to enrolment and visa, so nothing falls through the cracks.",
              },
              {
                t: "Proven outcomes",
                d: "A 98% visa success rate and partnerships with schools across the UK, US, Canada, and the EU.",
              },
            ].map((item) => (
              <div key={item.t} className="rounded-sm border border-border bg-card p-8">
                <p className="font-serif text-xl">{item.t}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
