import { createFileRoute } from '@tanstack/react-router';
import { LocationPage } from '@/components/location-page';
import { Button } from '@/components/ui/button';
import { locations, ogImageMeta } from '@/lib/site-data';
export const Route = createFileRoute('/sedi/giussano')({ head: () => ({ meta: [
  { title: 'Osteopata a Giussano | Angelo Barone' }, { name: 'description', content: 'Ricevo a Giussano presso CAP Salute, Via Filippo Corridoni 19. Prenotazione tramite CAP Salute, tariffa convenzionata.' },
  { property: 'og:title', content: 'Osteopata a Giussano | Angelo Barone' }, { property: 'og:description', content: 'Presso CAP Salute, Via Filippo Corridoni 19. Prenotazione tramite il centro.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }, ...ogImageMeta,
] }), component: () => <LocationPage place={locations[2]} title="Giussano." intro="Ti aspetto a Giussano, presso CAP Salute, centro polispecialistico in Via Filippo Corridoni 19, dal lunedì al sabato."
  booking={<Button asChild size="lg" className="h-11 px-6 text-[15px]"><a href="https://capsalute.it/prenotazioni" target="_blank" rel="noopener noreferrer">Prenota tramite CAP Salute</a></Button>} /> });
