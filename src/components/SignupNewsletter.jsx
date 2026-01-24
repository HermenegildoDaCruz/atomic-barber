import { Form, useNavigation } from "react-router-dom";
import { motion } from "motion/react";

export default function SignupNewsletter() {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="signup-newsletter"
    >
      <div className="signup-newsletter--form-box">
        <h2 className="heading-terciary">Assinar newsletter</h2>
        <p>Receba nossos artigos e promoções. Basta enviar seus dados </p>
        
        <Form className="newsletter-form" method="POST">
          <input
            type="text"
            name="username"
            placeholder="Digite seu nome"
            maxLength={40}
            required
            className="newsletter-field"
          />
          <input
            type="email"
            name="email"
            id="iemail"
            placeholder="Digite o seu email"
            required
            className="newsletter-field"
          />
          <button className="signup-newsletter--btn">{isSubmitting ? "Enviando...":"Enviar"}</button>
        </Form>
      </div>
    </motion.div>
  );
}
