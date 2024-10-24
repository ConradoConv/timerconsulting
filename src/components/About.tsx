import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <img src="/about-image.jpg" alt="Timer Consultoria Team" className="rounded-lg shadow-xl" />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-4xl font-bold mb-6">Sobre a Timer Consultoria</h2>
            <p className="text-gray-600 mb-6">
              Fundada por Natália Camargo Convento e Conrado Convento, a Timer Consultoria 
              nasceu da união entre expertise jurídica e vivência empresarial. Nossa missão 
              é proporcionar soluções jurídicas e empresariais inovadoras, garantindo 
              segurança e eficiência para nossos clientes.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-3xl text-primary mb-2">10+</h3>
                  <p className="text-gray-600">Anos de Experiência</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-3xl text-primary mb-2">200+</h3>
                  <p className="text-gray-600">Clientes Atendidos</p>
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