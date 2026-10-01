import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { FaqList } from '@/components/faq-list';
import { whatsapp, locations, ogImageMeta } from '@/lib/site-data';

const title = 'Osteopatia in Gravidanza — Angelo Barone, Osteopata D.O.';
const description = 'Tecniche delicate e adattate, calibrate sulla fase gestazionale, dal secondo trimestre in poi.';

export const Route = createFileRoute('/gravidanza')({
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
  component: Gravidanza,
});

const steps = [
  { title: 'Ti ascolto', description: 'Da quando hai questo problema, cosa lo scatena, cosa hai già provato.' },
  { title: 'Valuto', description: 'Come ti muovi, dove il corpo compensa.' },
  { title: 'Tratto', description: 'In base a quello che trovo in te, non a un protocollo standard.' },
  { title: 'Ti spiego', description: 'Cosa ho trovato e cosa fare nei giorni successivi.' },
];

const faqs = [
  { q: 'Posso venire in gravidanza?', a: 'Sì, per la maggior parte delle gravidanze fisiologiche è indicata e ben tollerata. Lavoro con tecniche dolci, senza manipolazioni strutturali forti. In caso di gravidanze a rischio o complicanze, chiedo sempre indicazione del ginecologo prima di procedere.' },
  { q: 'In quale trimestre posso iniziare?', a: 'Dal secondo trimestre in poi. Nel primo trimestre il trattamento osteopatico non è consigliato, in via precauzionale: è la fase più delicata della gravidanza. In caso di gravidanza a rischio chiedo sempre prima il parere del ginecologo.' },
  { q: 'Il trattamento è sicuro per il bambino?', a: "Le tecniche usate in gravidanza sono dolci, senza manipolazioni strutturali forti, e calibrate sulla fase gestazionale. Non si lavora mai in modo invasivo sull'addome." },
  { q: 'Cosa succede se non miglioro?', a: 'Se dopo un ciclo concordato di sedute non ci sono miglioramenti apprezzabili, lo dico chiaramente. L\'osteopatia non è indicata per tutti i problemi e non sempre è sufficiente da sola. In questi casi, indirizzo verso lo specialista più adatto alla tua situazione.' },
];

const h2 = 'font-display text-[28px] leading-tight mb-6';

function Gravidanza() {
  const [sd, ...others] = locations;
  return <main>
    <section className="section-compact"><div className="site-container">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6"><Link to="/" className="hover:underline">Home</Link> › <Link to="/" hash="trattamenti" className="hover:underline">Specializzazioni</Link> › <span aria-current="page">Gravidanza</span></nav>
      <h1 className="font-display text-[clamp(30px,3vw,36px)] leading-tight">Osteopatia in Gravidanza</h1>
      <p className="mt-4 leading-[1.7] max-w-[560px]">Tecniche delicate e adattate. I trattamenti in gravidanza sono mirati e calibrati sulla fase gestazionale. Nessuna tecnica strutturale forte: solo lavoro dolce sul tessuto connettivo, la postura e il bacino, dal secondo trimestre in poi.</p>
      <Button asChild size="lg" className="mt-6 h-12 px-6 text-[15px]"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> Prenota una seduta</a></Button>
    </div></section>

    <section className="section-compact bg-linen"><div className="site-container">
      <h2 className={h2}>Cosa tratto</h2>
      <p className="leading-[1.7] max-w-[680px]">Durante la gravidanza il corpo affronta cambiamenti posturali, ormonali e meccanici profondi. L'osteopatia può accompagnare questo processo, ridurre il dolore e preparare il corpo al parto.</p>
    </div></section>

    <section className="section-compact"><div className="site-container">
      <h2 className={h2}>Come lavoro</h2>
      <ol className="relative pl-9"><span aria-hidden className="absolute left-[6px] top-[10px] bottom-[14px] w-[2px] bg-sand" />{steps.map(step => <li key={step.title} className="relative pb-7 last:pb-0"><span aria-hidden className="absolute top-[9px] -left-9 size-3.5 rounded-full bg-primary" /><h3 className="font-display text-2xl leading-tight">{step.title}</h3><p className="mt-1 text-muted-foreground leading-[1.7]">{step.description}</p></li>)}</ol>
      <p className="mt-8 text-sm">Vedi anche: <Link to="/" hash="trattamenti" className="text-link">Pavimento pelvico</Link></p>
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
