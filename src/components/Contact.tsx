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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para ajudar sua empresa a crescer com segurança jurídica e eficiência
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input placeholder="Nome" required />
              <Input type="email" placeholder="Email" required />
            </div>
            <Input placeholder="Assunto" required />
            <Textarea placeholder="Mensagem" className="h-32" required />
            <Button type="submit" className="w-full">Enviar Mensagem</Button>
          </form>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold mb-2">Endereço</h3>
              <p className="text-gray-600">São Paulo, SP</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">contato@timerconsultoria.com.br</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Telefone</h3>
              <p className="text-gray-600">(11) 99999-9999</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;