// ID'S DESORDENADOS PARA QUE EL LECTOR LEA LOS PRODUCTOS POR CATEGORÍAS

const products = [
  {
    id: 1,
    name: "DYPSIS LUTESCENS",
    price: "29,99 €",
    description: "Planta, chrysalidocarpus lutescens, 24 cm",
    category: "Plantas medianas/grandes",
    image: 'imagenes/dypsis-lutescens.avif'
  },
  {
    id: 14,
    name: "POLYSCIAS",
    price: "14,99 €",
    description: "Planta con maceta, colores variados, 14 cm",
    category: "Plantas pequeñas",
    image: 'imagenes/polyscias.avif'
  },
  {
    id: 2,
    name: "STRELITZIA",
    price: "19,99 €",
    description: "Planta, Ave del paraíso, 19 cm",
    category: "Plantas medianas/grandes",
    image: 'imagenes/strelitzia.avif'
  },
  {
    id: 21,
    name: "KALANCHOE",
    price: "2,49 €",
    description: "Planta, kalanchoe calandiva colores, 6cm",
    category: "Plantas con flores",
    image: 'imagenes/kalanchoe.avif'
  },
  {
    id: 3,
    name: "EUPHORBIA ACRURENSIS",
    price: "19,99 €",
    description: "Planta, vela del desierto, 17 cm",
    category: "Plantas medianas/grandes",
    image: 'imagenes/euphorbia-acrurensis.avif'
  },
  {
    id: 22,
    name: "PHALAENOPSIS",
    price: "12,99 €",
    description: "Planta, multiflora, 12 cm",
    category: "Plantas con flores",
    image: 'imagenes/phalaenopsis.avif'
  },
  {
    id: 15,
    name: "FICUS",
    price: "12,99 €",
    description: "Planta con maceta, bonsai variados, 12 cm",
    category: "Plantas pequeñas",
    image: 'imagenes/ficus.avif'
  },
  {
    id: 16,
    name: "FICUS LYRATA BAMBINO",
    price: "5,99 €",
    description: "Planta, ficus lira, 9cm",
    category: "Plantas pequeñas",
    image: 'imagenes/ficus-lyrata-bambino.avif'
  },
  {
    id: 4,
    name: "PACHIRA AQUATICA",
    price: "39,99 €",
    description: "Planta, Pachira, 27 cm",
    category: "Plantas medianas/grandes",
    image: 'imagenes/pachira-aquatica.avif'
  },
  {
    id: 5,
    name: "HOWEA FORSTERIANA",
    price: "49,99 €",
    description: "Planta, 24cm",
    category: "Plantas medianas/grandes",
    image: 'imagenes/howea-forsteriana.avif'
  },
  {
    id: 6,
    name: "YUCCA ELEPHANTIPES",
    price: "24,99 €",
    description: "Planta, Izote/2 troncos, 24 cm",
    category: "Plantas medianas/grandes",
    image: 'imagenes/yucca-elephantipes.avif'
  },
  {
    id: 7,
    name: "CALATHEA",
    price: "24,99 €",
    description: "Planta, calatea/mezcla de especies de plantas, 19 cm",
    category: "Plantas medianas/grandes",
    image: 'public/imagenes/calathea.avif'
  },
  {
    id: 8,
    name: "HIPPEASTRUM",
    price: "4,99 €",
    description: "Planta, Amarilis/2 tazas colores variados, 13 cm",
    category: "Plantas medianas/grandes",
    image: 'imagenes/hippeastrum.avif'
  },
  {
    id: 23,
    name: "POINSETTIA",
    price: "4,99 €",
    description: "Planta, euphorbia pulcherrima, 13 cm",
    category: "Plantas con flores",
    image: 'imagenes/poinsettia.avif'
  },
  {
    id: 24,
    name: "HYACINTHUS",
    price: "2,99 €",
    description: "Planta, 3 bulbos, jacinto colores variados, 12 cm",
    category: "Plantas con flores",
    image: 'public/imagenes/hyacinthus.avif'
  },
  {
    id: 17,
    name: "SUCCULENT",
    price: "2,99 €",
    description: "Planta con maceta, 6 cm",
    category: "Plantas pequeñas",
    image: 'imagenes/succulent.avif'
  },
  {
    id: 9,
    name: "SANSEVIERIA TRIFASCIATA",
    price: "12,99 €",
    description: "Planta, Sansevieria, 14 cm",
    category: "Plantas medianas/grandes",
    image: 'imagenes/sansevieria-trifasciata.avif'
  },
  {
    id: 10,
    name: "PICEA GLAUCA CONICA",
    price: "6,99 €",
    description: "Planta, abeto blanco, 15 cm",
    category: "Plantas medianas/grandes",
    image: 'imagenes/picea-glauca-conica.avif'
  },
  {
    id: 18,
    name: "FEJKA",
    price: "2,99 €",
    description: "Planta artificial, interior/exterior colgante/eucalipto, 9 cm",
    category: "Plantas pequeñas",
    image: 'imagenes/fejka.avif'
  },
  {
    id: 11,
    name: "DRACAENA MARGINATA",
    price: "14,99 €",
    description: "Planta, Drácena Marginata/2 troncos, 19 cm",
    category: "Plantas medianas/grandes",
    image: 'imagenes/dracaena-marginata.avif'
  },
  {
    id: 12,
    name: "MONSTERA DELICIOSA",
    price: "5,99 €",
    description: "Planta, cerimán, 12 cm",
    category: "Plantas medianas/grandes",
    image: 'imagenes/monstera-deliciosa.avif'
  },
  {
    id: 13,
    name: "SMYCKA",
    price: "0,99 €",
    description: "Flor artificial, eucalipto/rosa, 30 cm",
    category: "Plantas medianas/grandes",
    image: 'imagenes/smycka.avif'
  },
  {
    id: 19,
    name: "ASPARAGUS SETACEUS",
    price: "2,99 €",
    description: "Planta, esparraguera, 9 cm",
    category: "Plantas pequeñas",
    image: 'imagenes/asparagus-setaceus.avif'
  },
  {
    id: 20,
    name: "COFFEA ARABICA",
    price: "3,99 €",
    description: "Planta, planta del café, 9 cm",
    category: "Plantas pequeñas",
    image: 'public/imagenes/coffea-arabica.avif'
  },
];

