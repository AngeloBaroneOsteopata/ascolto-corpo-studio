import { createFileRoute } from '@tanstack/react-router';
import { LocationPage } from '@/components/location-page';
import { locations, ogImageMeta } from '@/lib/site-data';
export const Route = createFileRoute('/sedi/cantu')({ head: () => ({ meta: [
  { title: 'Osteopata a Cantù | Angelo Barone' }, { name: 'description', content: 'Ricevo a Cantù in Via Giacomo Matteotti 18, presso una farmacia. Orari, tariffa e contatto WhatsApp.' },
  { property: 'og:title', content: 'Osteopata a Cantù | Angelo Barone' }, { property: 'og:description', content: 'Via Giacomo Matteotti 18, presso farmacia. Seduta 70 €, parcheggio disponibile.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }, ...ogImageMeta,
] }), component: () => <LocationPage place={locations[1]} title="Cantù." intro="Ti aspetto a Cantù, in Via Giacomo Matteotti 18, nello studio presso la farmacia. Ricevo il mercoledì, giovedì e venerdì pomeriggio, e il parcheggio è disponibile." /> });
