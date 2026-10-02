import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone } from 'lucide-react';
import { whatsapp, locations } from '@/lib/site-data';

export function ContactButtons({ light = false }: { light?: boolean }) {
  return <div className="flex flex-wrap gap-3"><Button asChild size="lg" variant={light ? 'secondary' : 'default'} className="h-12 px-6 text-[15px]"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> Scrivimi su WhatsApp</a></Button><Button asChild size="lg" variant="outline" className="h-12 px-6 text-[15px]"><a href="tel:+393288778394"><Phone /> Chiamami</a></Button></div>;
}
export function BookingSection() {
  return <section id="prenota" className="bg-primary text-primary-foreground section-space"><div className="site-container grid gap-10 lg:grid-cols-[.85fr_1fr] lg:gap-20"><div><p className="text-light-green text-sm mb-5">Prenota una visita</p><h2 className="display-heading text-[clamp(56px,6.5vw,96px)]">Parliamone<br /><em>direttamente.</em></h2></div><div className="lg:pt-12"><p className="body-large max-w-[610px]">Per prenotare scrivimi su WhatsApp o chiamami — ti rispondo io, personalmente. Ci sentiamo, capiamo insieme di cosa hai bisogno e troviamo data e sede più comode. Per disdire, avvisami almeno 24 ore prima.</p><div className="mt-9"><ContactButtons light /></div></div></div></section>;
}
export function LocationSummary() {
  return <section id="sedi" className="section-compact"><div className="site-container"><h2 className="font-display text-[clamp(28px,2.6vw,34px)] leading-tight mb-8">Dove ricevo</h2><div className="grid lg:grid-cols-[2fr_1fr] gap-4"><article className="bg-primary text-primary-foreground rounded-xl p-7 md:p-9 lg:row-span-2"><h3 className="font-display text-[clamp(30px,3vw,40px)] leading-tight">San Donato Milanese</h3><p className="mt-1">Via Enrico Mattei 54</p><p className="mt-4 leading-7">Lun/Mar 8:00–20:00 · Mer 8:00–13:00 · Sab 8:00–12:30</p><div className="mt-5"><Link className="text-link text-sm" to={locations[0].slug}>La sede</Link></div></article><div className="grid gap-4">{locations.slice(1).map(location => <article key={location.name} className="bg-linen rounded-xl p-6 flex flex-col justify-between"><div><h3 className="font-display text-2xl">{location.name}</h3><p className="mt-1 text-sm leading-relaxed">{location.address}</p><p className="text-sm text-muted-foreground mt-1">{location.note}</p></div><div className="flex items-end justify-between gap-4 mt-3">{location.slug === '/sedi/giussano' && <span className="text-sm font-medium">{location.price}</span>}<Link className="text-link text-sm shrink-0" to={location.slug}>La sede</Link></div></article>)}</div></div></div></section>;
}
