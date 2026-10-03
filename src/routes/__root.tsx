import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, HeadContent, Scripts } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { locations, treatments, phone, email, whatsapp } from "@/lib/site-data";
import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: () => <main className="site-container section-space"><h1 className="display-heading text-6xl">Pagina non trovata</h1><Button asChild className="mt-8"><Link to="/">Torna all'inizio</Link></Button></main>,
});

function RootShell({ children }: { children: ReactNode }) {
  return <html lang="it"><head><HeadContent /></head><body>{children}<Scripts /></body></html>;
}
function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return <QueryClientProvider client={queryClient}><SiteHeader /><Outlet /><SiteFooter /></QueryClientProvider>;
}
function SiteHeader() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/chi-sono/", label: "Chi sono" },
    { to: "/#trattamenti", label: "Trattamenti" },
    { to: "/#sedi", label: "Dove ricevo" },
    { to: "/#recensioni", label: "Recensioni" },
  ];
  return <header className="relative z-20 bg-background border-b border-border">
    <div className="site-container flex h-[84px] items-center justify-between gap-5">
      <Link to="/" className="flex flex-col leading-none shrink-0" aria-label="Angelo Barone, torna alla homepage"><span className="font-display text-[32px] font-medium">Angelo Barone</span><span className="mt-1 text-[10px] uppercase tracking-[.18em]">Osteopata D.O.</span></Link>
      <nav aria-label="Navigazione principale" className="hidden lg:flex items-center gap-9 text-[14px] font-medium">
        {links.map(link => link.to.includes('#') ? <a key={link.label} href={link.to} className="hover:underline underline-offset-8">{link.label}</a> : <Link key={link.label} to={link.to} className="hover:underline underline-offset-8">{link.label}</Link>)}
      </nav>
      <div className="hidden lg:block"><Button asChild size="lg"><a href="/#prenota">Prenota una seduta</a></Button></div>
      <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? 'Chiudi menu' : 'Apri menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav aria-label="Navigazione mobile" className="lg:hidden site-container flex flex-col gap-5 py-6 border-t border-border text-base">
      {links.map(link => link.to.includes('#') ? <a key={link.label} href={link.to} onClick={() => setOpen(false)}>{link.label}</a> : <Link key={link.label} to={link.to} onClick={() => setOpen(false)}>{link.label}</Link>)}
      <Button asChild className="self-start"><a href="/#prenota" onClick={() => setOpen(false)}>Prenota una seduta</a></Button>
    </nav>}
  </header>;
}
function SiteFooter() {
  const heading = "text-light-green text-sm mb-4";
  return <footer className="bg-deep-green text-primary-foreground pt-16 pb-10">
    <div className="site-container grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_1fr_1fr] lg:gap-14">
      <div><Link to="/" className="font-display text-3xl leading-tight">Angelo Barone — Osteopata D.O.</Link><p className="mt-3 text-[15px] leading-relaxed max-w-[300px]">Osteopata con studio a San Donato Milanese, Cantù e Giussano.</p></div>
      <div><p className={heading}>Sedi</p><ul className="space-y-2 text-[15px]">{locations.map(l => <li key={l.slug}><Link to={l.slug}>{l.name}</Link></li>)}</ul></div>
      <div><p className={heading}>Trattamenti</p><ul className="space-y-2 text-[15px]">{footerTreatments.map(slug => { const t = treatments.find(x => x.slug === slug)!; return <li key={slug}><Link to="/trattamenti/$slug/" params={{ slug }}>{t.title}</Link></li>; })}</ul></div>
      <div><p className={heading}>Contatti</p><ul className="space-y-2 text-[15px]"><li><a href={phone.href}>{phone.label}</a></li><li><a href={`mailto:${email}`} className="break-all">{email}</a></li><li><a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a></li></ul></div>
    </div>
    <div className="site-container border-t border-light-green/30 mt-12 pt-6 text-sm text-light-green leading-relaxed space-y-2"><p>Le informazioni contenute in questo sito hanno finalità divulgativa e non sostituiscono il parere di un professionista sanitario qualificato.</p><p>© 2026 Angelo Barone — Osteopata D.O. · P.IVA IT10629980961</p></div>
  </footer>;
}
const footerTreatments = ["mal-di-schiena", "cervicale-e-cefalee", "pavimento-pelvico", "gravidanza", "sport-e-postura", "disturbi-viscerali"];
