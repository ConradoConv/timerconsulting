import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/hero-bg.jpg')"
      }}>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="text-white">
              <h1 className="text-5xl font-semibold leading-tight">
                Transformando Ideias em Negócios Sólidos
              </h1>
              <p className="mt-4 text-lg">
                Consultoria jurídica e empresarial especializada em estruturação de negócios, 
                compliance e governança corporativa.
              </p>
              <Button size="lg" className="mt-8">
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