import React from 'react';
import { Phone, MapPin, Clock, Heart, Shield, Scissors, Stethoscope, MessageCircle } from 'lucide-react';

function App() {
  const whatsappNumber = "5511999999999"; // Substitua pelo número real
  const whatsappMessage = "Olá! Gostaria de agendar um atendimento no Castelo dos Pets.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-50 to-amber-100 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent drop-shadow-lg">
                  CASTELO DOS PETS
                </h1>
                <p className="text-amber-600 text-lg font-semibold tracking-wide">Clínica Veterinária</p>
              </div>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MessageCircle size={20} />
              <span className="font-semibold">Contato WhatsApp</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-100 via-white to-amber-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Cuidado Real para Seus <span className="text-amber-600">Pets</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            No Castelo dos Pets, oferecemos atendimento veterinário de excelência com amor, 
            dedicação e tecnologia de ponta para garantir a saúde e bem-estar do seu melhor amigo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Agendar Consulta
            </button>
            <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Nossos Serviços
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Nossos Serviços</h3>
            <p className="text-xl text-gray-600">Cuidado completo para seu pet em todas as fases da vida</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Stethoscope className="text-amber-600" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">Consultas Veterinárias</h4>
              <p className="text-gray-600 text-center">Atendimento clínico completo com profissionais especializados</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Scissors className="text-blue-600" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">Banho e Tosa</h4>
              <p className="text-gray-600 text-center">Serviços de higiene e estética para deixar seu pet ainda mais belo</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield className="text-green-600" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">Vacinação</h4>
              <p className="text-gray-600 text-center">Programa completo de imunização para proteger seu pet</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="text-red-600" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">Emergências</h4>
              <p className="text-gray-600 text-center">Atendimento de urgência 24h para quando seu pet mais precisa</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">Por que escolher o Castelo dos Pets?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Heart className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Amor e Dedicação</h4>
                    <p className="text-gray-600">Tratamos cada pet como se fosse nosso, com carinho e atenção especial.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Shield className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Profissionais Qualificados</h4>
                    <p className="text-gray-600">Equipe de veterinários experientes e especializados em diversas áreas.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Stethoscope className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Equipamentos Modernos</h4>
                    <p className="text-gray-600">Tecnologia de ponta para diagnósticos precisos e tratamentos eficazes.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-8 rounded-2xl">
              <div className="text-center">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent drop-shadow-lg">
                    CASTELO DOS PETS
                  </h2>
                  <p className="text-amber-700 font-semibold">Clínica Veterinária</p>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">Seu pet merece o melhor!</h4>
                <p className="text-gray-700 mb-6">Agende uma consulta e descubra por que somos a escolha de milhares de famílias.</p>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Falar no WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Entre em Contato</h3>
            <p className="text-xl text-gray-300">Estamos aqui para cuidar do seu melhor amigo</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Phone size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Telefone</h4>
              <p className="text-gray-300">(11) 99999-9999</p>
              <p className="text-gray-300">(11) 3333-3333</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <MapPin size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Endereço</h4>
              <p className="text-gray-300">Rua dos Pets, 123</p>
              <p className="text-gray-300">Centro - São Paulo/SP</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Clock size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Horário</h4>
              <p className="text-gray-300">Segunda a Sexta: 8h às 18h</p>
              <p className="text-gray-300">Sábado: 8h às 14h</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-3 mx-auto"
            >
              <MessageCircle size={24} />
              <span>Agendar pelo WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="text-center">
              <h5 className="text-2xl font-bold bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent drop-shadow-lg">
                CASTELO DOS PETS
              </h5>
              <p className="text-gray-400">Clínica Veterinária</p>
            </div>
          </div>
          <p className="text-gray-400">© 2025 Castelo dos Pets. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Contato WhatsApp"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
}

export default App;