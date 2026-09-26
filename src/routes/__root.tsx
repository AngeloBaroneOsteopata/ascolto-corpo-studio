import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, HeadContent, Scripts } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    { to: "/chi-sono", label: "Chi sono" },
    { to: "/#come-lavoro", label: "Come lavoro" },
    { to: "/#trattamenti", label: "Trattamenti" },
    { to: "/#sedi", label: "Dove ricevo" },
  ];
  return <header className="relative z-20 bg-background border-b border-border">
    <div className="site-container flex h-[84px] items-center justify-between gap-5">
      <Link to="/" className="flex flex-col leading-none shrink-0" aria-label="Angelo Barone, torna alla homepage"><span className="font-display text-[32px] font-medium">Angelo Barone</span><span className="mt-1 text-[10px] uppercase tracking-[.18em]">Osteopata D.O.</span></Link>
      <nav aria-label="Navigazione principale" className="hidden lg:flex items-center gap-9 text-[14px] font-medium">
        {links.map(link => link.to.includes('#') ? <a key={link.label} href={link.to} className="hover:underline underline-offset-8">{link.label}</a> : <Link key={link.label} to={link.to} className="hover:underline underline-offset-8">{link.label}</Link>)}
      </nav>
      <div className="hidden lg:block"><Button asChild size="lg"><a href="https://wa.me/393288778394" target="_blank" rel="noopener noreferrer">Prenota una visita</a></Button></div>
      <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? 'Chiudi menu' : 'Apri menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav aria-label="Navigazione mobile" className="lg:hidden site-container flex flex-col gap-5 py-6 border-t border-border text-base">
      {links.map(link => link.to.includes('#') ? <a key={link.label} href={link.to} onClick={() => setOpen(false)}>{link.label}</a> : <Link key={link.label} to={link.to} onClick={() => setOpen(false)}>{link.label}</Link>)}
      <a href="https://wa.me/393288778394" target="_blank" rel="noopener noreferrer" className="font-medium">Prenota una visita</a>
    </nav>}
  </header>;
}
function SiteFooter() {
  return <footer className="bg-deep-green text-primary-foreground py-14">
    <div className="site-container grid gap-10 md:grid-cols-[1fr_1fr] md:gap-20">
      <div><Link to="/" className="font-display text-4xl">Angelo Barone</Link><p className="mt-2 text-sm">Osteopata D.O. · Iscritto al R.O.I.</p></div>
      <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm"><Link to="/chi-sono">Chi sono</Link><Link to="/sedi/san-donato-milanese">San Donato Milanese</Link><Link to="/sedi/cantu">Cantù</Link><Link to="/sedi/giussano">Giussano</Link></div>
    </div>
    <div className="site-container border-t border-light-green/30 mt-12 pt-6 text-sm text-light-green leading-relaxed">Le informazioni contenute in questo sito hanno finalità divulgativa e non sostituiscono il parere di un professionista sanitario qualificato.</div>
  </footer>;
}
