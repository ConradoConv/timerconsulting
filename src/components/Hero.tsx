import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
      <div 
        className="absolute top-0 w-full h-full bg-center bg-cover" 
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.95)), url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80')",
        }}
      >
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
            <div className="text-white space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Desenvolvida para Desenvolver
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-300">
                A Timer Consultoria combina inovação, expertise jurídica e uma abordagem consultiva para impulsionar empresas com segurança e eficiência.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                <div className="p-6 border border-white/20 rounded-lg backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-2">Missão</h3>
                  <p className="text-sm text-gray-300">
                    Ser a consultoria mais confiável para estruturação de negócios e serviços jurídicos no Brasil.
                  </p>
                </div>
                <div className="p-6 border border-white/20 rounded-lg backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-2">Visão</h3>
                  <p className="text-sm text-gray-300">
                    Até 2028, ser referência em inovação jurídica e empresarial no Brasil.
                  </p>
                </div>
                <div className="p-6 border border-white/20 rounded-lg backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-2">Valores</h3>
                  <p className="text-sm text-gray-300">
                    Transparência, ética, resiliência e foco no cliente.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-transparent text-white border-white hover:bg-white hover:text-black font-semibold"
                >
                  Agendar Consultoria
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;