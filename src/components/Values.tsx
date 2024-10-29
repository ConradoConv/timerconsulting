const Values = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Nossa Essência</h2>
          <p className="text-xl text-gray-300">
            Compromisso com a excelência e segurança jurídica
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-white/20 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4">Missão</h3>
            <p className="text-gray-300">
              Ser a consultoria mais confiável para estruturação de negócios e serviços jurídicos no Brasil.
            </p>
          </div>
          <div className="p-8 border border-white/20 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4">Visão</h3>
            <p className="text-gray-300">
              Até 2028, ser referência em inovação jurídica e empresarial no Brasil.
            </p>
          </div>
          <div className="p-8 border border-white/20 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4">Valores</h3>
            <p className="text-gray-300">
              Transparência, ética, resiliência e foco no cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;