export default products;


// ID DE LOS PRODUCTOS SI LOS MOSTRASE SIN CATEGORÍAS (PARA QUE EL ELCTOR FUNCIONE)

// const productos = [
//     {
//       id: 1,
//       name: "DYPSIS LUTESCENS",
//       price: "29,99 €",
//       description: "Planta, chrysalidocarpus lutescens, 24 cm",
//       category: "Plantas medianas/grandes",
//       image: 'imagenes/dypsis-lutescens.avif'
//     },
//     {
//       id: 2,
//       name: "POLYSCIAS",
//       price: "14,99 €",
//       description: "Planta con maceta, colores variados, 14 cm",
//       category: "Plantas pequeñas",
//       image: 'imagenes/polyscias.avif'
//     },
//     {
//       id: 3,
//       name: "STRELITZIA",
//       price: "19,99 €",
//       description: "Planta, Ave del paraíso, 19 cm",
//       category: "Plantas medianas/grandes",
//       image: 'imagenes/strelitzia.avif'
//     },
//     {
//       id: 4,
//       name: "KALANCHOE",
//       price: "2,49 €",
//       description: "Planta, kalanchoe calandiva colores, 6cm",
//       category: "Plantas con flores",
//       image: 'imagenes/kalanchoe.avif'
//     },
//     {
//       id: 5,
//       name: "EUPHORBIA ACRURENSIS",
//       price: "19,99 €",
//       description: "Planta, vela del desierto, 17 cm",
//       category: "Plantas medianas/grandes",
//       image: 'imagenes/euphorbia-acrurensis.avif'
//     },
//     {
//       id: 6,
//       name: "PHALAENOPSIS",
//       price: "12,99 €",
//       description: "Planta, multiflora, 12 cm",
//       category: "Plantas con flores",
//       image: 'imagenes/phalaenopsis.avif'
//     },
//     {
//       id: 7,
//       name: "FICUS",
//       price: "12,99 €",
//       description: "Planta con maceta, bonsai variados, 12 cm",
//       category: "Plantas pequeñas",
//       image: 'imagenes/ficus.avif'
//     },
//     {
//       id: 8,
//       name: "FICUS LYRATA BAMBINO",
//       price: "5,99 €",
//       description: "Planta, ficus lira, 9cm",
//       category: "Plantas pequeñas",
//       image: 'imagenes/ficus-lyrata-bambino.avif'
//     },
//     {
//       id: 9,
//       name: "PACHIRA AQUATICA",
//       price: "39,99 €",
//       description: "Planta, Pachira, 27 cm",
//       category: "Plantas medianas/grandes",
//       image: 'imagenes/pachira-aquatica.avif'
//     },
//     {
//       id: 10,
//       name: "HOWEA FORSTERIANA",
//       price: "49,99 €",
//       description: "Planta, 24cm",
//       category: "Plantas medianas/grandes",
//       image: 'imagenes/howea-forsteriana.avif'
//     },
//     {
//       id: 11,
//       name: "YUCCA ELEPHANTIPES",
//       price: "24,99 €",
//       description: "Planta, Izote/2 troncos, 24 cm",
//       category: "Plantas medianas/grandes",
//       image: 'imagenes/yucca-elephantipes.avif'
//     },
//     {
//       id: 12,
//       name: "CALATHEA",
//       price: "24,99 €",
//       description: "Planta, calatea/mezcla de especies de plantas, 19 cm",
//       category: "Plantas medianas/grandes",
//       image: 'public/imagenes/calathea.avif'
//     },
//     {
//       id: 13,
//       name: "HIPPEASTRUM",
//       price: "4,99 €",
//       description: "Planta, Amarilis/2 tazas colores variados, 13 cm",
//       category: "Plantas medianas/grandes",
//       image: 'imagenes/hippeastrum.avif'
//     },
//     {
//       id: 14,
//       name: "POINSETTIA",
//       price: "4,99 €",
//       description: "Planta, euphorbia pulcherrima, 13 cm",
//       category: "Plantas con flores",
//       image: 'imagenes/poinsettia.avif'
//     },
//     {
//       id: 15,
//       name: "HYACINTHUS",
//       price: "2,99 €",
//       description: "Planta, 3 bulbos, jacinto colores variados, 12 cm",
//       category: "Plantas con flores",
//       image: 'public/imagenes/hyacinthus.avif'
//     },
//     {
//       id: 16,
//       name: "SUCCULENT",
//       price: "2,99 €",
//       description: "Planta con maceta, 6 cm",
//       category: "Plantas pequeñas",
//       image: 'imagenes/succulent.avif'
//     },
//     {
//       id: 17,
//       name: "SANSEVIERIA TRIFASCIATA",
//       price: "12,99 €",
//       description: "Planta, Sansevieria, 14 cm",
//       category: "Plantas medianas/grandes",
//       image: 'imagenes/sansevieria-trifasciata.avif'
//     },
//     {
//       id: 18,
//       name: "PICEA GLAUCA CONICA",
//       price: "6,99 €",
//       description: "Planta, abeto blanco, 15 cm",
//       category: "Plantas medianas/grandes",
//       image: 'imagenes/picea-glauca-conica.avif'
//     },
//     {
//       id: 19,
//       name: "FEJKA",
//       price: "2,99 €",
//       description: "Planta artificial, interior/exterior colgante/eucalipto, 9 cm",
//       category: "Plantas pequeñas",
//       image: 'imagenes/fejka.avif'
//     },
//     {
//       id: 20,
//       name: "DRACAENA MARGINATA",
//       price: "14,99 €",
//       description: "Planta, Drácena Marginata/2 troncos, 19 cm",
//       category: "Plantas medianas/grandes",
//       image: 'imagenes/dracaena-marginata.avif'
//     },
//     {
//       id: 21,
//       name: "MONSTERA DELICIOSA",
//       price: "5,99 €",
//       description: "Planta, cerimán, 12 cm",
//       category: "Plantas medianas/grandes",
//       image: 'imagenes/monstera-deliciosa.avif'
//     },
//     {
//       id: 22,
//       name: "SMYCKA",
//       price: "0,99 €",
//       description: "Flor artificial, eucalipto/rosa, 30 cm",
//       category: "Plantas medianas/grandes",
//       image: 'imagenes/smycka.avif'
//     },
//     {
//       id: 23,
//       name: "ASPARAGUS SETACEUS",
//       price: "2,99 €",
//       description: "Planta, esparraguera, 9 cm",
//       category: "Plantas pequeñas",
//       image: 'imagenes/asparagus-setaceus.avif'
//     },
//     {
//       id: 24,
//       name: "COFFEA ARABICA",
//       price: "3,99 €",
//       description: "Planta, planta del café, 9 cm",
//       category: "Plantas pequeñas",
//       image: 'public/imagenes/coffea-arabica.avif'
//     },
//   ];
  
//   export default productos;