import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Scale, Shield, FileText, Building2, Users, LineChart } from "lucide-react";

const services = [
  {
    title: "Consultoria Jurídica e Empresarial",
    description: "Soluções jurídicas personalizadas para proteger e impulsionar seu negócio",
    icon: Scale
  },
  {
    title: "Estruturação de Negócios",
    description: "Planejamento estratégico e estruturação eficiente para seu empreendimento",
    icon: Building2
  },
  {
    title: "Compliance",
    description: "Implementação de programas de conformidade e gestão de riscos",
    icon: Shield
  },
  {
    title: "Governança Corporativa",
    description: "Desenvolvimento de práticas de governança alinhadas às melhores práticas do mercado",
    icon: Users
  },
  {
    title: "Contratos Estratégicos",
    description: "Elaboração e revisão de contratos com foco na proteção do seu negócio",
    icon: FileText
  },
  {
    title: "Consultoria em Crescimento",
    description: "Estratégias para expansão sustentável e gestão eficiente",
    icon: LineChart
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Nossos Serviços</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Oferecemos soluções completas para todas as necessidades operacionais e jurídicas da sua empresa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-900/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-gray-900" />
                </div>
                <CardTitle className="text-gray-900">{service.title}</CardTitle>
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