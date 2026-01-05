// ID'S DESORDENADOS PARA QUE EL LECTOR LEA LOS PRODUCTOS POR CATEGORÍAS

const products = [
    {
      id: 1,
      name: "DYPSIS LUTESCENS",
      price: "29,99 €",
      description: "Planta, chrysalidocarpus lutescens, 24 cm",
      category: "Plantas medianas/grandes",
      image: 'imagenes/dypsis-lutescens.avif',
      information: "Dypsis lutescens es una especie tropical de palmera originaria de Madagascar y utilizada como planta ornamental."
    },
    {
      id: 14,
      name: "POLYSCIAS",
      price: "14,99 €",
      description: "Planta con maceta, colores variados, 14 cm",
      category: "Plantas pequeñas",
      image: 'imagenes/polyscias.avif',
      information: "Polyscias es un género de árboles y arbustos perennifolios que consta de unas 100 especies distribuidas por los trópicos, islas del Pacífico y Australia, también se encuentran abundantemente en Nueva Guinea, Nueva Caledonia e islas Mascareñas."
    },
    {
      id: 2,
      name: "STRELITZIA",
      price: "19,99 €",
      description: "Planta, Ave del paraíso, 19 cm",
      category: "Plantas medianas/grandes",
      image: 'imagenes/strelitzia.avif',
      information: "Strelitzia, llamado popularmente ave del paraíso o flor del paraíso entre otros nombres, es un género con 5 especies reconocidas perteneciente a la familia Strelitziaceae. Es nativo de Sudáfrica.​​"
    },
    {
      id: 21,
      name: "KALANCHOE",
      price: "2,49 €",
      description: "Planta, kalanchoe calandiva colores, 6cm",
      category: "Plantas con flores",
      image: 'imagenes/kalanchoe.avif',
      information: "Kalanchoe es un género con 170 especies aceptadas ​ de la familia de las crasuláceas, nativas de África tropical, especialmente de Madagascar; unas cuantas han sido introducidas en América y crecen en estado silvestre."
    },
    {
      id: 3,
      name: "EUPHORBIA ACRURENSIS",
      price: "19,99 €",
      description: "Planta, vela del desierto, 17 cm",
      category: "Plantas medianas/grandes",
      image: 'imagenes/euphorbia-acrurensis.avif',
      information: "La Euphorbia acrurensis es una suculenta de África con tallos acanalados que crecen como un candelabro y produce pequeñas hojas ovales en los bordes, a menudo confundida con un cactus."
    },
    {
      id: 22,
      name: "PHALAENOPSIS",
      price: "12,99 €",
      description: "Planta, multiflora, 12 cm",
      category: "Plantas con flores",
      image: 'imagenes/phalaenopsis.avif',
      information: "Phalaenopsis es un género de las comúnmente llamadas orquídeas alevilla, orquídeas mariposa y también orquídeas boca de aproximadamente setenta y cinco especies de orquídeas de la familia Orchidaceae. Son nativas de todo el sureste asiático."
    },
    {
      id: 15,
      name: "FICUS",
      price: "12,99 €",
      description: "Planta con maceta, bonsai variados, 12 cm",
      category: "Plantas pequeñas",
      image: 'imagenes/ficus.avif',
      information: "Ficus es un género de plantas con flores que incluye alrededor de 850 especies de árboles, arbustos y enredaderas, conocidas comúnmente como higueras o ficus. Son nativas de regiones tropicales y subtropicales de todo el mundo."
    },
    {
      id: 16,
      name: "FICUS LYRATA BAMBINO",
      price: "5,99 €",
      description: "Planta, ficus lira, 9cm",
      category: "Plantas pequeñas",
      image: 'imagenes/ficus-lyrata-bambino.avif',
      information: "El Ficus lyrata 'Bambino' es una versión compacta del ficus lira, ideal para interiores gracias a su tamaño reducido. Requiere luz indirecta brillante, riego moderado (permitiendo que la capa superior del sustrato se seque entre riegos) y alta humedad, siendo sensible al frío y al exceso de riego. "
    },
    {
      id: 4,
      name: "PACHIRA AQUATICA",
      price: "39,99 €",
      description: "Planta, Pachira, 27 cm",
      category: "Plantas medianas/grandes",
      image: 'imagenes/pachira-aquatica.avif',
      information: "Pachira aquatica, llamada popularmente castaño de Guayana, ​ es una especie arbórea de la familia Bombaceae. Es nativa del norte de Sudamérica y América Central.​"
    },
    {
      id: 5,
      name: "HOWEA FORSTERIANA",
      price: "49,99 €",
      description: "Planta, 24cm",
      category: "Plantas medianas/grandes",
      image: 'imagenes/howea-forsteriana.avif',
      information: "Howea forsteriana, conocida comúnmente como kentia o palmera kentia, es una especie de palmera originaria de la isla Lord Howe, en Australia. Es apreciada como planta ornamental por su elegancia y resistencia en interiores."
    },
    {
      id: 6,
      name: "YUCCA ELEPHANTIPES",
      price: "24,99 €",
      description: "Planta, Izote/2 troncos, 24 cm",
      category: "Plantas medianas/grandes",
      image: 'imagenes/yucca-elephantipes.avif',
      information: "Yucca elephantipes, conocida comúnmente como yuca de tronco o yuca gigante, es una planta suculenta originaria de México y América Central. Es apreciada como planta ornamental por su resistencia y facilidad de cuidado en interiores."
    },
    {
      id: 7,
      name: "CALATHEA",
      price: "24,99 €",
      description: "Planta, calatea/mezcla de especies de plantas, 19 cm",
      category: "Plantas medianas/grandes",
      image: 'public/imagenes/calathea.avif',
      information: "Calathea es un género de plantas tropicales conocidas por sus hojas decorativas y patrones llamativos. Son nativas de América Central y del Sur, y se cultivan comúnmente como plantas de interior debido a su belleza y capacidad para prosperar en condiciones de poca luz."
    },
    {
      id: 8,
      name: "HIPPEASTRUM",
      price: "4,99 €",
      description: "Planta, Amarilis/2 tazas colores variados, 13 cm",
      category: "Plantas medianas/grandes",
      image: 'imagenes/hippeastrum.avif',
      information: "Hippeastrum es un género de plantas bulbosas conocidas por sus grandes flores vistosas. Son nativas de América del Sur y se cultivan comúnmente como plantas ornamentales en interiores y jardines."
    },
    {
      id: 23,
      name: "POINSETTIA",
      price: "4,99 €",
      description: "Planta, euphorbia pulcherrima, 13 cm",
      category: "Plantas con flores",
      image: 'imagenes/poinsettia.avif',
      information: "Euphorbia pulcherrima, conocida comúnmente como flor de Nochebuena o poinsettia, es una planta originaria de México y América Central. Es famosa por sus hojas rojas brillantes que se asemejan a flores y se utiliza ampliamente como decoración navideña."
    },
    {
      id: 24,
      name: "HYACINTHUS",
      price: "2,99 €",
      description: "Planta, 3 bulbos, jacinto colores variados, 12 cm",
      category: "Plantas con flores",
      image: 'public/imagenes/hyacinthus.avif',
      information: "Hyacinthus es un género de plantas bulbosas conocidas por sus flores fragantes y coloridas. Son nativas de la región mediterránea y se cultivan comúnmente en jardines y como plantas de interior."
    },
    {
      id: 17,
      name: "SUCCULENT",
      price: "2,99 €",
      description: "Planta con maceta, 6 cm",
      category: "Plantas pequeñas",
      image: 'imagenes/succulent.avif',
      information: "Las suculentas son plantas que almacenan agua en sus hojas, tallos o raíces, lo que les permite sobrevivir en ambientes áridos. Son populares como plantas de interior y exterior debido a su bajo mantenimiento y variedad de formas y colores."
    },
    {
      id: 9,
      name: "SANSEVIERIA TRIFASCIATA",
      price: "12,99 €",
      description: "Planta, Sansevieria, 14 cm",
      category: "Plantas medianas/grandes",
      image: 'imagenes/sansevieria-trifasciata.avif',
      information: "Sansevieria trifasciata, conocida comúnmente como lengua de suegra o espada de San Jorge, es una planta suculenta originaria de África occidental. Es apreciada como planta de interior por su resistencia y capacidad para purificar el aire."
    },
    {
      id: 10,
      name: "PICEA GLAUCA CONICA",
      price: "6,99 €",
      description: "Planta, abeto blanco, 15 cm",
      category: "Plantas medianas/grandes",
      image: 'imagenes/picea-glauca-conica.avif',
      information: "Picea glauca 'Conica', conocida comúnmente como abeto blanco enano, es una variedad compacta del abeto blanco originaria de América del Norte. Es apreciada como planta ornamental en jardines y paisajes debido a su forma cónica y follaje denso."
    },
    {
      id: 18,
      name: "FEJKA",
      price: "2,99 €",
      description: "Planta artificial, interior/exterior colgante/eucalipto, 9 cm",
      category: "Plantas pequeñas",
      image: 'imagenes/fejka.avif',
      information: "FEJKA es una planta artificial diseñada para uso en interiores y exteriores. Su apariencia realista la hace ideal para decorar espacios sin necesidad de cuidados o mantenimiento."
    },
    {
      id: 11,
      name: "DRACAENA MARGINATA",
      price: "14,99 €",
      description: "Planta, Drácena Marginata/2 troncos, 19 cm",
      category: "Plantas medianas/grandes",
      image: 'imagenes/dracaena-marginata.avif',
      information: "Dracaena marginata, conocida comúnmente como drácena de borde rojo, es una planta ornamental originaria de Madagascar. Es apreciada como planta de interior por su resistencia y capacidad para purificar el aire."
    },
    {
      id: 12,
      name: "MONSTERA DELICIOSA",
      price: "5,99 €",
      description: "Planta, cerimán, 12 cm",
      category: "Plantas medianas/grandes",
      image: 'imagenes/monstera-deliciosa.avif',
      information: "Monstera deliciosa, conocida comúnmente como costilla de Adán o monstera, es una planta tropical originaria de América Central. Es apreciada como planta ornamental por sus grandes hojas perforadas y su capacidad para adaptarse a condiciones de interior."
    },
    {
      id: 13,
      name: "SMYCKA",
      price: "0,99 €",
      description: "Flor artificial, eucalipto/rosa, 30 cm",
      category: "Plantas medianas/grandes",
      image: 'imagenes/smycka.avif',
      information: "SMYCKA es una flor artificial diseñada para uso decorativo en interiores. Su apariencia realista la hace ideal para embellecer espacios sin necesidad de cuidados o mantenimiento."
    },
    {
      id: 19,
      name: "ASPARAGUS SETACEUS",
      price: "2,99 €",
      description: "Planta, esparraguera, 9 cm",
      category: "Plantas pequeñas",
      image: 'imagenes/asparagus-setaceus.avif',
      information: "Asparagus setaceus, conocida comúnmente como esparraguera plumosa o helecho de esparto, es una planta ornamental originaria de Sudáfrica. Es apreciada por su follaje delicado y plumoso, y se utiliza comúnmente en arreglos florales y como planta de interior."
    },
    {
      id: 20,
      name: "COFFEA ARABICA",
      price: "3,99 €",
      description: "Planta, planta del café, 9 cm",
      category: "Plantas pequeñas",
      image: 'public/imagenes/coffea-arabica.avif',
      information: "Coffea arabica, conocida comúnmente como cafeto arábigo, es una especie de planta originaria de Etiopía y Yemen. Es la fuente principal del café arábica, que es apreciado por su sabor suave y aromático."
    },
  ];
  
  export default products;
  
