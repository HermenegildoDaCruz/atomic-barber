import durag_red from "../assets/images/products/durags/red.png"
import durag_blue from "../assets/images/products/durags/blue.png"
import durag_black from "../assets/images/products/durags/black.png"

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
    image: durag_black,
    colors: null,
  },
  {
    id: "p3",
    name: "Pomada para waves",
    price: "6k",
    description: "Pomada para modelar e fixar penteados.",
    category: "Beleza",
    stock: 35,
    image: durag_black,
    colors: null,
  },
];
