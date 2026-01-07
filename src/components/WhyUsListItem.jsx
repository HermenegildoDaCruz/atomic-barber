import AnimatedListItem from "./AnimatedListItem";

export default function WhyUsListItem({ icon, title, description }) {
  return (
    <AnimatedListItem className="why-us-item">
      {icon}
      <h3 className="heading-terciary">{title}</h3>
      <p>{description}</p>
    </AnimatedListItem>
  );
}