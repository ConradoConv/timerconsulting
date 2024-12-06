const ContactInfo = () => (
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
      <p className="text-gray-300">(11) 96982-9386</p>
    </div>
  </div>
);

export default ContactInfo;