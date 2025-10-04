import React from 'react';
import { Database, Target, Shield, UserCheck, Clock, Mail } from 'lucide-react';

const Confidentialite: React.FC = () => {
  const sections = [
    {
      icon: Database,
      title: "Collecte des données",
      description: "Nous collectons les informations que vous nous fournissez directement, notamment :",
      items: ["Nom et prénom", "Adresse email", "Numéro de téléphone", "Messages et demandes"]
    },
    {
      icon: Target,
      title: "Utilisation des données",
      description: "Vos données personnelles sont utilisées pour :",
      items: ["Répondre à vos demandes", "Traiter vos commandes", "Vous informer de nos produits et services", "Améliorer notre service client"]
    },
    {
      icon: Shield,
      title: "Protection des données",
      text: "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la destruction, la perte, l'altération, la divulgation ou l'accès non autorisés."
    },
    {
      icon: UserCheck,
      title: "Vos droits",
      description: "Vous disposez des droits suivants :",
      items: ["Droit d'accès à vos données", "Droit de rectification", "Droit d'effacement", "Droit d'opposition"],
      contact: "Pour exercer ces droits, contactez-nous à : contact@cocoricooo.sn"
    },
    {
      icon: Clock,
      title: "Conservation des données",
      text: "Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles sont collectées, et dans le respect des obligations légales."
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-cocorico-yellow px-4 py-2 rounded-full mb-6">
            <span className="text-cocorico-red font-bold text-sm">Protection des données</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Politique de Confidentialité</h1>
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
              
              {section.description && (
                <p className="text-gray-700 mb-4">{section.description}</p>
              )}
              
              {section.items && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cocorico-red rounded-full flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {section.text && (
                <p className="text-gray-700 leading-relaxed">{section.text}</p>
              )}
              
              {section.contact && (
                <div className="mt-4 p-4 bg-cocorico-yellow/20 rounded-lg border-l-4 border-cocorico-red">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-cocorico-red" />
                    <p className="text-gray-700 font-medium">{section.contact}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Confidentialite;