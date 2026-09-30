import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { FaqList } from '@/components/faq-list';
import { whatsapp, locations, ogImageMeta } from '@/lib/site-data';

const title = 'Mal di schiena e lombalgia — Angelo Barone, Osteopata D.O.';
const description = 'Mal di schiena e non sai bene da cosa dipenda? È da lì che parto sempre — capire prima di intervenire.';

export const Route = createFileRoute('/mal-di-schiena')({
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
  component: MalDiSchiena,
});

const steps = [
  { title: 'Ti ascolto', description: 'Da quando hai questo problema, cosa lo scatena, cosa hai già provato.' },
  { title: 'Valuto', description: 'Come ti muovi, dove il corpo compensa.' },
  { title: 'Tratto', description: 'In base a quello che trovo in te, non a un protocollo standard.' },
  { title: 'Ti spiego', description: 'Cosa ho trovato e cosa fare nei giorni successivi.' },
];

const faqs = [
  { q: 'Perché il mal di schiena torna sempre?', a: 'Perché spesso si tratta il sintomo e non la causa. Il lavoro osteopatico parte dalla causa meccanica, non solo dal dolore del momento.' },
  { q: 'Posso venire durante la fase acuta?', a: 'Sì, anche con dolore forte. In fase acuta il trattamento è più dolce; il lavoro sulla causa si fa nelle sedute successive.' },
  { q: 'Quante sedute servono per una lombalgia?', a: 'Dipende da quanto è recente e da quanto si è stratificata. Te lo dico onestamente alla prima visita.' },
  { q: 'Cosa succede se non miglioro?', a: 'Se dopo un ciclo concordato di sedute non ci sono miglioramenti apprezzabili, lo dico chiaramente. L\'osteopatia non è indicata per tutti i problemi e non sempre è sufficiente da sola. In questi casi, indirizzo verso lo specialista più adatto alla tua situazione.' },
];

const h2 = 'font-display text-[28px] leading-tight mb-6';

function MalDiSchiena() {
  const [sd, ...others] = locations;
  return <main>
    <section className="section-compact"><div className="site-container">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6"><Link to="/" className="hover:underline">Home</Link> › <Link to="/" hash="trattamenti" className="hover:underline">Trattamenti</Link> › <span aria-current="page">Mal di schiena</span></nav>
      <h1 className="font-display text-[clamp(30px,3vw,36px)] leading-tight">Mal di schiena e lombalgia</h1>
      <p className="mt-4 leading-[1.7] max-w-[560px]">Mal di schiena e non sai bene da cosa dipenda? È da lì che parto sempre — capire prima di intervenire, lavorando sulla causa e non solo sul dolore del momento.</p>
      <Button asChild size="lg" className="mt-6 h-12 px-6 text-[15px]"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> Prenota una seduta</a></Button>
    </div></section>

    <section className="section-compact bg-linen"><div className="site-container">
      <h2 className={h2}>Cosa tratto</h2>
      <p className="leading-[1.7] max-w-[680px]">La schiena raramente si "rompe" all'improvviso: più spesso accumula tensioni per mesi — posizioni di lavoro, sedentarietà, sforzi ripetuti — finché un gesto banale fa scattare il dolore. Lavoro su entrambi i livelli: la crisi acuta e la causa che l'ha prodotta.</p>
    </div></section>

    <section className="section-compact"><div className="site-container">
      <h2 className={h2}>Come lavoro</h2>
      <ol className="relative pl-9"><span aria-hidden className="absolute left-[6px] top-[10px] bottom-[14px] w-[2px] bg-sand" />{steps.map(step => <li key={step.title} className="relative pb-7 last:pb-0"><span aria-hidden className="absolute top-[9px] -left-9 size-3.5 rounded-full bg-primary" /><h3 className="font-display text-2xl leading-tight">{step.title}</h3><p className="mt-1 text-muted-foreground leading-[1.7]">{step.description}</p></li>)}</ol>
      <p className="mt-8 text-sm">Vedi anche: <Link to="/" hash="trattamenti" className="text-link">Sport e postura</Link></p>
    </div></section>

    <section className="section-compact bg-linen/40"><div className="site-container">
      <h2 className={h2}>Dove ricevo</h2>
      <div className="grid lg:grid-cols-[2fr_1fr] gap-4">
        <article className="bg-primary text-primary-foreground rounded-xl p-7 md:p-9"><h3 className="font-display text-[clamp(28px,2.8vw,36px)] leading-tight">{sd.name}</h3><p className="mt-1">Via Enrico Mattei 54</p><p className="mt-4 leading-7">Lun/Mar 8:00–20:00 · Mer 8:00–13:00 · Sab 8:00–12:30</p></article>
        <div className="grid gap-4">{others.map(l => <article key={l.name} className="bg-linen rounded-xl p-6"><h3 className="font-display text-2xl"><Link to={l.slug}>{l.name}</Link></h3><p className="mt-1 text-sm leading-relaxed">{l.address}</p></article>)}</div>
      </div>
    </div></section>

    <section className="section-compact"><div className="site-container max-w-[820px] mx-0">
      <h2 className={h2}>Domande frequenti</h2>
      <FaqList items={faqs} /></div>
    </div></section>
  </main>;
}
