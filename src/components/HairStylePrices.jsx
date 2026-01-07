import { useState } from "react";
import { hairstylePrices } from "../data/hairstyle-prices";
import AnimatedListItem from "./AnimatedListItem";

export default function HairStylePrices(){
  const [showAdultsPrices, setShowAdultsPrices] = useState(true)
  
  function showAdultsHairstyles(){
    setShowAdultsPrices(true)
  }
  function showChildrenHairstyles(){
    setShowAdultsPrices(false)
  }

    //   const hairstyles = showAdultsPrices ? hairstylePrices.adults:hairstylePrices.children
    const hairstyles = hairstylePrices.adults
  
  return (
    <section className="hairstyle-prices container">
      <h2 className="heading-secondary">Cortes de cabelo</h2>
      <menu className="menu">
        <li>
          <button className={showAdultsPrices ? "menu-btn btn-actived":"menu-btn"} onClick={showAdultsHairstyles}>Adultos</button>
        </li>
        <li>
          <button className={!showAdultsPrices ? "menu-btn btn-actived":"menu-btn"} onClick={showChildrenHairstyles}>Crianças</button>
        </li>
      </menu>
      <ul className="hairstyle-list">
        {hairstyles.map((hairstyle) => (
          <AnimatedListItem key={hairstyle.id} className="hairstyle">
            <div className="hairstyle-img-box">
                <img
              src={hairstyle.image}
              alt={hairstyle.name}
              className="hairstyle-img"
            />
            </div>
            <h3 className="heading-terciary">{hairstyle.name}</h3>
            <p className="hairstyle-price">{hairstyle.price} A0A</p>
            <button className="hairstyle-btn">Selecionar</button>
          </AnimatedListItem>
        ))}
      </ul>
    </section>
  );
}
