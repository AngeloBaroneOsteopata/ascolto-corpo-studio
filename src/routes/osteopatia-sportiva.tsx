import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { FaqList } from '@/components/faq-list';
import { whatsapp, locations, ogImageMeta } from '@/lib/site-data';

const title = 'Osteopatia sportiva e riequilibrio posturale — Angelo Barone, Osteopata D.O.';
const description = 'Un dolore allo sportivo spesso ha radici posturali. Lavoro su sport e postura con lo stesso approccio globale.';

export const Route = createFileRoute('/osteopatia-sportiva')({
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'article' },
      { name: 'twitter:card', content: 'summary_large_image' },
      ...ogImageMeta,
    ],
  }),
  component: OsteopatiaSportiva,
});

const steps = [
  { title: 'Ti ascolto', description: 'Da quando hai questo problema, cosa lo scatena, cosa hai già provato.' },
  { title: 'Valuto', description: 'Come ti muovi, dove il corpo compensa.' },
  { title: 'Tratto', description: 'In base a quello che trovo in te, non a un protocollo standard.' },
  { title: 'Ti spiego', description: 'Cosa ho trovato e cosa fare nei giorni successivi.' },
];

const faqs = [
  { q: 'Devo essere un atleta per venire?', a: "No. Buona parte delle persone che seguo per quest'area non fa sport agonistico: sono persone che stanno sedute otto ore al giorno e si portano dietro tensioni a collo, schiena e spalle." },
  { q: 'Posso continuare ad allenarmi durante il percorso?', a: 'Nella maggior parte dei casi sì, a volte modificando carichi o gesti per un periodo. Dopo la valutazione ti dico cosa puoi mantenere e cosa conviene sospendere temporaneamente.' },
  { q: "L'osteopatia sostituisce la fisioterapia dopo un infortunio?", a: "No, e non è una gara tra le due. Dopo un infortunio significativo il percorso riabilitativo è di competenza medica e fisioterapica. Il lavoro osteopatico può affiancarlo. Se la tua situazione richiede prima un'altra figura professionale, te lo dico e ti indirizzo." },
];

const h2 = 'font-display text-[28px] leading-tight mb-6';

function OsteopatiaSportiva() {
  const [sd, ...others] = locations;
  return <main>
    <section className="section-compact"><div className="site-container">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6"><Link to="/" className="hover:underline">Home</Link> › <Link to="/" hash="trattamenti" className="hover:underline">Specializzazioni</Link> › <span aria-current="page">Osteopatia sportiva</span></nav>
      <h1 className="font-display text-[clamp(30px,3vw,36px)] leading-tight">Osteopatia sportiva e riequilibrio posturale</h1>
      <p className="mt-4 leading-[1.7] max-w-[560px]">Un dolore allo sportivo spesso ha radici posturali. Un dolore cronico da lavoro sedentario risponde alle stesse tecniche usate nel recupero atletico. Lavoro su entrambi con lo stesso approccio globale.</p>
      <Button asChild size="lg" className="mt-6 h-12 px-6 text-[15px]"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> Prenota una seduta</a></Button>
    </div></section>

    <section className="section-compact bg-linen"><div className="site-container">
      <h2 className={h2}>Cosa tratto</h2>
      <p className="leading-[1.7] max-w-[680px]">Che si tratti di uno sportivo con una distorsione alla caviglia o di una persona con lombalgia cronica da ufficio, il processo è lo stesso: valutazione globale, pattern disfunzionale, trattamento della causa — non del sintomo.</p>
    </div></section>

    <section className="section-compact"><div className="site-container">
      <h2 className={h2}>Come lavoro</h2>
      <ol className="relative pl-9"><span aria-hidden className="absolute left-[6px] top-[10px] bottom-[14px] w-[2px] bg-sand" />{steps.map(step => <li key={step.title} className="relative pb-7 last:pb-0"><span aria-hidden className="absolute top-[9px] -left-9 size-3.5 rounded-full bg-primary" /><h3 className="font-display text-2xl leading-tight">{step.title}</h3><p className="mt-1 text-muted-foreground leading-[1.7]">{step.description}</p></li>)}</ol>
      <p className="mt-8 text-sm">Vedi anche: <Link to="/" hash="trattamenti" className="text-link">Pavimento pelvico</Link></p>
      <p className="mt-2 text-sm">Vedi anche: <Link to="/gravidanza/" className="text-link">Gravidanza</Link></p>
    </div></section>

    <section className="section-compact bg-linen/40"><div className="site-container">
      <h2 className={h2}>Dove ricevo</h2>
      <div className="grid lg:grid-cols-[2fr_1fr] gap-4">
        <article className="bg-primary text-primary-foreground rounded-xl p-7 md:p-9"><h3 className="font-display text-[clamp(28px,2.8vw,36px)] leading-tight">{sd.name}</h3><p className="mt-1">Via Enrico Mattei 54</p><p className="mt-4 leading-7">Lun/Mar 8:00–20:00 · Mer 8:00–13:00 · Sab 8:00–12:30</p></article>
        <div className="grid gap-4">{others.map(l => <article key={l.name} className="bg-linen rounded-xl p-6"><h3 className="font-display text-2xl"><Link to={l.slug}>{l.name}</Link></h3><p className="mt-1 text-sm leading-relaxed">{l.address}</p></article>)}</div>
      </div>
    </div></section>

    <section className="section-compact"><div className="site-container"><div className="max-w-[820px]">
      <h2 className={h2}>Domande frequenti</h2>
      <FaqList items={faqs} /></div>
    </div></section>
  </main>;
}
