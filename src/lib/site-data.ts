export const whatsapp = 'https://wa.me/393288778394';
export const phone = { href: 'tel:+393288778394', label: '+39 328 877 8394' };
export const email = 'angelo.osteopata@gmail.com';
export const googleReviews = 'https://maps.app.goo.gl/BoeKfhM9tRpHzWUZ8';
/** Absolute URL for social previews (crawlers need an absolute address). */
export const ogImage = 'https://angelobaroneosteopata.it/foto-angelo-hero.jpg';

export const ogImageMeta = [
  { property: 'og:image', content: ogImage },
  { name: 'twitter:image', content: ogImage },
];

export const locations = [
  {
    name: 'San Donato Milanese', slug: '/sedi/san-donato-milanese',
    address: 'Via Enrico Mattei 54, 20097 San Donato (MI)',
    access: 'Ingresso piano terra a destra, primo piano',
    hours: ['Lunedì e martedì · 8:00–20:00', 'Mercoledì · 8:00–13:00', 'Sabato · 8:00–12:30'],
    price: '65 € a seduta (60 minuti)', note: 'Vicino MM3 San Donato',
  },
  {
    name: 'Cantù', slug: '/sedi/cantu',
    address: 'Via Giacomo Matteotti 18, 22063 Cantù (CO)',
    access: 'Presso Farmacia Centrale',
    hours: ['Mercoledì, giovedì e venerdì · 15:00–19:30'],
    price: '70 € a seduta', note: 'Parcheggio disponibile',
  },
  {
    name: 'Giussano', slug: '/sedi/giussano',
    address: 'Via Filippo Corridoni 19, 20833 Giussano (MB)',
    access: 'Presso CAP Salute, Centro Polispecialistico Accreditato',
    hours: ['Sabato · 14:00–18:00'],
    price: 'Tariffa convenzionata, contatta CAP Salute', note: 'Prenotazione tramite CAP Salute',
  },
] as const;

export type Treatment = { slug: string; title: string; description: string; method: string; faqs: { q: string; a: string }[] };

