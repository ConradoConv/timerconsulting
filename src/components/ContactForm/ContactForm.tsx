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
import SuccessMessage from "./SuccessMessage";
import ContactInfo from "./ContactInfo";

interface ContactFormProps {
  className?: string;
  showContactInfo?: boolean;
}

const ContactForm = ({ className = "", showContactInfo = true }: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    sector: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      emailjs.init("D_RnWlH_CGPwVcM4e");

      const result = await emailjs.send(
        'service_5hcq1xd',
        'template_0aar80i',
        {
          from_name: formData.name,
          from_empresa: formData.company,
          from_setor: formData.sector,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.message,
          to_email: 'conrado@timerbusiness.com.br',
        }
      );

      if (result.text === 'OK') {
        toast({
          title: "Mensagem enviada!",
          description: "Entraremos em contato em breve.",
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          sector: '',
          message: ''
        });
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Houve um problema ao enviar sua mensagem. Por favor, tente novamente mais tarde ou entre em contato conosco diretamente.",
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

  if (isSubmitted) {
    return <SuccessMessage onReset={() => setIsSubmitted(false)} />;
  }

  return (
    <div className={className}>
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
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Telefone" 
            required 
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" 
          />
          <Input 
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Nome da Empresa" 
            required 
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" 
          />
        </div>
        
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

      {showContactInfo && <ContactInfo />}
    </div>
  );
};

export default ContactForm;