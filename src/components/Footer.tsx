import { MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/src/Design sem nome.png" alt="Timer Consulting" className="h-12 mb-4" />
            <p className="text-gray-400">
              Transformando desafios em oportunidades com soluções empresariais inovadoras.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white">Serviços</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">Sobre</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Consultoria Jurídica</li>
              <li className="text-gray-400">Estruturação Empresarial</li>
              <li className="text-gray-400">Compliance</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">R. André Fernandes, 205A - Itaim Bibi, São Paulo - SP</li>
              <li className="text-gray-400">(11) 96982-9386</li>
              <li className="text-gray-400">contato@timerbusiness.com.br</li>
            </ul>
            <div className="flex mt-4">
              <a 
                href="https://wa.me/5511969829386" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MessageSquare className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Timer Consulting. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;