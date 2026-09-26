import { createFileRoute, notFound, Link } from '@tanstack/react-router';
import { ContactButtons } from '@/components/site-sections';
import { FaqList } from '@/components/faq-list';
import { treatments, ogImageMeta } from '@/lib/site-data';

export const Route = createFileRoute('/trattamenti/$slug')({
  loader: ({ params }) => {
    const treatment = treatments.find(t => t.slug === params.slug);
    if (!treatment) throw notFound();
    return { treatment };
  },
  head: ({ loaderData }) => {
    const t = loaderData?.treatment;
    if (!t) return { meta: [{ title: 'Trattamento non trovato' }] };
    const title = `${t.title} | Angelo Barone, Osteopata D.O.`;
    return { meta: [
      { title }, { name: 'description', content: t.description },
      { property: 'og:title', content: title }, { property: 'og:description', content: t.description },
      { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
      ...ogImageMeta,
    ] };
  },
  notFoundComponent: () => <main className="site-container section-space"><h1 className="display-heading text-6xl">Trattamento non trovato</h1><Link to="/" hash="trattamenti" className="text-link mt-8 inline-block">Vedi tutti i trattamenti</Link></main>,
  component: TreatmentPage,
});

function TreatmentPage() {
  const { treatment } = Route.useLoaderData();
  return <main>
    <section className="site-container section-space grid lg:grid-cols-[1.1fr_.9fr] gap-10 lg:gap-24">
      <div><Link to="/" hash="trattamenti" className="text-sm mb-5 inline-block underline underline-offset-4">Trattamenti</Link><h1 className="display-heading text-[clamp(60px,7.5vw,112px)]">{treatment.title}</h1></div>
      <p className="body-large lg:pt-16 max-w-[560px]">{treatment.description}</p>
    </section>
    <section className="bg-linen section-space"><div className="site-container grid lg:grid-cols-[.7fr_1.3fr] gap-8 lg:gap-24"><h2 className="display-heading text-[clamp(44px,5vw,72px)]">Come lavoro<br/><em>su questo</em></h2><p className="body-large max-w-[680px] lg:pt-4">{treatment.method}</p></div></section>
    <section className="site-container section-space grid lg:grid-cols-[.7fr_1.3fr] gap-8 lg:gap-24"><h2 className="display-heading text-[clamp(44px,5vw,72px)]">Domande<br/><em>frequenti</em></h2><FaqList items={treatment.faqs} /></section>
    <section className="bg-primary text-primary-foreground section-space"><div className="site-container grid lg:grid-cols-[1fr_1fr] gap-8 items-end"><h2 className="display-heading text-[clamp(48px,5.5vw,80px)]">Ne parliamo<br/><em>insieme?</em></h2><div><p className="body-large mb-8 max-w-[520px]">Scrivimi e raccontami cosa senti: ti rispondo io, personalmente.</p><ContactButtons light /></div></div></section>
  </main>;
}
