import React from 'react';
import { Building, Phone, Mail, MapPin, User, Server, Copyright, AlertTriangle } from 'lucide-react';

const MentionsLegales: React.FC = () => {
  const sections = [
    {
      icon: Building,
      title: "Informations légales",
      content: [
        { label: "Raison sociale", value: "Cocorico" },
        { label: "Adresse", value: "Comico 4, Yeumbeul Nord, Keur Massar, Dakar, Sénégal" },
        { label: "Téléphone", value: "+221 77 715 10 61" },
        { label: "Email", value: "contact@cocoricooo.sn" }
      ]
    },
    {
      icon: User,
      title: "Directeur de publication",
      text: "Le directeur de la publication est le représentant légal de Cocorico."
    },
    {
      icon: Server,
      title: "Hébergement",
      text: "Ce site est hébergé par un prestataire technique dont les coordonnées sont disponibles sur demande."
    },
    {
      icon: Copyright,
      title: "Propriété intellectuelle",
      text: "L'ensemble de ce site relève de la législation sénégalaise et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques."
    },
    {
      icon: AlertTriangle,
      title: "Responsabilité",
      text: "Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes."
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-cocorico-yellow px-4 py-2 rounded-full mb-6">
            <span className="text-cocorico-red font-bold text-sm">Informations légales</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Mentions Légales</h1>
          <div className="w-24 h-1 bg-cocorico-red mx-auto" />
        </div>
        
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-cocorico-yellow rounded-lg flex items-center justify-center mr-4">
                  <section.icon className="w-6 h-6 text-cocorico-red" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
              </div>
              
              {section.content ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.content.map((item, idx) => (
                    <div key={idx} className="border-l-4 border-cocorico-red pl-4">
                      <p className="font-semibold text-gray-900 mb-1">{item.label}</p>
                      <p className="text-gray-700">{item.value}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-700 leading-relaxed">{section.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;