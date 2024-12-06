import { Button } from "@/components/ui/button";

interface SuccessMessageProps {
  onReset: () => void;
}

const SuccessMessage = ({ onReset }: SuccessMessageProps) => (
  <div className="text-center py-20">
    <h2 className="text-3xl font-bold mb-4">Obrigado pelo seu contato!</h2>
    <p className="text-xl">Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.</p>
    <Button 
      onClick={onReset} 
      className="mt-8 bg-white text-black hover:bg-gray-200 font-semibold"
    >
      Enviar outra mensagem
    </Button>
  </div>
);

export default SuccessMessage;