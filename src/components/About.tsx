import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
              alt="Timer Consultoria Team" 
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Sobre a Timer Consultoria</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Fundada por Natália Camargo Convento e Conrado Convento, a Timer Consultoria 
              nasceu da união entre expertise jurídica e vivência empresarial. Nossa missão 
              é proporcionar soluções jurídicas e empresariais inovadoras, garantindo 
              segurança e eficiência para nossos clientes.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gray-900">
                <CardContent className="p-6">
                  <h3 className="font-bold text-3xl text-white mb-2">10+</h3>
                  <p className="text-gray-200">Anos de Experiência</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900">
                <CardContent className="p-6">
                  <h3 className="font-bold text-3xl text-white mb-2">200+</h3>
                  <p className="text-gray-200">Clientes Atendidos</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;