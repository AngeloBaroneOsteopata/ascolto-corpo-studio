import { createFileRoute } from '@tanstack/react-router';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { whatsapp, ogImageMeta } from '@/lib/site-data';
import treatmentPhoto from '@/assets/trattamento-osteopatico-angelo-barone.webp.asset.json';

export const Route = createFileRoute('/chi-sono')({
  head: () => ({ meta: [
    { title: 'Chi sono | Angelo Barone, Osteopata D.O.' },
    { name: 'description', content: 'Conosci il percorso di Angelo Barone, Osteopata D.O.: SOMA Istituto di Osteopatia di Milano, R.O.I. e formazione specialistica.' },
    { property: 'og:title', content: 'Chi sono | Angelo Barone, Osteopata D.O.' },
    { property: 'og:description', content: 'Prima di trattare, ascolto. Il mio percorso e il mio modo di lavorare.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
    ...ogImageMeta,
  ] }), component: About,
});
function About() { return <main><section className="site-container section-compact"><h1 className="font-display text-[clamp(32px,3.2vw,40px)] leading-tight mb-6">Chi sono</h1><div className="grid lg:grid-cols-[1fr_440px] gap-8 lg:gap-14 items-start"><div><div className="space-y-4 body-large max-w-[680px]"><p>Sono Angelo Barone, osteopata D.O. Ho studiato cinque anni al SOMA Istituto di Osteopatia di Milano — percorso quinquennale, diploma nel 2018, livello EQF 7 — e sono iscritto al Registro degli Osteopati d'Italia. Esercito in libera professione dal 2019, tra San Donato Milanese, Cantù e Giussano.</p><p>Nel 2023 mi sono specializzato in pavimento pelvico (EDI Academy). Dal 2025 ho iniziato il percorso di formazione in Massoterapia (MCB), che include tecniche come massaggio decontratturante, drenante, sportivo, connettivale e drenaggio linfatico manuale (DLM), e altre ancora. Sono aggiornamenti che considero parte del lavoro quotidiano, non titoli da aggiungere al curriculum.</p><p>Prima di trattare, ascolto. Voglio capire da quando hai il problema, cosa lo aggrava, come influisce sulle tue giornate. Solo dopo aver capito il contesto costruisco un trattamento su misura per te — non un protocollo uguale per tutti.</p><p>Mi trovi soprattutto a San Donato Milanese, Via Enrico Mattei 54.</p></div><div className="grid grid-cols-3 gap-4 border-t border-sand mt-6 pt-5 text-sm max-w-[680px]"><div><span className="block font-display text-2xl mb-1">D.O.</span>Osteopata diplomato</div><div><span className="block font-display text-2xl mb-1">R.O.I.</span>Iscritto al Registro degli Osteopati d'Italia</div><div><span className="block font-display text-2xl mb-1">SOMA</span>Istituto di Osteopatia di Milano</div></div><Button asChild size="lg" className="h-12 px-6 text-[15px] mt-6"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> Scrivimi su WhatsApp</a></Button></div><img src={treatmentPhoto.url} alt="Angelo Barone durante un trattamento osteopatico manuale" width={440} height={540} loading="lazy" className="w-full max-w-[440px] aspect-[440/540] object-cover rounded-[16px] justify-self-center lg:justify-self-end" /></div></section></main>; }
