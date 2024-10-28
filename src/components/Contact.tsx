import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Estamos prontos para ajudar seu negócio a alcançar novos patamares
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input placeholder="Nome" required className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
              <Input type="email" placeholder="Email" required className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
            </div>
            <Input placeholder="Assunto" required className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
            <Textarea 
              placeholder="Mensagem" 
              className="h-32 bg-white/10 border-white/20 text-white placeholder:text-gray-400" 
              required 
            />
            <Button 
              type="submit" 
              className="w-full bg-white text-black hover:bg-gray-200 font-semibold"
            >
              Enviar Mensagem
            </Button>
          </form>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold mb-2">Endereço</h3>
              <p className="text-gray-300">São Paulo, SP</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-300">contato@timerconsulting.com.br</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Telefone</h3>
              <p className="text-gray-300">(11) 99999-9999</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;