import { motion } from "motion/react";
import { PROGRAMMS } from "../data/programms";
export default function Programms() {
    return (
        <section className="programms container">
            <div className="programms-container grid grid-2">
                {PROGRAMMS.map(program => (
                    <div className="program">
                        <div className="program-img-box">
                        <img src={program.image} alt={program.name} className="program-img"/>
                        </div>
                        <motion.div initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: -15 }}
            transition={{ duration: 1 }} className="program-content">
                            <h3 className="heading-terciary">{program.name}</h3>
                            <p>{program.description}</p>
                            {/* <ul>
                                <li>Recursos</li>
                            </ul> */}
                            <span className="program-price"> {program.price} AOA/{program.duration}</span>
                            <button className="program-btn">Inscrever-se</button>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}