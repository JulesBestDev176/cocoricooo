import React from 'react';

const MentionsLegales: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Informations légales</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>Raison sociale :</strong> Cocorico</p>
              <p><strong>Adresse :</strong> Comico 4, Yeumbeul Nord, Keur Massar, Dakar, Sénégal</p>
              <p><strong>Téléphone :</strong> +221 77 715 10 61</p>
              <p><strong>Email :</strong> contact@cocoricooo.sn</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Directeur de publication</h2>
            <p className="text-gray-700">Le directeur de la publication est le représentant légal de Cocorico.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hébergement</h2>
            <p className="text-gray-700">Ce site est hébergé par un prestataire technique dont les coordonnées sont disponibles sur demande.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Propriété intellectuelle</h2>
            <p className="text-gray-700">
              L'ensemble de ce site relève de la législation sénégalaise et internationale sur le droit d'auteur et la propriété intellectuelle. 
              Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsabilité</h2>
            <p className="text-gray-700">
              Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, 
              mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;