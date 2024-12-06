import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Target, Shield, GitBranch, Building2 } from "lucide-react";
import { useState } from "react";
import ConsultationModal from "@/components/ConsultationModal";
import Footer from "@/components/Footer";

const BusinessConsulting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-52 bg-black text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Consultoria Empresarial
            </h1>
            <p className="text-2xl md:text-3xl mb-16 leading-relaxed">
              Estratégias e soluções para seu negócio
            </p>
            <Button 
              variant="secondary"
              size="default"
              className="bg-white text-black hover:bg-gray-100"
              onClick={() => setIsModalOpen(true)}
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </section>

      {/* Rest of the existing code remains unchanged */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Nossos Serviços em Consultoria Empresarial
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Target className="w-12 h-12 mb-6 text-black" />
              <h3 className="text-2xl font-bold mb-4">Gestão Estratégica</h3>
              <p className="text-gray-600 mb-4">
                Desenvolvemos estratégias para alinhar os objetivos de curto e longo prazo ao crescimento sustentável da empresa.
                Foco em planejamento estratégico, análise de mercado e acompanhamento de resultados.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Shield className="w-12 h-12 mb-6 text-black" />
              <h3 className="text-2xl font-bold mb-4">Governança Corporativa</h3>
              <p className="text-gray-600 mb-4">
                Implementamos práticas de governança que promovem transparência, ética e eficiência nos processos de tomada de decisão.
                Inclui estruturação de conselhos, políticas internas e frameworks de compliance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <GitBranch className="w-12 h-12 mb-6 text-black" />
              <h3 className="text-2xl font-bold mb-4">Mapeamento de Processos</h3>
              <p className="text-gray-600 mb-4">
                Identificamos, analisamos e otimizamos processos internos para reduzir desperdícios e aumentar a produtividade.
                A abordagem garante operações mais eficazes e alinhadas às metas empresariais.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Building2 className="w-12 h-12 mb-6 text-black" />
              <h3 className="text-2xl font-bold mb-4">Estruturação Empresarial</h3>
              <p className="text-gray-600 mb-4">
                Auxiliamos na organização das áreas-chave da empresa, desde a criação de estrutura societária até o desenvolvimento de modelos operacionais.
                Foco na criação de bases sólidas para crescimento e escalabilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Como Trabalhamos</h2>
          <p className="text-lg text-center max-w-4xl mx-auto mb-12">
            Nosso método é baseado em uma análise detalhada da realidade de cada cliente. Começamos com um diagnóstico aprofundado, 
            seguido de recomendações práticas e viáveis. Com um foco claro em resultados mensuráveis, trabalhamos lado a lado com 
            nossos clientes para implementar as mudanças necessárias.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Diagnóstico inicial</h3>
              <p className="text-gray-600">Análise profunda da situação atual</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Planejamento estratégico</h3>
              <p className="text-gray-600">Desenvolvimento de soluções personalizadas</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Implementação e acompanhamento</h3>
              <p className="text-gray-600">Execução e monitoramento contínuo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            O Que Você Ganha com Nossa Consultoria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Decisões Estratégicas</h3>
              <p className="text-gray-600">Melhoria nos processos de tomada de decisão</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Eficiência Operacional</h3>
              <p className="text-gray-600">Redução de custos e aumento de produtividade</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Sustentabilidade</h3>
              <p className="text-gray-600">Práticas de governança que geram confiança e longevidade no mercado</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Estruturação Sólida</h3>
              <p className="text-gray-600">Organização empresarial para suportar o crescimento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Impactos Reais para Empresas Reais
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600">
              Nossas soluções têm ajudado empresas de diversos setores a alcançarem seus objetivos de crescimento e eficiência.
              Através de nossa abordagem personalizada, temos conseguido resultados significativos em diferentes cenários empresariais.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Transforme Sua Empresa com Soluções Estratégicas
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Pronto para levar sua empresa ao próximo nível? Agende uma reunião inicial para descobrir como podemos 
            ajudar sua empresa a crescer de forma sustentável e eficiente.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              variant="secondary"
              className="bg-white text-black hover:bg-gray-200"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar uma Reunião
            </Button>
            <Button 
              variant="secondary"
              className="bg-white text-black hover:bg-gray-200"
              onClick={() => window.location.href = '/'}
            >
              Explorar Outros Serviços
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      <ConsultationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default BusinessConsulting;