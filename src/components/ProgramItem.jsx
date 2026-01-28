import { motion } from "motion/react";

export default function ProgramItem({ program }) {
  return (
    <div className="program">
      <div className="program-img-box">
        <img src={program.image} alt={program.name} className="program-img" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: -15 }}
        transition={{ duration: 1 }}
        className="program-content"
      >
        <h3 className="heading-terciary">{program.name}</h3>
        <p>{program.description}</p>
        <span className="program-price">
          {program.price} AOA/{program.duration}
        </span>
        <button className="program-btn">Inscrever-se</button>
      </motion.div>
    </div>
  );
}
