import type { ReactNode } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { whatsapp, locations } from '@/lib/site-data';

type Place = (typeof locations)[number];

export function LocationPage({ place, title, intro, featured = false, booking }: { place: Place; title: ReactNode; intro: string; featured?: boolean; booking?: ReactNode }) {
  const panel = featured ? 'bg-primary text-primary-foreground' : 'bg-linen';
  const line = featured ? 'border-light-green/40' : 'border-sand';
  const label = featured ? 'text-light-green' : 'text-muted-foreground';
  return <main><section className={featured ? 'section-space bg-linen' : 'section-space'}><div className="site-container grid lg:grid-cols-[1.2fr_.8fr] gap-12 lg:gap-24">
    <div><p className="text-sm mb-5">Dove ricevo</p><h1 className="display-heading text-[clamp(64px,8vw,120px)]">{title}</h1><p className="body-large mt-8 max-w-[620px]">{intro}</p>
      <div className="mt-10">{booking ?? <Button asChild size="lg" className="h-12 px-6 text-[15px]"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> Scrivimi su WhatsApp</a></Button>}</div></div>
    <div className={`${panel} rounded-xl p-8 md:p-10 self-start`}><h2 className="font-display text-5xl mb-8">Informazioni pratiche</h2>
      <div className={`border-t ${line} py-5`}><p className={`${label} text-sm mb-2`}>Indirizzo</p><p className="text-lg">{place.address}</p><p className="text-sm mt-1">{place.access}</p></div>
      <div className={`border-t ${line} py-5`}><p className={`${label} text-sm mb-2`}>Orari</p>{place.hours.map(h => <p key={h} className="leading-8">{h}</p>)}</div>
      <div className={`border-t ${line} py-5`}><p className={`${label} text-sm mb-2`}>Tariffa</p><p className="text-xl">{place.price}</p></div>
      <div className={`border-t ${line} pt-5`}><p className={`${label} text-sm mb-2`}>Da sapere</p><p>{place.note}</p></div>
    </div></div></section></main>;
}
