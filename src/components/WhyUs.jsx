import hairstylesImage from "../assets/images/avatar-right.png";
import WhyUsListItem from "./WhyUsListItem";
import { whyUsData } from "../data/why-us-data";

export default function WhyUs() {
  return (
    <section className="why-us container">
      <h2 className="heading-secondary">Por que escolher a Atomic Barber?</h2>
      <div className="why-us-content grid grid-2">
        <div className="why-us-img-box">
          <img src={hairstylesImage} alt="HairStyles image" className="why-us-img" />
          <div className="blur-down"></div>
        </div>
        <ul className="why-us-list grid grid-2">
          {whyUsData.map((item) => (
            <WhyUsListItem
              key={item.id}
              iconName={item.iconName}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
