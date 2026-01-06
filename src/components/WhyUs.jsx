import hairstylesImage from "../assets/images/avatar-right.png";
import AnimatedListItem from "./AnimatedListItem";


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
          <AnimatedListItem className="why-us-item">
            <ion-icon name="cut-outline" className="why-us-icon"></ion-icon>
            <h3 className="heading-terciary">Profissionais Experientes</h3>
            <p>
              Nossos barbeiros são qualificados e atualizados com as últimas
              tendências para garantir um visual alinhado ao teu estilo.
            </p>
          </AnimatedListItem>
          <AnimatedListItem className="why-us-item">
            <ion-icon name="person-outline" className="why-us-icon"></ion-icon>
            <h3 className="heading-terciary">Atendimento Personalizado</h3>
            <p>
              Analisamos o formato do rosto, estilo de vida e preferência
              pessoal para entregar um resultado sob medida.
            </p>
          </AnimatedListItem>
          <AnimatedListItem className="why-us-item">
            <ion-icon
              name="business-outline"
              className="why-us-icon"
            ></ion-icon>
            <h3 className="heading-terciary">Ambiente Moderno</h3>
            <p>
              Criamos um espaço confortável, limpo e moderno, onde o corte é uma
              experiência, não apenas um serviço.
            </p>
          </AnimatedListItem>
          <AnimatedListItem className="why-us-item">
            <ion-icon
              name="shield-checkmark-outline"
              className="why-us-icon"
            ></ion-icon>
            <h3 className="heading-terciary">Qualidade e Higiene</h3>
            <p>
              Utilizamos produtos profissionais e seguimos padrões rigorosos de
              higiene para garantir tua segurança e bem-estar.
            </p>
          </AnimatedListItem>
        </ul>
      </div>
    </section>
  );
}
