import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ContactForm from "./ContactForm/ContactForm";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black text-white max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Agende uma Consulta</DialogTitle>
        </DialogHeader>
        <ContactForm showContactInfo={false} className="mt-4" />
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;