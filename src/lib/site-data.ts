export const whatsapp = 'https://wa.me/393288778394';
export const googleReviews = 'https://maps.app.goo.gl/BoeKfhM9tRpHzWUZ8';

export const locations = [
  {
    name: 'San Donato Milanese', slug: '/sedi/san-donato-milanese', address: 'Via Enrico Mattei 54', hours: ['Lunedì e martedì · 8:00–20:00', 'Mercoledì · 8:00–13:00', 'Sabato · 8:00–12:30'], price: '65 € a seduta', note: 'Vicino MM3',
  },
  {
    name: 'Cantù', slug: '/sedi/cantu', address: 'Via Giacomo Matteotti 18', hours: ['Mercoledì, giovedì e venerdì · 15:00–19:30'], price: '70 € a seduta', note: 'Dentro una farmacia · Parcheggio disponibile',
  },
  {
    name: 'Giussano', slug: '/sedi/giussano', address: 'CAP Salute, Via Filippo Corridoni 19', hours: ['Da lunedì a sabato'], price: 'Tariffa convenzionata, contatta CAP Salute', note: 'Prenotazione tramite CAP Salute',
  },
] as const;
