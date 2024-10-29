import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <img 
              src="/src/timer imagem sobre.jpg"
              alt="Timer Consulting Team" 
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-4xl font-bold mb-6 text-black">Sobre a Timer Consulting</h2>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Com uma abordagem inovadora e personalizada, a Timer Consulting se destaca 
              no mercado de consultoria empresarial. Nossa expertise combina conhecimento 
              jurídico aprofundado com vivência prática no mundo dos negócios, 
              oferecendo soluções que realmente fazem a diferença para nossos clientes.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-black">
                <CardContent className="p-6">
                  <h3 className="font-bold text-3xl text-white mb-2">10+</h3>
                  <p className="text-gray-300">Anos de Experiência</p>
                </CardContent>
              </Card>
              <Card className="bg-black">
                <CardContent className="p-6">
                  <h3 className="font-bold text-3xl text-white mb-2">200+</h3>
                  <p className="text-gray-300">Clientes Atendidos</p>
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