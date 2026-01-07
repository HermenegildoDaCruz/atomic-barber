import { image } from "motion/react-client"
import hairstyle_1 from "../assets/images/hairstyles/hairstyle-1.png"
import hairstyle_2 from "../assets/images/hairstyles/hairstyle-2.png"
import hairstyle_3 from "../assets/images/hairstyles/hairstyle-3.png"

export const hairstylePrices = {
    adults: [
      {
        id: 1,
        image: hairstyle_1,
        name: "Corte + Desenho",
        price: 1800,
      },
      {
        id: 2,
        image: hairstyle_2,
        name: "Francês",
        price: 1500,
      },
      {
        id: 3,
        image: hairstyle_3,
        name: "Corte + Barba",
        price: 3000,
      },
      // {
  //     name: "Corte + Hidratação",
  //     price: 2500
  // },
  // {
  //     name: "Corte + Coloração",
  //     price: 4000
  // },
//   {
//         name: "Rasta",
//         price: 40000,
//      }
    ],
    children: [
      {
        id: 1,
        name: "Corte Infantil (até 16 anos)",
        price: 1200,
     },
    {
        id: 2,
        name: "Corte + Coloração (até 16 anos)",
        price: 2000,
     },
     {
        id: 3,
        name: "Rasta (até 16 anos)",
        price: 25000,
     }

    ],
  }
