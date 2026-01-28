import { hairstylePrices } from "../data/hairstyle-prices";
import HairStyleItem from "./HairStyleItem";
import { useBooleanHook } from "../hooks/useBooleanHook";

export default function HairStylePrices() {
  const {
    value: showAdultsPrices,
    setTrue: showAdultsHairstyles,
    setFalse: showChildrenHairstyles,
  } = useBooleanHook(true);
  const hairstyles = showAdultsPrices
    ? hairstylePrices.adults
    : hairstylePrices.children;

  return (
    <section className="hairstyle-prices container" id="hairstyle-prices">
      <h2 className="heading-secondary">Cortes de cabelo</h2>
      <menu className="menu">
        <li>
          <button
            className={showAdultsPrices ? "menu-btn btn-actived" : "menu-btn"}
            onClick={showAdultsHairstyles}
          >
            Adultos
          </button>
        </li>
        <li>
          <button
            className={!showAdultsPrices ? "menu-btn btn-actived" : "menu-btn"}
            onClick={showChildrenHairstyles}
          >
            Crianças
          </button>
        </li>
      </menu>
      <ul className="hairstyle-list">
        {hairstyles.map((hairstyle) => (
          <HairStyleItem key={hairstyle.id} item={hairstyle}/>
        ))}
      </ul>
    </section>
  );
}
