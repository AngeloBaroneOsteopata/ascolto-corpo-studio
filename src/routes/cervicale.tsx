import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { FaqList } from '@/components/faq-list';
import { whatsapp, locations, ogImageMeta } from '@/lib/site-data';

const title = 'Cervicale e cefalee — Angelo Barone, Osteopata D.O.';
const description = 'Il collo si tratta con rispetto. Lavoro con metodiche dolci e progressive sulla zona cervicale.';

export const Route = createFileRoute('/cervicale')({
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
  component: Cervicale,
});

const steps = [
  { title: 'Ti ascolto', description: 'Da quando hai questo problema, cosa lo scatena, cosa hai già provato.' },
  { title: 'Valuto', description: 'Come ti muovi, dove il corpo compensa.' },
  { title: 'Tratto', description: 'In base a quello che trovo in te, non a un protocollo standard.' },
  { title: 'Ti spiego', description: 'Cosa ho trovato e cosa fare nei giorni successivi.' },
];

const faqs = [
  { q: 'La cervicale può causare mal di testa?', a: 'Sì: la cefalea muscolo-tensiva è spesso collegata a tensioni del collo e delle spalle, e il lavoro osteopatico può ridurre frequenza e intensità degli episodi. Non tutti i mal di testa però hanno questa origine: se il quadro non è chiaro, la valutazione neurologica viene prima.' },
  { q: 'Fai le manipolazioni che fanno il rumore dello scrocchio?', a: 'Solo quando sono indicate, sicure per il tuo quadro e con il tuo consenso — mai di routine. La maggior parte del lavoro cervicale si fa con tecniche dolci, muscolari e fasciali.' },
  { q: 'Tratti anche bruxismo e dolore alla mandibola?', a: 'Sì. Mandibola e collo lavorano insieme: il serramento notturno crea tensioni che si scaricano su cervicale e tempie. Lavoro sulla muscolatura masticatoria e cervicale, in collaborazione con il dentista se serve.' },
  { q: 'Cosa succede se non miglioro?', a: 'Se dopo un ciclo concordato di sedute non ci sono miglioramenti apprezzabili, lo dico chiaramente. L\'osteopatia non è indicata per tutti i problemi e non sempre è sufficiente da sola. In questi casi, indirizzo verso lo specialista più adatto alla tua situazione.' },
];

const h2 = 'font-display text-[28px] leading-tight mb-6';

function Cervicale() {
  const [sd, ...others] = locations;
  return <main>
    <section className="section-compact"><div className="site-container">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6"><Link to="/" className="hover:underline">Home</Link> › <Link to="/" hash="trattamenti" className="hover:underline">Trattamenti</Link> › <span aria-current="page">Cervicale e cefalee</span></nav>
      <h1 className="font-display text-[clamp(30px,3vw,36px)] leading-tight">Cervicale e cefalee</h1>
      <p className="mt-4 leading-[1.7] max-w-[560px]">Il collo si tratta con rispetto. La zona cervicale richiede tecnica e prudenza. Lavoro con metodiche dolci e progressive: le manipolazioni dirette si usano solo quando indicate, mai di routine, mai senza valutazione.</p>
      <Button asChild size="lg" className="mt-6 h-12 px-6 text-[15px]"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> Prenota una seduta</a></Button>
    </div></section>

    <section className="section-compact bg-linen"><div className="site-container">
      <h2 className={h2}>Cosa tratto</h2>
      <p className="leading-[1.7] max-w-[680px]">Cervicalgia, tensioni e cefalee muscolo-tensive — il collo è il crocevia tra testa, spalle e schiena: tensioni che nascono altrove (postura al PC, stress, bruxismo notturno) spesso si scaricano lì. Per questo la valutazione non si ferma solo al collo.</p>
    </div></section>

    <section className="section-compact"><div className="site-container">
      <h2 className={h2}>Come lavoro</h2>
      <ol className="relative pl-9"><span aria-hidden className="absolute left-[6px] top-[10px] bottom-[14px] w-[2px] bg-sand" />{steps.map(step => <li key={step.title} className="relative pb-7 last:pb-0"><span aria-hidden className="absolute top-[9px] -left-9 size-3.5 rounded-full bg-primary" /><h3 className="font-display text-2xl leading-tight">{step.title}</h3><p className="mt-1 text-muted-foreground leading-[1.7]">{step.description}</p></li>)}</ol>
      <p className="mt-8 text-sm">Vedi anche: <Link to="/mal-di-schiena" className="text-link">Mal di schiena</Link></p>
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
