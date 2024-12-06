import { Button } from "@/components/ui/button";
import { Building2, Handshake, DollarSign, Code } from "lucide-react";
import { useState } from "react";
import ConsultationModal from "@/components/ConsultationModal";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const PaymentConsulting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const differentials = [
    "Mais de 10 anos de experiência em meios de pagamento e estruturação de fintechs",
    "Consultoria focada na visão de negócio e produto, não apenas no regulatório",
    "Apresentação de soluções estruturais alinhadas aos objetivos do cliente",
    "Mapeamento completo das necessidades e estratégias personalizadas",
    "Conexão com os melhores fornecedores, parceiros e profissionais do mercado",
    "Garantia de entregáveis claros, objetivos e mensuráveis"
  ];

  const approaches = [
    {
      title: "Estruturação de Fintechs",
      description: "Ajuda na criação de fintechs do zero: estrutura jurídica, societária e operacional",
      icon: Building2
    },
    {
      title: "Parcerias Estratégicas",
      description: "Apresentação de fornecedores e parceiros ideais para cada etapa da operação",
      icon: Handshake
    },
    {
      title: "Precificação e Propostas",
      description: "Estratégias de precificação e criação de produtos que maximizam a rentabilidade",
      icon: DollarSign
    },
    {
      title: "TI e Software",
      description: "Indicação das melhores soluções tecnológicas para garantir eficiência e escalabilidade",
      icon: Code
    }
  ];

  const deliverables = [
    "Mapeamento das necessidades e plano estratégico de execução",
    "Lista de fornecedores, contratos e parceiros recomendados",
    "Documento detalhado com estratégias de precificação e modelagem de produtos",
    "Planos de implementação de TI/software",
    "Conexão direta com profissionais relevantes no mercado"
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed w-full bg-black/90 backdrop-blur-md z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Lora, serif' }}>TIMER CONSULTING</h1>
            </Link>
          </div>
        </div>
      </header>

      {/* Add padding-top to account for fixed header */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-black text-white py-32 md:py-40 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center leading-tight">
              Consultoria para Fintechs e Meios de Pagamento
            </h1>
            <p className="text-lg md:text-xl text-center max-w-4xl mx-auto mb-12 leading-relaxed">
              Estruturação e Soluções Estratégicas com Ênfase em Negócios e Produtos.
            </p>
            <div className="text-center">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-6 text-lg"
              >
                Solicitar uma Reunião
              </Button>
            </div>
          </div>
        </section>

        {/* Differentials Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Por Que Escolher Nossa Consultoria?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {differentials.map((differential, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start gap-4"
                >
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <p className="text-lg">{differential}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">
              Nossa Abordagem em Meios de Pagamento e Fintechs
            </h2>
            <p className="text-lg text-center max-w-4xl mx-auto mb-12 text-gray-300">
              Cada cliente é único, e nossa abordagem começa com um mapeamento detalhado das 
              necessidades e objetivos da sua operação. Entregamos soluções sob medida que 
              incluem estruturação societária, operacional, tecnológica e comercial, garantindo 
              que todos os aspectos do seu negócio estejam alinhados com as melhores práticas 
              do mercado.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approaches.map((approach, index) => (
                <div 
                  key={index}
                  className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="inline-block p-4 bg-white rounded-full mb-4">
                    <approach.icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{approach.title}</h3>
                  <p className="text-gray-300">{approach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-20 bg-gradient-to-br from-gray-100 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">
              Resultados Claros e Objetivos
            </h2>
            <p className="text-lg text-center max-w-4xl mx-auto mb-12">
              Nosso compromisso é entregar resultados palpáveis e soluções que realmente 
              impactem o negócio do cliente. Não acreditamos em consultorias que se estendem 
              indefinidamente sem objetivos claros.
            </p>
            <div className="max-w-4xl mx-auto">
              {deliverables.map((deliverable, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4 flex items-center gap-4"
                >
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <p className="text-lg">{deliverable}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6">
              Pronto para Estruturar Sua Fintech ou Otimizar Seus Processos?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Entre em contato para uma reunião inicial e descubra como podemos ajudar sua 
              empresa a crescer com segurança, inovação e resultados mensuráveis.
            </p>
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-6 text-lg"
            >
              Solicite uma reunião
            </Button>
          </div>
        </section>

        <Footer />

        <ConsultationModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default PaymentConsulting;