export const treatments: Treatment[] = [
  {
    slug: 'mal-di-schiena', title: 'Mal di schiena',
    description: 'Mal di schiena che torna ogni volta che ti alzi dalla scrivania? Prima di lavorare sulla zona dolente, guardo tutto il corpo: spesso il problema nasce altrove.',
    method: 'Ti chiedo da quando hai dolore, in quali momenti peggiora e cosa hai già provato. Poi valuto come si muovono bacino, anche, torace e piedi, perché la zona che fa male spesso sta compensando altro. Il trattamento parte da quello che trovo in te, e alla fine ti spiego cosa puoi fare nei giorni successivi.',
    faqs: [
      { q: 'Devo portare esami o risonanze?', a: 'Se li hai, sì: li guardo prima di iniziare. Non sono obbligatori per una prima visita.' },
      { q: 'Posso venire se il dolore è appena iniziato?', a: 'Sì. Se durante l’ascolto emergono segnali che richiedono prima un controllo medico, te lo dico e ti indirizzo al medico.' },
      { q: 'Mi dai anche esercizi da fare a casa?', a: 'Quando serve, ti lascio indicazioni semplici su movimenti e abitudini quotidiane, pensate per te.' },
    ],
  },
  {
    slug: 'cervicale-e-cefalee', title: 'Cervicale e cefalee',
    description: 'Collo bloccato, mal di testa ricorrente, mascella sempre tesa? Valuto insieme cervicale, postura e tensioni per trovare l’origine reale.',
    method: 'Parto dalla tua storia: quando compare il dolore, quanto dura, cosa lo accompagna. Valuto collo, spalle, torace e mandibola, perché lavorano insieme. Tratto con tecniche calibrate sulla tua risposta e ti spiego cosa osservare nelle giornate successive.',
    faqs: [
      { q: 'Lavori anche sulla mandibola?', a: 'Sì, quando la valutazione mostra tensioni in quella zona. Se serve, ti suggerisco di confrontarti anche con il tuo dentista.' },
      { q: 'Il mal di testa va prima visto da un medico?', a: 'Se è nuovo, molto intenso o diverso dal solito, sì: prima il medico. Posso lavorare accanto alle sue indicazioni.' },
    ],
  },
  {
    slug: 'gravidanza', title: 'Gravidanza',
    description: 'In gravidanza il corpo cambia in fretta, e non sempre comodamente. Ti accompagno dal secondo trimestre fino a dopo il parto, con tecniche dolci pensate per questa fase.',
    method: 'Ti ascolto su come stai vivendo questi cambiamenti e su cosa ti dà più fastidio. Valuto postura, bacino e respirazione, con posizioni comode per te. Uso tecniche dolci, adatte a questa fase, e ti do indicazioni pratiche per le settimane successive.',
    faqs: [
      { q: 'Da quando posso venire?', a: 'Ti accompagno dal secondo trimestre fino al periodo dopo il parto.' },
      { q: 'Serve il consenso del ginecologo?', a: 'È sempre bene informare chi segue la tua gravidanza. Io lavoro accanto al percorso medico, mai al suo posto.' },
      { q: 'Come mi sdraio durante la seduta?', a: 'Scegliamo insieme posizioni comode, di lato o semiseduta, in base alla fase della gravidanza.' },
    ],
  },
  {
    slug: 'pavimento-pelvico', title: 'Pavimento pelvico',
    description: 'Dolore pelvico, incontinenza, o vuoi prepararti al parto e recuperare dopo? È la mia area di specializzazione: ne parliamo con l’attenzione che merita.',
    method: 'Ne parliamo con calma e riservatezza: cosa senti, da quando, cosa hai già fatto. Valuto bacino, respirazione e postura, spiegandoti ogni passaggio prima di farlo. Il trattamento segue quello che emerge, e decidiamo insieme ogni cosa.',
    faqs: [
      { q: 'Mi sento a disagio a parlarne. È normale?', a: 'Sì, succede spesso. Procediamo con i tuoi tempi e ti spiego sempre prima cosa faccio.' },
      { q: 'Posso venire anche dopo il parto?', a: 'Sì, il recupero dopo il parto è uno dei motivi per cui le persone vengono da me.' },
    ],
  },
  {
    slug: 'sport-e-postura', title: 'Sport e postura',
    description: 'Infortunio da recuperare, o la classica schiena da scrivania tutto il giorno? Lavoro sul recupero e sulla postura, incluso il kinesiotaping quando serve.',
    method: 'Ti chiedo che sport fai o come passi la giornata, e cosa ti ha portato da me. Valuto come ti muovi, dove sei rigido e dove il corpo compensa. Tratto in base a quello che trovo e, quando serve, applico il kinesiotaping per accompagnare il recupero.',
    faqs: [
      { q: 'Posso continuare ad allenarmi?', a: 'Ne parliamo insieme: ti dico cosa ho trovato e come gestire gli allenamenti nei giorni successivi.' },
      { q: 'Il kinesiotaping è sempre incluso?', a: 'No, lo uso solo quando la valutazione mostra che può esserti utile.' },
    ],
  },
  {
    slug: 'disturbi-viscerali', title: 'Disturbi viscerali',
    description: 'Gonfiore, reflusso, intestino pigro? Posso lavorare su questo con un approccio complementare — sempre accanto al tuo medico, mai al suo posto.',
    method: 'Il mio è un approccio complementare, mai sostitutivo della diagnosi medica. Ti ascolto e guardo eventuali referti; poi valuto addome, diaframma, respirazione e postura. Lavoro con tecniche delicate e ti spiego cosa ho trovato.',
    faqs: [
      { q: 'Devo prima andare dal medico?', a: 'Sì: la diagnosi spetta al medico. Io lavoro in modo complementare, accanto alle sue indicazioni.' },
      { q: 'Le tecniche sull’addome sono fastidiose?', a: 'Sono manuali e delicate. Se qualcosa ti dà fastidio, dimmelo e adatto subito.' },
    ],
  },
];

export const faqs = [
  { question: 'Quanto dura la prima seduta?', answer: 'La prima visita dura circa 60 minuti. Include l’anamnesi, la valutazione posturale e il primo trattamento. Le sedute successive durano 45 minuti.' },
  { question: 'Quante sedute servono?', answer: 'Dipende dalla situazione e non posso dirtelo prima di vederti. Per problemi acuti recenti il percorso è generalmente più breve; per dolori cronici lavoro in modo più continuativo. Alla prima visita ti dico chiaramente cosa ho trovato, senza impegnarti in un piano che non conosci.' },
  { question: 'L’osteopatia fa male?', answer: 'Le tecniche sono manuali e calibrate sulla risposta del tuo corpo in tempo reale. Può esserci una sensazione di pressione intensa durante la seduta, e nelle 24–48 ore successive una leggera dolorabilità muscolare, simile a quella post-allenamento. Se qualcosa ti dà fastidio, dimmelo subito — adatto immediatamente.' },
  { question: 'Cosa succede fisicamente alla prima visita?', answer: 'Iniziamo con la tua storia clinica (circa 15 minuti). Poi valuto postura, mobilità e tensioni con le mani. Non serve spogliarsi completamente — indumenti comodi vanno bene. Il trattamento dura circa 40 minuti su lettino.' },
  { question: 'Quando l’osteopatia non è indicata?', answer: 'Non è adatta con fratture recenti non consolidate, infezioni acute, patologie tumorali in fase attiva, o urgenze mediche. In questi casi non tratto — indirizzo al medico o al pronto soccorso. Se hai dubbi, scrivimi prima di prenotare.' },
  { question: 'Cosa succede se non miglioro?', answer: 'Se dopo un ciclo concordato non ci sono miglioramenti apprezzabili, te lo dico chiaramente. L’osteopatia non è indicata per tutti i problemi. In questi casi, ti indirizzo verso lo specialista più adatto.' },
];
