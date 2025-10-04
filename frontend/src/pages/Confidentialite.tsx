import React from 'react';

const Confidentialite: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Collecte des données</h2>
            <p className="text-gray-700 mb-4">
              Nous collectons les informations que vous nous fournissez directement, notamment :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Messages et demandes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Utilisation des données</h2>
            <p className="text-gray-700 mb-4">Vos données personnelles sont utilisées pour :</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Répondre à vos demandes</li>
              <li>Traiter vos commandes</li>
              <li>Vous informer de nos produits et services</li>
              <li>Améliorer notre service client</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Protection des données</h2>
            <p className="text-gray-700">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles 
              contre la destruction, la perte, l'altération, la divulgation ou l'accès non autorisés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vos droits</h2>
            <p className="text-gray-700 mb-4">Vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit d'effacement</li>
              <li>Droit d'opposition</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Pour exercer ces droits, contactez-nous à : contact@cocoricooo.sn
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Conservation des données</h2>
            <p className="text-gray-700">
              Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles sont collectées, 
              et dans le respect des obligations légales.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Confidentialite;