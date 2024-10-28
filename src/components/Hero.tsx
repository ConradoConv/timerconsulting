import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.95)), url('https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80')",
      }}>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold leading-tight">
                Excelência em Consultoria Empresarial
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                Transformando desafios em oportunidades com soluções jurídicas e empresariais personalizadas.
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                className="mt-10 bg-transparent text-white border-white hover:bg-white hover:text-black font-semibold"
              >
                Conheça Nossos Serviços
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;