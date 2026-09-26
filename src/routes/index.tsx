import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { MessageCircle, Star } from 'lucide-react';
import { OriginDiagram } from '@/components/origin-diagram';
import { BookingSection, LocationSummary } from '@/components/site-sections';
import { FaqList } from '@/components/faq-list';
import { whatsapp, googleReviews, treatments, faqs, ogImageMeta } from '@/lib/site-data';
import heroPhoto from '@/assets/foto-angelo-hero.jpg.asset.json';
import treatmentPhoto from '@/assets/trattamento-osteopatico-angelo-barone.webp.asset.json';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Osteopata a San Donato Milanese, Cantù e Giussano' },
    { name: 'description', content: 'Angelo Barone, osteopata a San Donato Milanese, Cantù e Giussano. Trattamenti per adulti, gravidanza e pavimento pelvico. Prenota su WhatsApp.' },
    { property: 'og:title', content: 'Osteopata a San Donato Milanese, Cantù e Giussano' },
    { property: 'og:description', content: 'Angelo Barone, osteopata a San Donato Milanese, Cantù e Giussano. Trattamenti per adulti, gravidanza e pavimento pelvico. Prenota su WhatsApp.' },
    ...ogImageMeta,
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Home,
});

const steps = [
  { title: 'Ti ascolto', description: 'Da quando hai questo problema, cosa lo scatena, cosa hai già provato. Se hai referti, li guardo prima di iniziare.' },
  { title: 'Valuto', description: 'Come ti muovi, dove sei rigido, dove il corpo compensa. Guardo tutto il corpo, perché causa e sintomo raramente coincidono.' },
  { title: 'Tratto', description: 'In base a quello che trovo in te, non a un protocollo standard.' },
  { title: 'Ti spiego', description: 'Cosa ho trovato e cosa fare nei giorni successivi, in parole che puoi usare davvero.' },
];
function Home() {
  return <main>
    <section className="hero-scene" aria-labelledby="hero-title"><div className="site-container hero-content grid lg:grid-cols-[1.25fr_.75fr] gap-10 lg:gap-16 items-center"><div className="max-w-[680px]"><p className="text-sm font-medium mb-7">Angelo Barone · Osteopata D.O.</p><h1 id="hero-title" className="display-heading text-[clamp(58px,6.5vw,104px)]">Il tuo corpo parla. <em className="font-light">Io ascolto</em> prima di trattare.</h1><p className="mt-7 max-w-[570px] body-large">Prima di mettere le mani, voglio sapere da quando hai questo dolore, cosa lo peggiora, cosa hai già provato. Il punto in cui senti male raramente è il punto da cui parte il problema — per questo la prima parte del mio lavoro è capire, non intervenire.</p><div className="flex flex-wrap items-center gap-x-8 gap-y-5 mt-9"><Button asChild size="lg" className="h-13 px-7 text-[15px]"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle/>Scrivimi su WhatsApp</a></Button><a href={googleReviews} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium"><Star className="size-4 fill-current"/> 4.9 su Google</a></div></div><img src={heroPhoto.url} alt="Ritratto di Angelo Barone, Osteopata D.O." width={800} height={1186} className="hero-photo w-full max-w-[420px] justify-self-center lg:justify-self-end aspect-[4/5] object-cover object-top rounded-xl" /></div></section>

    <section className="section-space" aria-labelledby="about-title"><div className="site-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><p className="text-sm mb-5">Chi sono</p><h2 id="about-title" className="display-heading text-[clamp(60px,7vw,104px)]">Un nome,<br/><em>un ascolto.</em></h2></div><div className="lg:pt-12"><p className="body-large max-w-[650px]">Sono Angelo Barone, osteopata D.O. Ho studiato cinque anni al SOMA Istituto di Osteopatia di Milano e sono iscritto al Registro degli Osteopati d’Italia. Esercito in libera professione dal 2019.</p><div className="grid sm:grid-cols-3 gap-6 border-t border-sand mt-10 pt-7 text-sm"><div><span className="block font-display text-3xl mb-1">D.O.</span>Osteopata diplomato</div><div><span className="block font-display text-3xl mb-1">R.O.I.</span>Iscritto al Registro degli Osteopati d’Italia</div><div><span className="block font-display text-3xl mb-1">SOMA</span>Istituto di Osteopatia di Milano</div></div><Button asChild variant="link" className="px-0 mt-7 text-base"><Link to="/chi-sono">Conosci la mia storia</Link></Button></div></div><div className="site-container mt-14 lg:mt-20"><img src={treatmentPhoto.url} alt="Angelo Barone durante un trattamento osteopatico manuale" width={1600} height={1067} loading="lazy" className="w-full lg:w-[82%] lg:ml-auto aspect-[3/2] lg:aspect-[16/8] object-cover rounded-xl" /></div></section>

    <section id="come-lavoro" className="section-space bg-linen" aria-labelledby="method-title"><div className="site-container"><div className="grid lg:grid-cols-[.95fr_1.05fr] gap-12 lg:gap-20 items-center"><div><p className="text-sm mb-5">Come lavoro</p><h2 id="method-title" className="display-heading text-[clamp(58px,6vw,90px)]">Prima capire.<br/><em>Poi trattare.</em></h2><p className="body-large max-w-[530px] mt-7">Il dolore è un segnale. Per capire cosa mi sta dicendo, parto sempre dalla tua storia e dal modo in cui si muove tutto il tuo corpo.</p><OriginDiagram /></div><div className="lg:pl-8"><div className="border-t border-sand">{steps.map((step, i) => <div key={step.title} className="grid grid-cols-[48px_1fr] sm:grid-cols-[68px_1fr] gap-3 py-7 border-b border-sand"><span className="font-display text-3xl text-accent">{i + 1}.</span><div><h3 className="font-display text-4xl md:text-5xl">{step.title}</h3><p className="mt-3 text-muted-foreground leading-[1.75] max-w-[480px]">{step.description}</p></div></div>)}</div></div></div></div></section>

    <section id="trattamenti" className="section-space" aria-labelledby="treat-title"><div className="site-container"><div className="max-w-[750px] mb-14"><p className="text-sm mb-5">Trattamenti</p><h2 id="treat-title" className="display-heading text-[clamp(58px,6vw,90px)]">Partiamo da quello<br/><em>che senti.</em></h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-sand">{treatments.map(item => <article key={item.slug} className="py-9 pr-5 md:pr-10 border-b border-sand"><h3 className="font-display text-[38px] leading-none"><Link to="/trattamenti/$slug" params={{ slug: item.slug }}>{item.title}</Link></h3><p className="mt-5 leading-[1.8] text-muted-foreground max-w-[390px]">{item.description}</p><Link to="/trattamenti/$slug" params={{ slug: item.slug }} className="text-link text-sm mt-5 inline-block">Come lavoro su questo</Link></article>)}</div></div></section>
    <LocationSummary />
    <BookingSection />
    <section id="recensioni" className="section-space bg-linen" aria-labelledby="reviews-title"><div className="site-container grid lg:grid-cols-[.8fr_1.2fr] gap-12 lg:gap-24"><div><p className="text-sm mb-5">Recensioni</p><h2 id="reviews-title" className="display-heading text-[clamp(58px,6vw,90px)]">Le parole<br/><em>di chi è passato.</em></h2><p className="body-large mt-7 max-w-[400px]">Ecco cosa raccontano alcune persone che sono passate dal mio studio.</p><a href={googleReviews} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 mt-8 border border-sand rounded-lg px-5 py-4 bg-background"><Star className="size-5 fill-current"/><strong className="text-xl">4.9</strong><span className="text-sm">su Google · Leggi le recensioni</span></a></div><div className="flex flex-col justify-center border-y border-sand py-10"><p className="font-display text-4xl md:text-5xl leading-tight italic">Le testimonianze dei pazienti saranno pubblicate qui dopo averne verificato il testo e il consenso.</p><p className="text-sm text-muted-foreground mt-8">Nel frattempo, puoi leggere le recensioni su Google.</p></div></div></section>
    <section id="faq" className="section-space" aria-labelledby="faq-title"><div className="site-container grid lg:grid-cols-[.7fr_1.3fr] gap-10 lg:gap-24"><div><p className="text-sm mb-5">Domande frequenti</p><h2 id="faq-title" className="display-heading text-[clamp(58px,6vw,88px)]">Una domanda<br/><em>prima di venire?</em></h2></div><FaqList items={faqs.map(f => ({ q: f.question, a: f.answer }))} /></div></section>
  </main>;
}
