import adult_hairstyle_1 from "../assets/images/hairstyles/adults/hairstyle-1.png";
import adult_hairstyle_2 from "../assets/images/hairstyles/adults/hairstyle-2.png";
import adult_hairstyle_3 from "../assets/images/hairstyles/adults/hairstyle-3.png";
import adult_hairstyle_4 from "../assets/images/hairstyles/adults/hairstyle-4.png";
import adult_hairstyle_5 from "../assets/images/hairstyles/adults/hairstyle-5.png";
import adult_hairstyle_6 from "../assets/images/hairstyles/adults/hairstyle-6.png";
// ----------------------------
import child_hairstyle_1 from "../assets/images/hairstyles/children/hairstyle-1.png";
import child_hairstyle_2 from "../assets/images/hairstyles/children/hairstyle-2.png";

export const hairstylePrices = {
  adults: [
    {
      id: "a1",
      image: adult_hairstyle_6,
      name: "Rasta",
      price: "40k",
    },
    {
      id: "a2",
      image: adult_hairstyle_5,
      name: "Corte + Coloração",
      price: "4k",
    },
    {
      id: "a3",
      image: adult_hairstyle_3,
      name: "Corte + Barba",
      price: "3k",
    },
    {
      id: "a4",
      image: adult_hairstyle_4,
      name: "Corte + Enroladinho",
      price: "5k",
    },
    {
      id: "a5",
      image: adult_hairstyle_2,
      name: "Francês",
      price: "1.5k",
    },
    {
      id: "a6",
      image: adult_hairstyle_1,
      name: "Corte + Desenho",
      price: "1.8k",
    },
  ],
  children: [
    {
      id: "c1",
      image: child_hairstyle_1,
      name: "Corte Infantil (até 16 anos)",
      price: "1.2k",
    },
    {
      id: "c2",
      image: child_hairstyle_2,
      name: "Corte + Tranças (até 16 anos)",
      price: "7k",
    },
    // {
    //   id: 3,
    //   image: child_hairstyle_3,
    //   name: "Rasta (até 16 anos)",
    //   price: 25000,
    // },
  ],
};
