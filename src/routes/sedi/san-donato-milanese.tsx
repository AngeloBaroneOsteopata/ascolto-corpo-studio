import { createFileRoute } from '@tanstack/react-router';
import { LocationPage } from '@/components/location-page';
import { locations, ogImageMeta } from '@/lib/site-data';
export const Route = createFileRoute('/sedi/san-donato-milanese')({ head: () => ({ meta: [
  { title: 'Osteopata a San Donato Milanese | Angelo Barone' }, { name: 'description', content: 'Ricevo a San Donato Milanese in Via Enrico Mattei 54, vicino MM3 San Donato. Orari, tariffa e contatto WhatsApp.' },
  { property: 'og:title', content: 'Osteopata a San Donato Milanese | Angelo Barone' }, { property: 'og:description', content: 'Via Enrico Mattei 54, vicino MM3. Seduta 65 € (60 minuti). Scrivimi su WhatsApp.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }, ...ogImageMeta,
] }), component: () => <LocationPage featured place={locations[0]} title={<>San Donato<br/><em>Milanese.</em></>} intro="Ti aspetto qui, in Via Enrico Mattei 54, a pochi passi dalla MM3 San Donato. Entri dal piano terra a destra e sali al primo piano. Qui ho più giorni di disponibilità: scrivimi e troviamo un momento comodo per te." /> });
