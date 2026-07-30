import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact EEAS: Lagos Study Abroad Advisors" },
      {
        name: "description",
        content:
          "Get in touch with EEAS. Visit us at 44 Randle Avenue, Surulere, Lagos or reach us by phone and email.",
      },
      { property: "og:title", content: "Contact EEAS" },
      { property: "og:description", content: "Speak to an ICEF-accredited study abroad advisor in Lagos." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="border-b border-border bg-cream">
        <div className="container-x py-24 md:py-32">
          <p className="eyebrow">Contact us</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] md:text-7xl">
            We'd love to hear from you.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Whether you're just beginning to consider studying abroad or ready
            to submit, we're here. Reach out and an advisor will respond within
            one business day.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x grid gap-16 md:grid-cols-12">
          {/* Details */}
          <div className="md:col-span-5">
            <div className="space-y-10">
              {[
                {
                  icon: MapPin,
                  label: "Visit",
                  value: "44 Randle Avenue,\nSurulere, Lagos, Nigeria",
                },
                { icon: Phone, label: "Call", value: "+234 809 527 4838", href: "tel:+2348095274838" },
                { icon: Mail, label: "Email", value: "info@el-degaeas.com", href: "mailto:info@el-degaeas.com" },
              ].map((c) => (
                <div key={c.label} className="flex gap-5 border-t border-border pt-6">
                  <c.icon className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} />
                  <div>
                    <p className="eyebrow">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="mt-3 block font-serif text-2xl link-underline">
                        {c.value}
                      </a>
                    ) : (
                      <p className="mt-3 whitespace-pre-line font-serif text-2xl">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="border-t border-border pt-6">
                <p className="eyebrow">Follow</p>
                <div className="mt-4 flex gap-3">
                  <a href="#" aria-label="Instagram" className="rounded-full border border-border p-3 transition hover:bg-primary hover:text-primary-foreground">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="Facebook" className="rounded-full border border-border p-3 transition hover:bg-primary hover:text-primary-foreground">
                    <Facebook className="h-4 w-4" />
                  </a>
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                  Follow us for updates and scholarship opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            <div className="rounded-sm border border-border bg-card p-8 md:p-12">
              <p className="eyebrow">Send a message</p>
              <h2 className="mt-3 font-serif text-3xl">Tell us about your plans.</h2>

              {sent ? (
                <div className="mt-10 rounded-sm border border-primary bg-cream p-6">
                  <p className="font-serif text-xl text-foreground">Message received.</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                     Thanks! An EEAS advisor will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="mt-8 grid gap-6"
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <Field label="Full name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <Field label="Phone" name="phone" />
                    <Field label="Destination country" name="country" placeholder="e.g. United Kingdom" />
                  </div>
                  <TextArea label="How can we help?" name="message" required />
                  <button
                    type="submit"
                    className="mt-2 inline-flex w-fit rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-ink"
                  >
                    Send message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container-x text-center">
          <p className="mx-auto max-w-3xl font-serif text-3xl italic leading-snug md:text-4xl">
            "Focus on getting ready for school while we focus on getting you there.
            We take the stress off you."
          </p>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="container-x text-center">
          <p className="eyebrow">What happens next</p>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">From first message to enrolment.</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              { step: "01", title: "We listen", desc: "Share your goals, budget, and preferred destinations." },
              { step: "02", title: "We plan", desc: "We shortlist schools and map out a clear timeline." },
              { step: "03", title: "We support", desc: "From documents to visa, we guide you every step." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <p className="font-serif text-5xl text-gold">{item.step}</p>
                <h3 className="mt-4 font-serif text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border-0 border-b border-border bg-transparent py-3 text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </label>
  );
}

function TextArea({ label, name, required }: { label: string; name: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      <textarea
        name={name}
        required={required}
        rows={5}
        className="mt-2 w-full resize-none border-0 border-b border-border bg-transparent py-3 text-foreground outline-none transition focus:border-primary"
      />
    </label>
  );
}
