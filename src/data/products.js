import durag_red from "../assets/images/products/durags/red.png"
import durag_blue from "../assets/images/products/durags/blue.png"
import durag_black from "../assets/images/products/durags/black.png"

import brush from "../assets/images/products/brush.png"
import pomade from "../assets/images/products/pomade.png"
import fullPackage from "../assets/images/products/full-package.png"

export const products = [
  {
    id: "p1",
    name: "Durag",
    price: "4k",
    description: "Durag de algodão para proteção do cabelo.",
    category: "Beleza",
    stock: 42,
    colors: [
      {
        id: 1,
        name: "Vermelho",
        image: durag_red,
      },
      {
        id: 2,
        name: "Azul",
        image: durag_blue,
      },
      {
        id: 3,
        name: "Black",
        image: durag_black,
      },
    ],
  },
  {
    id: "p2",
    name: "Escova de Cabelo",
    price: "2k",
    description: "Escova de cabelo para waves.",
    category: "Beleza",
    stock: 58,
    image: brush,
    colors: null,
  },
  {
    id: "p3",
    name: "Pacote Completo para Waves",
    price: "10k",
    description: "Escova + Pomada + Durag.",
    category: "Beleza",
    stock: 10,
    image: fullPackage,
    colors: null,
  },
  {
    id: "p4",
    name: "Pomada para waves",
    price: "6k",
    description: "Pomada para modelar e fixar penteados.",
    category: "Beleza",
    stock: 35,
    image: pomade,
    colors: null,
  },
];
