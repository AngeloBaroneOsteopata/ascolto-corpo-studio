import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { MessageCircle, Star } from 'lucide-react';
import { OriginDiagram } from '@/components/origin-diagram';
import { BookingSection, LocationSummary } from '@/components/site-sections';
import { whatsapp, googleReviews } from '@/lib/site-data';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Angelo Barone | Osteopata D.O. a San Donato Milanese' },
    { name: 'description', content: 'Sono Angelo Barone, Osteopata D.O. Ricevo a San Donato Milanese, Cantù e Giussano. Ascolto, valuto e costruisco un trattamento su misura.' },
    { property: 'og:title', content: 'Angelo Barone | Osteopata D.O. a San Donato Milanese' },
    { property: 'og:description', content: 'Il tuo corpo parla. Io ascolto prima di trattare. Scopri come lavoro e dove ricevo.' },
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
const treatments = [
  { title: 'Mal di schiena', description: 'Mal di schiena che torna ogni volta che ti alzi dalla scrivania? Prima di lavorare sulla zona dolente, guardo tutto il corpo: spesso il problema nasce altrove.' },
  { title: 'Cervicale e cefalee', description: 'Collo bloccato, mal di testa ricorrente, mascella sempre tesa? Valuto insieme cervicale, postura e tensioni per trovare l’origine reale.' },
  { title: 'Gravidanza', description: 'In gravidanza il corpo cambia in fretta, e non sempre comodamente. Ti accompagno dal secondo trimestre fino a dopo il parto, con tecniche dolci pensate per questa fase.' },
  { title: 'Pavimento pelvico', description: 'Dolore pelvico, incontinenza, o vuoi prepararti al parto e recuperare dopo? È la mia area di specializzazione: ne parliamo con l’attenzione che merita.' },
  { title: 'Sport e postura', description: 'Infortunio da recuperare, o la classica schiena da scrivania tutto il giorno? Lavoro sul recupero e sulla postura, incluso il kinesiotaping quando serve.' },
  { title: 'Disturbi viscerali', description: 'Gonfiore, reflusso, intestino pigro? Posso lavorare su questo con un approccio complementare — sempre accanto al tuo medico, mai al suo posto.' },
];
const faqs = [
  { question: 'Come prenoto una visita?', answer: 'Scrivimi su WhatsApp o chiamami al 328 877 8394. Ti rispondo io personalmente e troviamo insieme una data e la sede più comoda.' },
  { question: 'Quanto costa una seduta?', answer: 'A San Donato Milanese la seduta costa 65 €, a Cantù 70 €. A Giussano è prevista una tariffa convenzionata: contatta CAP Salute per i dettagli.' },
  { question: 'Devo portare qualcosa alla prima visita?', answer: 'Se hai referti o esami relativi al problema, portali con te: li guardo prima di iniziare. Durante la visita parliamo anche di quello che hai già provato.' },
  { question: 'Come posso disdire un appuntamento?', answer: 'Se devi disdire, ti chiedo di avvisarmi almeno 24 ore prima.' },
];
function Home() {
  return <main>
    <section className="hero-scene" aria-labelledby="hero-title"><div className="site-container hero-content"><div className="max-w-[680px]"><p className="text-sm font-medium mb-7">Angelo Barone · Osteopata D.O.</p><h1 id="hero-title" className="display-heading text-[clamp(58px,6.5vw,104px)]">Il tuo corpo parla. <em className="font-light">Io ascolto</em> prima di trattare.</h1><p className="mt-7 max-w-[570px] body-large">Prima di mettere le mani, voglio sapere da quando hai questo dolore, cosa lo peggiora, cosa hai già provato. Il punto in cui senti male raramente è il punto da cui parte il problema — per questo la prima parte del mio lavoro è capire, non intervenire.</p><div className="flex flex-wrap items-center gap-x-8 gap-y-5 mt-9"><Button asChild size="lg" className="h-13 px-7 text-[15px]"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle/>Scrivimi su WhatsApp</a></Button><a href={googleReviews} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium"><Star className="size-4 fill-current"/> 4.9 su Google</a></div></div></div></section>

    <section className="section-space" aria-labelledby="about-title"><div className="site-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><p className="text-sm mb-5">Chi sono</p><h2 id="about-title" className="display-heading text-[clamp(60px,7vw,104px)]">Un nome,<br/><em>un ascolto.</em></h2></div><div className="lg:pt-12"><p className="body-large max-w-[650px]">Sono Angelo Barone, osteopata D.O. Ho studiato cinque anni al SOMA Istituto di Osteopatia di Milano e sono iscritto al Registro degli Osteopati d’Italia. Esercito in libera professione dal 2019.</p><div className="grid sm:grid-cols-3 gap-6 border-t border-sand mt-10 pt-7 text-sm"><div><span className="block font-display text-3xl mb-1">D.O.</span>Osteopata diplomato</div><div><span className="block font-display text-3xl mb-1">R.O.I.</span>Iscritto al Registro degli Osteopati d’Italia</div><div><span className="block font-display text-3xl mb-1">SOMA</span>Istituto di Osteopatia di Milano</div></div><Button asChild variant="link" className="px-0 mt-7 text-base"><Link to="/chi-sono">Conosci la mia storia</Link></Button></div></div></section>

    <section id="come-lavoro" className="section-space bg-linen" aria-labelledby="method-title"><div className="site-container"><div className="grid lg:grid-cols-[.95fr_1.05fr] gap-12 lg:gap-20 items-center"><div><p className="text-sm mb-5">Come lavoro</p><h2 id="method-title" className="display-heading text-[clamp(58px,6vw,90px)]">Prima capire.<br/><em>Poi trattare.</em></h2><p className="body-large max-w-[530px] mt-7">Il dolore è un segnale. Per capire cosa mi sta dicendo, parto sempre dalla tua storia e dal modo in cui si muove tutto il tuo corpo.</p><OriginDiagram /></div><div className="lg:pl-8"><div className="border-t border-sand">{steps.map((step, i) => <div key={step.title} className="grid grid-cols-[48px_1fr] sm:grid-cols-[68px_1fr] gap-3 py-7 border-b border-sand"><span className="font-display text-3xl text-accent">{i + 1}.</span><div><h3 className="font-display text-4xl md:text-5xl">{step.title}</h3><p className="mt-3 text-muted-foreground leading-[1.75] max-w-[480px]">{step.description}</p></div></div>)}</div></div></div></div></section>

    <section id="trattamenti" className="section-space" aria-labelledby="treat-title"><div className="site-container"><div className="max-w-[750px] mb-14"><p className="text-sm mb-5">Trattamenti</p><h2 id="treat-title" className="display-heading text-[clamp(58px,6vw,90px)]">Partiamo da quello<br/><em>che senti.</em></h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-sand">{treatments.map(item => <article key={item.title} className="py-9 pr-5 md:pr-10 border-b border-sand"><h3 className="font-display text-[38px] leading-none">{item.title}</h3><p className="mt-5 leading-[1.8] text-muted-foreground max-w-[390px]">{item.description}</p></article>)}</div></div></section>
    <LocationSummary />
    <BookingSection />
    <section className="section-space bg-linen" aria-labelledby="reviews-title"><div className="site-container grid lg:grid-cols-[.8fr_1.2fr] gap-12 lg:gap-24"><div><p className="text-sm mb-5">Recensioni</p><h2 id="reviews-title" className="display-heading text-[clamp(58px,6vw,90px)]">Le parole<br/><em>di chi è passato.</em></h2><p className="body-large mt-7 max-w-[400px]">Ecco cosa raccontano alcune persone che sono passate dal mio studio.</p><a href={googleReviews} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 mt-8 border border-sand rounded-lg px-5 py-4 bg-background"><Star className="size-5 fill-current"/><strong className="text-xl">4.9</strong><span className="text-sm">su Google · Leggi le recensioni</span></a></div><div className="flex flex-col justify-center border-y border-sand py-10"><p className="font-display text-4xl md:text-5xl leading-tight italic">Le testimonianze dei pazienti saranno pubblicate qui dopo averne verificato il testo e il consenso.</p><p className="text-sm text-muted-foreground mt-8">Nel frattempo, puoi leggere le recensioni su Google.</p></div></div></section>
    <section className="section-space" aria-labelledby="faq-title"><div className="site-container grid lg:grid-cols-[.7fr_1.3fr] gap-10 lg:gap-24"><div><p className="text-sm mb-5">Domande frequenti</p><h2 id="faq-title" className="display-heading text-[clamp(58px,6vw,88px)]">Una domanda<br/><em>prima di venire?</em></h2></div><div>{faqs.map(faq => <details className="faq-item" key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></div></section>
  </main>;
}
