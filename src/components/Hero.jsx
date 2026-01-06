import hero_img from "../assets/images/hero-img.png";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="hero container"
    >
      <h1 className="heading-primary">Vamos botar o cabelo na régua?</h1>
      <p className="heading-description">Sua beleza é uma prioridade.</p>
      <button className="cta-button">Agende agora</button>
      <div className="hero-img-box">
        <img src={hero_img} alt="Hero" className="hero-img" />
        <div className="blur-down"></div>
        <div className="hero-stat">+400 clientes satisfeitos</div>
      </div>
    </motion.section>
  );
}
