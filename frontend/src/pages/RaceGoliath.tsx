import React from 'react';
import { Award, TrendingUp, Shield, Heart, MapPin, Scale } from 'lucide-react';

const RaceGoliath: React.FC = () => {
  const caracteristiques = [
    {
      icon: MapPin,
      title: 'Origine Bénin',
      description: 'Race africaine authentique de 60 cm de taille'
    },
    {
      icon: Shield,
      title: 'Résistance naturelle',
      description: 'Immunité contre les infections bactériennes'
    },
    {
      icon: TrendingUp,
      title: 'Croissance rapide',
      description: '2,5 kg en 3 mois, 5 kg en 5-6 mois'
    },
    {
      icon: Heart,
      title: 'Viande de qualité',
      description: 'Chair tendre, succulente et biologique'
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-cocorico-yellow px-4 py-2 rounded-full mb-6">
            <span className="text-cocorico-red font-bold text-lg">Made in Africa</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Poulets Goliath
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Le poulet bicyclette géant du Bénin, croisement génétique entre races africaines pour une qualité exceptionnelle.
          </p>
        </div>

        {/* Caractéristiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {caracteristiques.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-cocorico-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-cocorico-red" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Contenu principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Origine et génétique</h2>
              <p className="text-gray-700 mb-4">
                Les poulets Goliath ont vu le jour au Bénin. Ils sont issus d'un croisement génétique entre des races de poulets africains, 
                notamment le poulet peulh, le poulet du Ghana et le poulet local (poulet bicyclette).
              </p>
              <p className="text-gray-700">
                Ils se distinguent par leur taille imposante (60 cm), leur carrure robuste et leur résistance naturelle aux infections bactériennes.
              </p>
            </div>

            <div className="bg-cocorico-yellow rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Performances de croissance</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Poids naissance</span>
                  <span className="text-cocorico-red font-bold">45-55 g</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">3 mois</span>
                  <span className="text-cocorico-red font-bold">2,5 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">5-6 mois</span>
                  <span className="text-cocorico-red font-bold">5 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Mâle adulte</span>
                  <span className="text-cocorico-red font-bold">11 kg</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Pourquoi investir ?</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cocorico-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Très appréciés par les consommateurs
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cocorico-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Résistants aux maladies bactériennes
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cocorico-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Viande bio et saine recherchée
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cocorico-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Consomment moins que les races exotiques
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cocorico-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Retour sur investissement satisfaisant
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Production d'œufs</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-cocorico-red pl-4">
                  <h4 className="font-semibold text-gray-900">Ponte dès 5 mois</h4>
                  <p className="text-gray-600 text-sm">Cycle de ponte de 18 mois</p>
                </div>
                <div className="border-l-4 border-cocorico-red pl-4">
                  <h4 className="font-semibold text-gray-900">320 œufs/an</h4>
                  <p className="text-gray-600 text-sm">Œufs de 70g en moyenne</p>
                </div>
                <div className="border-l-4 border-cocorico-red pl-4">
                  <h4 className="font-semibold text-gray-900">Ratio reproduction</h4>
                  <p className="text-gray-600 text-sm">4 femelles pour 1 mâle</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modes d'élevage */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Modes d'élevage adaptables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-cocorico-red rounded-full"></div>
                <span className="text-gray-700">Élevage en divagation avec ou sans abris</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-cocorico-red rounded-full"></div>
                <span className="text-gray-700">Parcours libre contrôlé avec poulailler</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-cocorico-red rounded-full"></div>
                <span className="text-gray-700">Claustration sur litière en bâtiment clos</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-cocorico-red rounded-full"></div>
                <span className="text-gray-700">Élevage en batterie avec cages empilées</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaceGoliath;