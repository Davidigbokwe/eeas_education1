import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, GraduationCap, Plane, Compass } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero.jpg";
import advisoryImg from "@/assets/advisory.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream">
        <div className="container-x grid gap-12 pt-16 pb-24 md:grid-cols-12 md:gap-8 md:pt-24 md:pb-32">
          <div className="md:col-span-6 md:pt-8">
            <p className="eyebrow">ICEF accredited · Est. Lagos</p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.02] text-foreground md:text-7xl">
              Your passage to the world's best classrooms.
            </h1>
            <p className="mt-8 max-w-md text-lg text-muted-foreground">
              We secure admission and process visas for Nigerian students entering
               high schools, colleges and universities overseas, with expert
              guidance at every step.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-ink"
              >
                Start your application
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link to="/services" className="link-underline text-sm text-foreground">
                Explore our services
              </Link>
            </div>

            <dl className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["12+", "Years advising"],
                ["30+", "Partner countries"],
                ["98%", "Visa success"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-serif text-3xl text-foreground">{n}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-6">
            <div className="relative">
              <img
                src={heroImg}
                width={1600}
                height={1200}
                alt="Student on a university campus at golden hour"
                className="aspect-[4/5] w-full rounded-sm object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 hidden max-w-[220px] rounded-sm bg-background p-5 shadow-xl md:block">
                <p className="eyebrow text-gold">The promise</p>
                <p className="mt-2 font-serif text-lg leading-snug">
                  We take the stress off you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="border-t border-border bg-background py-24">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl md:text-5xl">
                Two disciplines, one seamless journey abroad.
              </h2>
            </div>
            <Link to="/services" className="link-underline text-sm text-foreground">
              All services →
            </Link>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {[
              {
                icon: GraduationCap,
                title: "Educational Advisory",
                copy: "Best-fit school selection, applications, references, entrance exams, career guidance and scholarship placement.",
              },
              {
                icon: Plane,
                title: "Visa Advisory",
                 copy: "Affordable visa and passport processing for UK, US and EU, with document legalization and airport support.",
              },
            ].map((s) => (
              <Link
                to="/services"
                key={s.title}
                className="group relative flex flex-col justify-between rounded-sm border border-border bg-card p-8 transition hover:border-primary md:p-10"
              >
                <div>
                  <s.icon className="h-8 w-8 text-gold" strokeWidth={1.2} />
                  <h3 className="mt-8 font-serif text-2xl">{s.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                </div>
                <div className="mt-10 flex items-center gap-2 text-sm text-foreground">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SPLIT */}
      <section className="py-24">
        <div className="container-x grid gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <img
              src={advisoryImg}
              alt="Students studying together in a library"
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-sm object-cover"
            />
          </div>
          <div className="md:col-span-7 md:pt-6">
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Expert advice on every corner of international education.
            </h2>
            <p className="mt-8 max-w-xl text-muted-foreground">
              Making an application is not an easy process. You want advice and
              support during the visa and application stages to make sure you
               complete everything correctly. EEAS guides you step by step. We
              make the complex processes simple.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {[
                { icon: Compass, t: "Best-fit matching", d: "We map your ambitions to the schools most likely to admit and support you." },
                { icon: GraduationCap, t: "Scholarships", d: "Guidance through scholarship and bursary applications from start to award." },
              ].map((f) => (
                <div key={f.t}>
                  <f.icon className="h-6 w-6 text-gold" strokeWidth={1.2} />
                  <p className="mt-4 font-serif text-lg">{f.t}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
                </div>
              ))}
            </div>

            <Link to="/about" className="link-underline mt-12 inline-block text-sm">
              More about EEAS →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-x grid gap-8 py-20 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <p className="eyebrow text-gold">Ready when you are</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Focus on getting ready for school. We'll get you there.
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-gold-foreground transition hover:opacity-90"
            >
              Book a consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="container-x">
          <p className="eyebrow">How we help</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl md:text-5xl">
            From first question to final visa.
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                t: "Discover and shortlist",
                d: "We learn your goals and budget, then match you with the schools most likely to admit and support you.",
              },
              {
                t: "Apply and secure",
                d: "We handle applications, references, and scholarships so every detail is submitted correctly and on time.",
              },
              {
                t: "Visa and arrival",
                d: "From document legalization to airport support, we guide you through the final steps to your new campus.",
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
