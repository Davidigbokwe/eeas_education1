import { Link } from "@tanstack/react-router";
import { type ReactNode, useState } from "react";
import { Menu, X, Instagram, Facebook } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-white">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.jpg"
            alt="EEAS, Education & Visa Advisory"
            className="h-12 w-auto rounded-sm"
          />
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="link-underline text-sm text-foreground/80 [&.active]:text-foreground"
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:bg-ink md:inline-flex"
        >
          Book a consult
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <div className="container-x flex flex-col gap-4 py-6">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground"
            >
              Book a consult
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container-x grid gap-12 py-16 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">EEAS</p>
          <p className="mt-3 max-w-xs text-sm text-primary-foreground/70">
            An ICEF-accredited education and visa advisory agency guiding
            students from Nigeria to the world's best schools.
          </p>
        </div>
        <div className="text-sm text-primary-foreground/80">
          <p className="eyebrow mb-3 text-gold">Visit</p>
          <p>44 Randle Avenue</p>
          <p>Surulere, Lagos</p>
          <p className="mt-4">+234 809 527 4838</p>
          <a href="mailto:info@el-degaeas.com" className="link-underline mt-1 inline-block">
            info@el-degaeas.com
          </a>

          {/* Testing */}
        </div>
        <div className="text-sm text-primary-foreground/80">
          <p className="eyebrow mb-3 text-gold">Follow</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="rounded-full border border-primary-foreground/20 p-2 transition hover:bg-primary-foreground hover:text-primary">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="rounded-full border border-primary-foreground/20 p-2 transition hover:bg-primary-foreground hover:text-primary">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 max-w-xs italic text-primary-foreground/60">
            "Focus on getting ready for school while we focus on getting you there."
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-6 text-xs text-primary-foreground/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} EEAS. All rights reserved.</p>
          <p>ICEF accredited · Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
