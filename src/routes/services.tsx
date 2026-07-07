import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import advisory from "@/assets/advisory.jpg";
import visa from "@/assets/visa.jpg";
import { Check, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services: EEAS Education & Visa Advisory" },
      {
        name: "description",
        content:
          "Educational advisory and visa advisory services: school placement, applications, scholarships, UK/US/EU visas and passport processing.",
      },
      { property: "og:title", content: "EEAS Services" },
      { property: "og:description", content: "Educational and visa advisory services for students going abroad." },
    ],
  }),
  component: ServicesPage,
});

const educational = [
  "Identification of the best-fit schools for students",
  "Advice on the application process and procedures",
  "Obtaining of references and school reports",
  "Administration and invigilation of entrance examinations",
  "Arranging school open days in Nigeria and abroad",
  "Career advice and guidance",
  "Scholarship and bursary application guidance",
];

const visaServices = [
  "Affordable travel visa and passport processing fees",
  "Latest visa documentation and up-to-date information",
  "Fast UK, US and EU passport renewal",
  "Legalization of documents and visa authorization / invitations",
  "Birth, death and marriage certificate processing",
  "Airport drop-off and pick-up",
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-cream">
        <div className="container-x py-24 md:py-32">
          <p className="eyebrow">Our services</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] md:text-7xl">
            End-to-end support, from first application to first flight.
          </h1>
        </div>
      </section>

      {/* Educational */}
      <section id="educational" className="py-24">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="sticky top-24">
              <p className="eyebrow">01 · Educational Advisory</p>
              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                Placing students where they thrive.
              </h2>
              <p className="mt-6 text-muted-foreground">
                We identify institutions that fit your academic ambition,
                 budget, and life plan, then walk you through every gate to
                admission.
              </p>
              <img
                src={advisory}
                alt="Students in library"
                width={1200}
                height={900}
                loading="lazy"
                className="mt-10 aspect-[4/3] w-full rounded-sm object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <ul className="divide-y divide-border border-y border-border">
              {educational.map((item, i) => (
                <li key={item} className="flex items-start gap-6 py-6">
                  <span className="mt-1 font-serif text-sm text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-1 items-start gap-4">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
                    <p className="text-lg text-foreground">{item}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Visa */}
      <section id="visa" className="border-t border-border bg-background py-24">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7 md:order-2">
            <div className="sticky top-24">
              <p className="eyebrow">02 · Visa Advisory</p>
              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                Paperwork handled. Borders opened.
              </h2>
              <p className="mt-6 text-muted-foreground">
                We keep pace with changing embassy requirements so you don't
                have to. From renewals to legalizations, we handle it end to end.
              </p>
              <img
                src={visa}
                alt="Passport and world map"
                width={1200}
                height={900}
                loading="lazy"
                className="mt-10 aspect-[4/3] w-full rounded-sm object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-5 md:order-1">
            <ul className="divide-y divide-border border-y border-border">
              {visaServices.map((item, i) => (
                <li key={item} className="flex items-start gap-6 py-6">
                  <span className="mt-1 font-serif text-sm text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-1 items-start gap-4">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
                    <p className="text-base text-foreground">{item}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-sm border border-border bg-cream p-6">
              <p className="eyebrow">For tour operators & corporates</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Interested in our services for your organization? Reach out at{" "}
                <a href="mailto:edegaeas@outlook.com" className="link-underline text-foreground">
                  edegaeas@outlook.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container-x grid gap-8 py-20 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <h2 className="font-serif text-4xl md:text-5xl">
              Ready to begin? We'll take it from here.
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-gold-foreground hover:opacity-90"
            >
              Book a consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
