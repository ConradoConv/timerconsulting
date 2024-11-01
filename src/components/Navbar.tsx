import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full bg-black/90 backdrop-blur-md z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Lora, serif' }}>TIMER CONSULTING</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-white hover:text-gray-300 transition-colors">Serviços</a>
              <a href="#about" className="text-white hover:text-gray-300 transition-colors">Sobre</a>
              <a href="#contact" className="text-white hover:text-gray-300 transition-colors">Contato</a>
              <Button 
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-black transition-colors font-medium"
                onClick={() => setIsModalOpen(true)}
              >
                Agende uma Consulta
              </Button>
            </div>

            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-white hover:text-gray-300 transition-colors"
              >
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#services" className="block px-3 py-2 text-white hover:text-gray-300 transition-colors">Serviços</a>
              <a href="#about" className="block px-3 py-2 text-white hover:text-gray-300 transition-colors">Sobre</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-gray-300 transition-colors">Contato</a>
              <Button 
                variant="outline"
                className="w-full mt-2 border-white bg-transparent text-white hover:bg-white hover:text-black transition-colors font-medium"
                onClick={() => {
                  setIsModalOpen(true);
                  setIsOpen(false);
                }}
              >
                Agende uma Consulta
              </Button>
            </div>
          </div>
        )}
      </nav>

      <ConsultationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Navbar;