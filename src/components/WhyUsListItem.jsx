import AnimatedListItem from "./AnimatedListItem";

export default function WhyUsListItem({ iconName, title, description }) {
  return (
    <AnimatedListItem className="why-us-item">
      <ion-icon name={iconName} className="why-us-icon"></ion-icon>
      <h3 className="heading-terciary">{title}</h3>
      <p>{description}</p>
    </AnimatedListItem>
  );
}