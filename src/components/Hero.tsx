import { Button } from "@/components/ui/button";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
        <div 
          className="absolute top-0 w-full h-full bg-center bg-cover" 
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.95)), url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80')",
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

                <div className="mt-10">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-transparent text-white border-white hover:bg-white hover:text-black font-semibold"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Agendar Consultoria
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConsultationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Hero;