import { createFileRoute } from '@tanstack/react-router';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { whatsapp, ogImageMeta } from '@/lib/site-data';
import studioPhoto from '@/assets/studio-attestati-angelo-barone.webp.asset.json';

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
function About() { return <main><section className="site-container section-space"><div className="grid lg:grid-cols-[.65fr_1.35fr] gap-10 lg:gap-24"><div><p className="text-sm mb-5">Chi sono</p><h1 className="display-heading text-[clamp(68px,8vw,120px)]">Sono<br/><em>Angelo.</em></h1><div className="mt-12 border-t border-sand pt-7 text-sm leading-8"><p>Osteopata D.O.</p><p>Iscritto al R.O.I.</p><p>Diploma SOMA · 2018</p></div><img src={studioPhoto.url} alt="La scrivania dello studio con diplomi e attestati di Angelo Barone" width={1067} height={1600} loading="lazy" className="mt-10 w-full max-w-[380px] aspect-[2/3] object-cover rounded-xl" /></div><div className="lg:pt-12 space-y-8 body-large max-w-[730px]"><p>Sono Angelo Barone, osteopata D.O. Ho studiato cinque anni al SOMA Istituto di Osteopatia di Milano — percorso quinquennale, diploma nel 2018, livello EQF 7 — e sono iscritto al Registro degli Osteopati d'Italia. Esercito in libera professione dal 2019, tra San Donato Milanese, Cantù e Giussano.</p><p>Nel 2023 mi sono specializzato in pavimento pelvico (EDI Academy). Dal 2025 al 2027 sto completando due percorsi avanzati presso ICOM CCFO: drenaggio linfatico manuale e tecniche Maitland, con un focus specifico sul supporto ai pazienti post-operatori, e un corso di massoterapia (MCB). Sono aggiornamenti che considero parte del lavoro quotidiano, non titoli da aggiungere al curriculum.</p><p>Prima di trattare, ascolto. Voglio capire da quando hai il problema, cosa lo aggrava, come influisce sulle tue giornate. Solo dopo aver capito il contesto costruisco un trattamento su misura per te — non un protocollo uguale per tutti.</p><p className="font-display text-[clamp(32px,4vw,52px)] leading-tight italic border-l-2 border-primary pl-6">Mi trovi soprattutto a San Donato Milanese, Via Enrico Mattei 54.</p><Button asChild size="lg" className="h-12 px-6 text-[15px]"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> Scrivimi su WhatsApp</a></Button></div></div></section></main>; }
