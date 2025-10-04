import React from 'react';

const CGV: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Conditions Générales de Vente</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 1 - Objet</h2>
            <p className="text-gray-700">
              Les présentes conditions générales de vente régissent les relations contractuelles entre Cocorico et ses clients 
              pour la vente de volailles, poussins, œufs et produits avicoles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 2 - Produits</h2>
            <p className="text-gray-700 mb-4">Nos produits comprennent :</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Poussins de race Goliath</li>
              <li>Poulets de chair</li>
              <li>Œufs de reproduction</li>
              <li>Conseils et accompagnement en élevage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 3 - Commandes</h2>
            <p className="text-gray-700">
              Les commandes peuvent être passées par téléphone au +221 77 715 10 61 ou par email à contact@cocoricooo.sn. 
              Toute commande implique l'acceptation pleine et entière des présentes conditions générales de vente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 4 - Prix et paiement</h2>
            <p className="text-gray-700">
              Les prix sont exprimés en francs CFA (FCFA) et sont valables au jour de la commande. 
              Le paiement s'effectue comptant à la livraison ou selon les modalités convenues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 5 - Livraison</h2>
            <p className="text-gray-700">
              Les livraisons s'effectuent dans la région de Dakar et environs. 
              Les délais de livraison sont donnés à titre indicatif et peuvent varier selon la disponibilité des produits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 6 - Garanties</h2>
            <p className="text-gray-700">
              Nous garantissons la qualité sanitaire de nos produits. En cas de problème, 
              le client doit nous informer dans les 24 heures suivant la livraison.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 7 - Responsabilité</h2>
            <p className="text-gray-700">
              Notre responsabilité est limitée au remplacement des produits défectueux ou au remboursement. 
              Nous ne saurions être tenus responsables des dommages indirects.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 8 - Droit applicable</h2>
            <p className="text-gray-700">
              Les présentes conditions générales de vente sont soumises au droit sénégalais. 
              Tout litige sera de la compétence des tribunaux de Dakar.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CGV;