import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    sector: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSectorChange = (value: string) => {
    setFormData({
      ...formData,
      sector: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        'service_5hcq1xd',
        'template_0aar80i',
        {
          from_name: formData.name,
          from_empresa: formData.company,
          from_setor: formData.sector,
          from_email: formData.email,
          message: formData.message,
          to_email: 'conrado@timerbusiness.com.br',
        },
        'D_RnWlH_CGPwVcM4e'
      );

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        sector: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive"
      });
    }
  };

  const sectors = [
    "Construção Civil",
    "Fintechs",
    "Meios de Pagamento",
    "Equipamentos Eletrônicos",
    "Indústrias",
    "Tecnologia",
    "Varejo",
    "Saúde",
    "Educação",
    "Serviços Financeiros",
    "Logística",
    "E-commerce",
    "Outros"
  ];

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
              <Input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nome" 
                required 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" 
              />
              <Input 
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email" 
                placeholder="Email" 
                required 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nome da Empresa" 
                required 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" 
              />
              <Select onValueChange={handleSectorChange} value={formData.sector}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Selecione o setor" />
                </SelectTrigger>
                <SelectContent>
                  {sectors.map((sector) => (
                    <SelectItem key={sector} value={sector.toLowerCase()}>
                      {sector}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
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
              <p className="text-gray-300">R. André Fernandes, 205A - Itaim Bibi, São Paulo - SP</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-300">contato@timerbusiness.com.br</p>
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
