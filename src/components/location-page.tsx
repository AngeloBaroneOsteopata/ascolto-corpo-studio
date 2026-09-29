import type { ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FaqList } from '@/components/faq-list';
import { whatsapp, locations, faqs } from '@/lib/site-data';

type Place = (typeof locations)[number];

function InfoPanel({ place, dark }: { place: Place; dark: boolean }) {
  const panel = dark ? 'bg-[#2C3A2A] text-[#F7F5F0]' : 'bg-linen';
  const line = dark ? 'border-[#D4E8CE]/30' : 'border-sand';
  return (
    <div className={`${panel} rounded-2xl p-7 md:p-9`}>
      <h2 className="font-display text-[30px]">{place.name}</h2>
      <div className={`border-t ${line} mt-5 pt-4 space-y-4 text-[15px] leading-[1.7]`}>
        <div><p>{place.address}</p><p className={dark ? 'text-[#D4E8CE]' : 'text-muted-foreground'}>{place.access}</p></div>
        <div>{place.hours.map(h => <p key={h}>{h}</p>)}</div>
        <p className="text-lg font-medium">{place.price}</p>
        <p className={dark ? 'text-[#D4E8CE]' : 'text-muted-foreground'}>{place.note}</p>
      </div>
    </div>
  );
}

export function LocationPage({ place, title, intro, featured = false, booking, photo }: { place: Place; title: ReactNode; intro: string; featured?: boolean; booking?: ReactNode; photo?: string }) {
  const others = locations.filter(l => l.slug !== place.slug);
  return (
    <main>
      <section className="section-space"><div className="site-container">
        <div className={photo ? 'grid lg:grid-cols-[1fr_440px] gap-10 lg:gap-14 items-start' : 'max-w-[560px]'}>
          <div>
            <h1 className="display-heading text-[38px] md:text-[42px]">{title}</h1>
            <p className="mt-5 text-[17px] leading-[1.75]">{intro}</p>
            <div className="mt-7">{booking ?? <Button asChild size="lg" className="h-11 px-6 text-[15px]"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> Scrivimi su WhatsApp</a></Button>}</div>
          </div>
          {photo && (
            <div className="rounded-2xl overflow-hidden w-full max-w-[440px] mx-auto lg:mx-0 aspect-[440/540]">
              <img src={photo} alt={place.name} className="h-full w-full object-cover object-top" loading="lazy" />
            </div>
          )}
        </div>
      </div></section>

      <section className="section-space pt-0" aria-labelledby="dove-title"><div className="site-container">
        <h2 id="dove-title" className="display-heading text-[30px] mb-8">Dove ricevo</h2>
        <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
          <InfoPanel place={place} dark={featured} />
          <div className="grid gap-6 content-start">
            {others.map(o => (
              <Link key={o.slug} to={o.slug} className="bg-linen rounded-2xl p-6 block hover:bg-sand/40 transition-colors">
                <p className="font-display text-[22px]">{o.name}</p>
                <p className="text-sm text-muted-foreground mt-2">{o.address}</p>
                <p className="text-sm mt-3">{o.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div></section>

      {featured && (
        <section className="section-space pt-0" aria-labelledby="faq-title"><div className="site-container max-w-[820px]">
          <h2 id="faq-title" className="display-heading text-[30px] mb-8">Domande frequenti</h2>
          <FaqList items={faqs.map(f => ({ q: f.question, a: f.answer }))} />
        </div></section>
      )}
    </main>
  );
}
