import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-800/90 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <img 
              src="/timer-logo.png" 
              alt="Timer Consulting" 
              className="h-8 w-auto brightness-0 invert" 
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Serviços</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">Sobre</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contato</a>
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-gray-900 transition-colors"
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
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Serviços</a>
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Sobre</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Contato</a>
            <Button 
              variant="outline" 
              className="w-full mt-2 text-white border-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Agende uma Consulta
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;