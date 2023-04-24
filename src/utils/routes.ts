import type { Route } from '../types/Route';

export const routes: Route[] = [
  {
    name: 'Praia vai quem quer',
    slug: 'praia-vai-quem-quer',
    duration: '4 a 5 Horas',
    dueDate: new Date('2021-03-23'),
    availableHours: ['09:00', '17:00'],
    experience: ['Alimentação inclusa', 'Transporte incluso'],
    description: [
      'A "Praia Vai Quem Quer" em Cotijuba é um destino imperdível para quem busca relaxar em uma praia paradisíaca e tranquila. Abaixo, confira algumas vantagens de visitar o local:',
      'Um lugar ideal para relaxar',
      'Além disso, é possível fazer um passeio de barco para chegar até a praia, aproveitando para conhecer outras belezas da ilha de Cotijuba. Durante a viagem, é comum avistar golfinhos e outras espécies marinhas.',
      'Para aproveitar ainda mais a sua visita à ilha, você pode experimentar a culinária paraense em restaurantes locais, conhecer o artesanato da região ou fazer passeios de bugue pela ilha.',
      'Não perca a oportunidade de conhecer a beleza natural da "Praia Vai Quem Quer" em Cotijuba e desfrutar de momentos de tranquilidade em um paraíso tropical.',
    ],
    fullPrice: 1756,
    priceWithDiscount: 983,
    priceInstallmentsNumber: 12,
    images: [
      '/img/vai-quem-quer.webp',
      '/img/vai-quem-quer.webp',
      '/img/vai-quem-quer.webp',
    ],
    tags: ['Cotico'],
    reviews: [
      {
        name: 'João da Silva',
        avatar: '/img/avatar.webp',
        reviewTitle: 'Muito bom',
        review: 'Muito bom, recomendo',
        rating: 5,
      },
    ],
  },
];
