import React from 'react';
import { Egg } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: null,
      image: '/icone/chicken.png',
      title: 'Poulets de chair\nrace Goliath',
      description: 'Volailles de qualité supérieure, race locale améliorée'
    },
    {
      icon: null,
      image: '/icone/poule.png',
      title: 'Poulets de reproduction\nrace Goliath',
      description: 'Reproducteurs sélectionnés pour la qualité génétique'
    },
    {
      icon: null,
      image: '/icone/poussin.png',
      title: 'Poussins d\'un jour\nrace Goliath',
      description: 'Jeunes poussins en parfaite santé, prêts pour l\'élevage'
    },
    {
      icon: Egg,
      title: 'Œufs de poules\nrace Goliath',
      description: 'Œufs frais de qualité, produits dans nos élevages'
    }
  ];

  return (
    <section className="py-12 bg-cocorico-yellow">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-cocorico-red mb-2">
            Nos Services
          </h2>
          <p className="text-lg font-semibold text-gray-800">
            Tous nos produits proviennent de la race Goliath
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-4 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-cocorico-red rounded-full flex items-center justify-center mb-2 sm:mb-4 shadow-lg">
                  {service.image ? (
                    <img src={service.image} alt="" className="w-6 h-6 sm:w-10 sm:h-10" />
                  ) : Icon ? (
                    <Icon className="w-6 h-6 sm:w-10 sm:h-10 text-white" />
                  ) : null}
                </div>
                <div className="h-20 sm:h-24 flex flex-col justify-start">
                  <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-800 mb-1 sm:mb-2 leading-tight whitespace-pre-line">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-gray-700 leading-tight sm:leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;