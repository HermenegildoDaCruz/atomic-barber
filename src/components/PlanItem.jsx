import { motion } from "framer-motion";

export default function PlanItem({
  title,
  description,
  features,
  price,
  buttonText,
  highlighted,
}) {
  let classes = "plan";
  if (highlighted) {
    classes += " highlighted-plan";
  }

  return (
    <motion.div
      initial={{ filter: "blur(10px)" }}
      whileInView={{ filter: "blur(0px)" }}
      transition={{ duration: 0.4 }}
      className={classes}
    >
      <div>
        <h3 className="heading-terciary">{title}</h3>
        <p>{description}</p>
        {features && (
          <ul className="plan-features-list">
            {features.map((feature, index) => (
              <li className="plan-feature" key={index}>
                <ion-icon
                  name={feature.iconName}
                  className="plan-icon"
                ></ion-icon>
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="plan-price">{price}</div>
      </div>
      <button className="plan-btn">{buttonText}</button>
    </motion.div>
  );
}
