import { motion } from "motion/react";

// Clean this code
export default function Plans() {
    return (
        <div className="plans-container grid grid-2">
        <motion.div
          initial={{ filter: "blur(10px)" }}
          whileInView={{ filter: "blur(0px)" }}
          transition={{ duration: 0.4 }}
          className="plan"
        >
          <div>
            <h3 className="heading-terciary">Plano Básico</h3>
            <p>Ideal para iniciantes que desejam começar sua jornada.</p>
            <ul className="plan-features-list">
              <li className="plan-feature">
                <ion-icon name="cut-outline" className="plan-icon"></ion-icon>
                <span>3x cortes a sua escolha por mês</span>
              </li>
              <li className="plan-feature">
                <ion-icon name="tv-outline" className="plan-icon"></ion-icon>
                <span>Acesso gratuito aos programas</span>
              </li>
              <li className="plan-feature">
                <ion-icon name="logo-whatsapp" className="plan-icon"></ion-icon>
                <span>Suporte via whatsapp</span>
              </li>
              <li className="plan-feature">
                <ion-icon
                  name="people-outline"
                  className="plan-icon"
                ></ion-icon>
                <span>Comunidade online</span>
              </li>
            </ul>
            <div className="plan-price">30k AOA/mês</div>
          </div>
          <button className="plan-btn">Assinar Plano Básico</button>
        </motion.div>
        <motion.div
          initial={{ filter: "blur(10px)" }}
          whileInView={{ filter: "blur(0px)" }}
          transition={{ duration: 0.4 }}
          className="plan highlighted-plan"
        >
          <div>
            <h3 className="heading-terciary">Plano Premium</h3>
            <p>Perfeito para quem busca uma experiência completa.</p>
            <ul className="plan-features-list">
              <li className="plan-feature">
                <ion-icon name="cut-outline" className="plan-icon"></ion-icon>
                <span>4x cortes por mês</span>
              </li>
              <li className="plan-feature">
                <ion-icon name="tv-outline" className="plan-icon"></ion-icon>
                <span>Acesso gratuito aos programas</span>
              </li>
              <li className="plan-feature">
                <ion-icon name="home-outline" className="plan-icon"></ion-icon>
                <span>2x agendamentos de corte ao domicílio</span>
              </li>
              <li className="plan-feature">
                <ion-icon name="logo-whatsapp" className="plan-icon"></ion-icon>
                <span>Suporte prioritário</span>
              </li>
              <li className="plan-feature">
                <ion-icon
                  name="people-outline"
                  className="plan-icon"
                ></ion-icon>
                <span>Comunidade online</span>
              </li>
            </ul>
            <div className="plan-price">50k AOA/mês</div>
          </div>
          <button className="plan-btn">Assinar Plano Premium</button>
        </motion.div>
      </div>
    );
}