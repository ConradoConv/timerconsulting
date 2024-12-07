import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Scale, Map, CreditCard, Building2, Users, LineChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Consultoria em Meios de Pagamento e Fintechs",
    description: "Assessoria especializada para empresas de tecnologia financeira e soluções de pagamento",
    icon: CreditCard,
    path: "/payment-consulting"
  },
  {
    title: "Estruturação Empresarial",
    description: "Planejamento e estruturação eficiente para seu empreendimento",
    icon: Building2,
    path: "/business-consulting"
  },
  {
    title: "Mapeamento de Processos",
    description: "Mapeamento e otimização de processos utilizando notação BPMN",
    icon: Map,
    path: "/business-consulting"
  },
  {
    title: "Governança Corporativa",
    description: "Implementação das melhores práticas de governança do mercado",
    icon: Users,
    path: "/business-consulting"
  },
  {
    title: "Consultoria Jurídica",
    description: "Assessoria legal estratégica para proteger e impulsionar seu negócio",
    icon: Scale,
    path: "/business-consulting"  // Mudei o path para /business-consulting
  },
  {
    title: "Gestão Estratégica",
    description: "Consultoria para crescimento sustentável e eficiência operacional",
    icon: LineChart,
    path: "/business-consulting"
  }
];

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (path: string) => {
    navigate(path);
  };

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">Nossos Serviços</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Soluções completas e personalizadas para todas as necessidades do seu negócio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-shadow duration-300 bg-white border-gray-200 cursor-pointer transform hover:scale-105 transition-transform"
              onClick={() => handleServiceClick(service.path)}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-black">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
