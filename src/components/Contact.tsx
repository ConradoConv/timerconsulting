import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Estamos prontos para ajudar seu negócio a alcançar novos patamares
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;