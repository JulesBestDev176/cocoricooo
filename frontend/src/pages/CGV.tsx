import React from 'react';
import { FileText, Package, ShoppingCart, CreditCard, Truck, Shield, AlertCircle, Scale } from 'lucide-react';

const CGV: React.FC = () => {
  const articles = [
    {
      icon: FileText,
      number: 1,
      title: "Objet",
      content: "Les présentes conditions générales de vente régissent les relations contractuelles entre Cocorico et ses clients pour la vente de volailles, poussins, œufs et produits avicoles."
    },
    {
      icon: Package,
      number: 2,
      title: "Produits",
      description: "Nos produits comprennent :",
      items: ["Poussins de race Goliath", "Poulets de chair", "Œufs de reproduction", "Conseils et accompagnement en élevage"]
    },
    {
      icon: ShoppingCart,
      number: 3,
      title: "Commandes",
      content: "Les commandes peuvent être passées par téléphone au +221 77 715 10 61 ou par email à contact@cocoricooo.sn. Toute commande implique l'acceptation pleine et entière des présentes conditions générales de vente.",
      highlight: true
    },
    {
      icon: CreditCard,
      number: 4,
      title: "Prix et paiement",
      content: "Les prix sont exprimés en francs CFA (FCFA) et sont valables au jour de la commande. Le paiement s'effectue comptant à la livraison ou selon les modalités convenues."
    },
    {
      icon: Truck,
      number: 5,
      title: "Livraison",
      content: "Les livraisons s'effectuent dans la région de Dakar et environs. Les délais de livraison sont donnés à titre indicatif et peuvent varier selon la disponibilité des produits."
    },
    {
      icon: Shield,
      number: 6,
      title: "Garanties",
      content: "Nous garantissons la qualité sanitaire de nos produits. En cas de problème, le client doit nous informer dans les 24 heures suivant la livraison.",
      highlight: true
    },
    {
      icon: AlertCircle,
      number: 7,
      title: "Responsabilité",
      content: "Notre responsabilité est limitée au remplacement des produits défectueux ou au remboursement. Nous ne saurions être tenus responsables des dommages indirects."
    },
    {
      icon: Scale,
      number: 8,
      title: "Droit applicable",
      content: "Les présentes conditions générales de vente sont soumises au droit sénégalais. Tout litige sera de la compétence des tribunaux de Dakar."
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-cocorico-yellow px-4 py-2 rounded-full mb-6">
            <span className="text-cocorico-red font-bold text-sm">Conditions commerciales</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Conditions Générales de Vente</h1>
          <div className="w-24 h-1 bg-cocorico-red mx-auto" />
        </div>
        
        <div className="space-y-6">
          {articles.map((article, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow ${
              article.highlight ? 'ring-2 ring-cocorico-yellow' : ''
            }`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-cocorico-yellow rounded-lg flex items-center justify-center mr-4">
                  <article.icon className="w-6 h-6 text-cocorico-red" />
                </div>
                <div>
                  <span className="text-sm font-bold text-cocorico-red">Article {article.number}</span>
                  <h2 className="text-2xl font-bold text-gray-900">{article.title}</h2>
                </div>
              </div>
              
              {article.description && (
                <p className="text-gray-700 mb-4">{article.description}</p>
              )}
              
              {article.items && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  {article.items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cocorico-red rounded-full flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {article.content && (
                <p className="text-gray-700 leading-relaxed">{article.content}</p>
              )}
            </div>
          ))}
        </div>
        
        {/* Footer note */}
        <div className="mt-12 bg-cocorico-yellow/20 rounded-xl p-6 border-l-4 border-cocorico-red">
          <p className="text-gray-700 text-center">
            <strong>Note importante :</strong> Ces conditions générales de vente sont applicables à toutes nos transactions commerciales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CGV;