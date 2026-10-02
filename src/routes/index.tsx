import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Star } from 'lucide-react';
import { LocationSummary } from '@/components/site-sections';
import { FaqList } from '@/components/faq-list';
import { whatsapp, googleReviews, treatments, faqs, ogImageMeta } from '@/lib/site-data';
import heroPhoto from '@/assets/foto-angelo-hero.jpg.asset.json';

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
  const reviewsWidget = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!reviewsWidget.current || document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) return;
    const s = document.createElement('script');
    s.src = 'https://elfsightcdn.com/platform.js';
    s.async = true;
    document.head.appendChild(s);
  }, []);
  return <main>
    <section className="hero-scene" aria-labelledby="hero-title"><div className="site-container hero-content grid lg:grid-cols-[1.15fr_.85fr] gap-10 lg:gap-16 items-center"><div className="max-w-[680px]"><p className="text-sm font-medium mb-7">Angelo Barone · Osteopata D.O.</p><h1 id="hero-title" className="display-heading text-[clamp(58px,6.5vw,104px)]">Il tuo corpo parla. <em className="font-light">Io ascolto</em> prima di trattare.</h1><p className="mt-7 max-w-[480px] body-large">Prima di mettere le mani, voglio sapere da quando hai questo dolore, cosa lo peggiora, cosa hai già provato. Il punto in cui senti male raramente è il punto da cui parte il problema — per questo la prima parte del mio lavoro è capire, non intervenire.</p><div className="flex flex-wrap items-center gap-x-8 gap-y-5 mt-9"><Button asChild size="lg" className="h-13 px-7 text-[15px]"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle/>Scrivimi su WhatsApp</a></Button><a href={googleReviews} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium"><Star className="size-4 fill-current"/> 4.9 su Google</a></div></div><img src={heroPhoto.url} alt="Ritratto di Angelo Barone, Osteopata D.O." width={440} height={540} className="hero-photo w-full max-w-[320px] lg:max-w-none lg:w-[440px] lg:h-[540px] lg:aspect-auto aspect-[4/5] object-cover object-top rounded-[16px] justify-self-center lg:justify-self-end" /></div></section>

    <section aria-label="Citazione di Andrew Taylor Still" className="bg-background"><div className="site-container py-16 md:py-24"><figure className="max-w-[700px] mx-auto text-center"><span aria-hidden className="block mx-auto w-[56px] h-[2px] bg-primary" /><blockquote className="font-display italic text-[27px] leading-snug text-foreground mt-8"><p>«Trovare la salute dovrebbe essere l'obiettivo di chi cura. Chiunque può trovare la malattia.»</p></blockquote><span aria-hidden className="block mx-auto w-[56px] h-[2px] bg-primary mt-8" /><figcaption className="text-sm text-muted-foreground mt-6">— Andrew Taylor Still, fondatore dell'Osteopatia</figcaption></figure></div></section>


    <section className="section-compact" aria-labelledby="about-title"><div className="site-container grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:gap-16"><h2 id="about-title" className="font-display text-[clamp(28px,2.6vw,34px)] leading-tight">Chi sono</h2><div><p className="body-large max-w-[650px]">Sono Angelo Barone, osteopata D.O. Ho studiato cinque anni al SOMA Istituto di Osteopatia di Milano e sono iscritto al Registro degli Osteopati d’Italia. Esercito in libera professione dal 2019.</p><Button asChild variant="link" className="px-0 mt-3 text-base"><Link to="/chi-sono">Conosci la mia storia</Link></Button></div></div></section>

    <section id="come-lavoro" className="section-compact bg-linen" aria-labelledby="method-title"><div className="site-container"><h2 id="method-title" className="font-display text-[clamp(28px,2.6vw,34px)] leading-tight mb-8">Come lavoro</h2><ol className="relative pl-9"><span aria-hidden className="absolute left-[6px] top-[10px] bottom-[14px] w-[2px] bg-sand" />{steps.map(step => <li key={step.title} className="relative pb-7 last:pb-0"><span aria-hidden className="absolute top-[9px] -left-9 size-3.5 rounded-full bg-primary" /><h3 className="font-display text-2xl leading-tight">{step.title}</h3><p className="mt-1 text-muted-foreground leading-[1.7]">{step.description}</p></li>)}</ol></div></section>

    <section id="trattamenti" className="section-compact" aria-labelledby="treat-title"><div className="site-container"><div className="max-w-[750px] mb-8"><p className="text-sm mb-5">Trattamenti</p><h2 id="treat-title" className="font-display text-[clamp(28px,2.6vw,34px)] leading-tight">Partiamo da quello<br/><em>che senti.</em></h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-sand">{treatments.map(item => <article key={item.slug} className="py-6 pr-5 md:pr-8 border-b border-sand"><h3 className="font-display text-[26px] leading-none"><Link to="/trattamenti/$slug" params={{ slug: item.slug }}>{item.title}</Link></h3><p className="mt-3 leading-[1.7] text-muted-foreground max-w-[390px]">{item.description}</p>{item.slug === 'mal-di-schiena' ? <Link to="/mal-di-schiena" className="text-link text-sm mt-3 inline-block">Come lavoro su questo</Link> : item.slug === 'pavimento-pelvico' ? <Link to="/pavimento-pelvico" className="text-link text-sm mt-3 inline-block">Come lavoro su questo</Link> : item.slug === 'sport-e-postura' ? <Link to="/osteopatia-sportiva" className="text-link text-sm mt-3 inline-block">Come lavoro su questo</Link> : item.slug === 'gravidanza' ? <Link to="/gravidanza" className="text-link text-sm mt-3 inline-block">Come lavoro su questo</Link> : item.slug === 'cervicale-e-cefalee' ? <Link to="/cervicale" className="text-link text-sm mt-3 inline-block">Come lavoro su questo</Link> : <Link to="/trattamenti/$slug" params={{ slug: item.slug }} className="text-link text-sm mt-3 inline-block">Come lavoro su questo</Link>}</article>)}</div></div></section>
    <LocationSummary />
    <section id="recensioni" className="section-compact bg-linen" aria-labelledby="reviews-title"><div className="site-container grid lg:grid-cols-[.8fr_1.2fr] gap-6 lg:gap-16 items-start"><h2 id="reviews-title" className="font-display text-[clamp(28px,2.6vw,34px)] leading-tight">Recensioni</h2><div><a href={googleReviews} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-sand rounded-lg px-5 py-4 bg-background"><Star className="size-5 fill-current"/><strong className="text-xl">4.9</strong><span className="text-sm">su Google · Leggi le recensioni</span></a><div ref={reviewsWidget} className="elfsight-app-f7b8d62d-41d2-4eb9-a751-fdb589d47190 mt-8" data-elfsight-app-lazy /></div></div></section>
    <section id="faq" className="section-compact" aria-labelledby="faq-title"><div className="site-container grid lg:grid-cols-[.7fr_1.3fr] gap-6 lg:gap-16"><h2 id="faq-title" className="font-display text-[clamp(28px,2.6vw,34px)] leading-tight">Domande frequenti</h2><FaqList items={faqs.map(f => ({ q: f.question, a: f.answer }))} /></div></section>
  </main>;
}
