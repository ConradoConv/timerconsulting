import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80')",
      }}>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold leading-tight">
                Transformando Ideias em Negócios Sólidos
              </h1>
              <p className="mt-4 text-lg text-gray-200">
                Consultoria jurídica e empresarial especializada em estruturação de negócios, 
                compliance e governança corporativa.
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                className="mt-8 bg-white/10 text-white border-white hover:bg-white hover:text-gray-900 font-semibold"
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